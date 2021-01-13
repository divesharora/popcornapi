require('dotenv/config')

async function getKeyFunction(req,res,next) {
    try{
   
          
          res.status(200).json({
            key: process.env.API_KEY         })
        
          } catch(error){
      res.status(500).send({
        message: "Error"
      })
    }
  }

  module.exports={
    getKeyFunction

  }