var mongoose=require('mongoose');
var Schema=mongoose.Schema;
 
var newSchema=new Schema({
Pname:String,
Department:String,
Technology:String,
Image:String
});
 
module.exports = mongoose.model('ProjTable1', newSchema);