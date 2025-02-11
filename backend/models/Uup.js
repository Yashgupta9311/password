const mongoose=require('mongoose')

const Uupschema=new mongoose.Schema({


    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    url: {
        type:String,
        required:true
    },
    
    username: {
        type:String,
        required:true
    },
    
    passwordmaneged :{
        type:String,
        required:true
    },
    
})
module.exports=mongoose.model("Uup",Uupschema)