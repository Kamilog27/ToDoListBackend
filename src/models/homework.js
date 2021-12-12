const { Schema, model } = require("mongoose")

const homeworkSchema=new Schema({
    name: {
        type: String,
        required: true
    }
},
    {
        timestamps: true,
        versionKey: false
    })

module.exports=model("Homework",homeworkSchema)