const { handleError } = require("../helpers/errorHandler");
const sequelize = require("../config/connectionDB");
const { DataTypes } = require("sequelize");

// Infrastrcutre as a Service
var iass_basic = require("../models/iass_basic")(sequelize, DataTypes);
var iass_advance = require("../models/iass_advance")(sequelize, DataTypes);
var iass_custom = require("../models/iaas_custom")(sequelize, DataTypes);
const successMessage = {
    success: "success"
  }
const errorMessage = {
    somethingWentWorng: "Something went wrong"
  }
//checking request
exports.iaasCostLicense = async (req, res) =>{
    
    //destructuring of body
    const {name,plan, license,DailyBackup,extraCPU,extraRAM,extraHD,DCLAN,VLAN} = req.body

    try{
        //get details for plan
        const details =await iass_basic.findOne({ where: { name: name, plan : plan ,license : license} })
        
        //assignning the base service price
        var  price = details.price

        if(DCLAN){
            price = price +  (await iass_advance.findOne({where :{name:"DCLANPerVRF"}})).price 
            //adding additional costs
            if(VLAN){
                price = price + (VLAN*((await iass_advance.findOne({where :{name:"VLAN"}})).price)) 
                
            }
        }
        
        if(DailyBackup){
            price = price + (await iass_advance.findOne({where:{name:"DailyBackup"}})).price
        }

        //aadding the extra RAM , CPU and HD
        if(extraRAM){
            price = price +(extraRAM *((await iass_advance.findOne({where:{name:"OneGbRAM"}})).price))
        }
        if(extraHD){
            price = price +(extraHD *((await iass_advance.findOne({where:{name:"ExtraHD"}})).price))
        }

        // //adding CPU
        if(extraCPU){
            price = price +(extraCPU *((await iass_custom.findOne({where:{name:"CPU", license :license}})).price))
        }

        //setting the precision
        price =price.toFixed(2)

        res.status(200).json({
            type:successMessage.success,
            price: price
        })
   }
   catch(err){
       handleError(res,err, errorMessage.somethingWentWorng)
   }
} 


//for custom iaas service
exports.iaasCostCustom = async  (req, res)=>{

    //destructuring the req
    const {license, RAM, extraHD, CPU, DCLAN, VLAN, DailyBackup } = req.body
    
    //intial price
    var price = 0;

    try{
        //aadding the extra RAM , CPU and HD
        if(RAM){
            price = price +(RAM *((await iass_advance.findOne({where:{name:"OneGbRAM"}})).price))
        }
        if(extraHD){
            price = price +(extraHD *((await iass_advance.findOne({where:{name:"ExtraHD"}})).price))
        }

        // //adding CPU
        if(CPU){
            price = price +(CPU *((await iass_custom.findOne({where:{name:"CPU", license :license}})).price))
        }

        //adding daily backup
        if(DailyBackup){
            price = price + (await iass_advance.findOne({where:{name:"DailyBackup"}})).price
        }

        //adding DCLAN and extra VLAN
        if(DCLAN){
            price = price +  (await iass_advance.findOne({where :{name:"DCLANPerVRF"}})).price 
            //adding additional costs
            if(VLAN){
                price = price + (VLAN*((await iass_advance.findOne({where :{name:"VLAN"}})).price)) 
                
            }
        } 
        //setting the precision
        price =price.toFixed(2)

        //sending the response
        res.status(200).json({
            type:successMessage.success,
            price: price
        })      

    }
    catch(err){
        handleError(res,err, errorMessage.somethingWentWorng)
    }
}