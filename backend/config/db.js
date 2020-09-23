const mongoose = require('mongoose');
const { connection } = require('./connection');

//exporting the datbase conncetivity
exports.connectionDB = async () => {
  try {
    mongoose.connect(connection,
    { useUnifiedTopology: true ,useNewUrlParser: true,useCreateIndex: true },(err, data)=>{
      
        if(err){ 
          console.log("Unable to connect with DB");
        }
        else{
          console.log("DB Connected")
        }
    })
   
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
