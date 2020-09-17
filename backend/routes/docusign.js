//required modules 
const express = require('express')
const Router = express.Router()
const docusign = require('docusign-esign')
const fs  = require('fs')
const path = require('path')
const{promisify} = require('util')
const { handleError } = require('../helpers/errorHandler')


//Signed api  
Router.get('/sign',async(req, res)=> {
  
  //token valid for 8 hours in development field 
  const accessToken = process.env.DocuSignAccessToken
  //account id 
  const accountId = process.env.DocuSignAccountId; 
  //base path 
  const basePath  = process.env.BasePath


  // Recipient Information:
  const signerName = "Balkar Singh";
  const signerEmail = "balkarsingh132211@gmail.com"

  //document path
  const fileName = '../static/1.pdf';
  
  //creating the applicant 
  const apiClient = new docusign.ApiClient();
  apiClient.setBasePath(basePath);
  apiClient.addDefaultHeader('Authorization', 'Bearer ' + accessToken)

  // Set the DocuSign SDK components to use the apiClient object
  docusign.Configuration.default.setDefaultApiClient(apiClient);

  // Create the envelope request
  const envDef = new docusign.EnvelopeDefinition();
  //Set the Email Subject line and email message
  envDef.emailSubject = 'E-Sign document from  the BG Unified Solutions  ';
  envDef.emailBlurb = 'Sign in document At mentioned place'


  // Read the file from the document and convert it to a Base64String
  const pdfBytes = fs.readFileSync(path.resolve(__dirname, fileName))
      , pdfBase64 = pdfBytes.toString('base64');
  
  // Create the document request object
  const doc = docusign.Document.constructFromObject({documentBase64: pdfBase64,
        fileExtension: 'pdf',  // You can send other types of documents too.
        name: 'E-sign Document', documentId: '1'});

  // Create a documents object array for the envelope definition and add the doc object
  envDef.documents = [doc];

  // Create the signer object with the previously provided name / email address
  const signer = docusign.Signer.constructFromObject({name: signerName,
        email: signerEmail, routingOrder: '1', recipientId: '1'});

  // Create the signHere tab to be placed on the envelope
  const signHere = docusign.SignHere.constructFromObject({documentId: '1',
        pageNumber: '1', recipientId: '1', tabLabel: 'SignHereTab',
        xPosition: '500', yPosition: '700'});

  
  signer.tabs = docusign.Tabs.constructFromObject({signHereTabs: [signHere]});

  // Add the recipients object to the envelope definition.
  envDef.recipients = docusign.Recipients.constructFromObject({signers: [signer]});
  // Set the Envelope status. For drafts, use 'created' To send the envelope right away, use 'sent'
  envDef.status = 'sent';
  // Send the envelope
  let envelopesApi = new docusign.EnvelopesApi()
      // createEnvelopePromise returns a promise with the results:
    , createEnvelopePromise = promisify(envelopesApi.createEnvelope).bind(envelopesApi)
    , results


  try {
    
    results = await createEnvelopePromise(accountId, {'envelopeDefinition': envDef})
    //at here we can get envelope id 
  } catch(e) {
      
    let body = e.response && e.response.body;
    if (body) {
      // DocuSign API exception
      console.log(body)
      handleError(res,{},"Error Occured")
    } else {
      // Not a DocuSign exception
      throw e;
    }
  }
  // Envelope has been created:
  if (results) {
    console.log(results)
    res.status(200).json({
      type: "Success",
      message:"Document sent to  user account"
    })
  }
})

//Get status of Envelope by ID 
Router.get('/status/:id',async(req,res)=>{

    try{
        //getting the envelope id
        const envelopeId = req.params.id
        //token valid for 8 hours in development field 
        const accessToken = process.env.DocuSignAccessToken
        //account id 
        const accountId = process.env.DocuSignAccountId;
        //base path 
        const basePath  = process.env.BasePath

        let dsApiClient = new docusign.ApiClient();
        dsApiClient.setBasePath(basePath)
        dsApiClient.addDefaultHeader('Authorization', 'Bearer ' + accessToken)
          let envelopesApi = new docusign.EnvelopesApi(dsApiClient)
            , results = null;

        results = await envelopesApi.getEnvelope(accountId, envelopeId, null)
        if(results.status==='completed'){
          res.status(200).json({
            type: "Success",
            message:"Completed"
          })
        }
        else{
          res.status(400).json({
            type:"Failure",
            message:"First complete E-Signature"
          })
        }
    }
    catch(error){
      console.log(error)
      handleError(res,error,"There is an error")
    }
})


module.exports = Router