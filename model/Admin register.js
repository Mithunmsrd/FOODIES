const { Schema} =require('mongoose');
const { model} =require('mongoose');
const demo = new Schema({
   Name: { type: String, required: true },
   Email: { type: String, required: true },
   Password: { type: String, required: true },
   Password_confirmation: {type: String, required: true },
 
   // Add other fields as needed
});


const sample = model('sample1', demo);
module.exports= sample;