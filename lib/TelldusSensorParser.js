/*
 var dataObj;
    var firstSplit = data.split(":")
    var typeSplit = firstSplit[4].split(";")[0];
    console.log("TYPE: " + typeSplit);
    firstSplit.forEach(function (outdata) {
        //console.log(outdata);
    })
    console.log(dataObj);
*/

module.exports.SendData = function (data) {
  var dataObj = {};
  

   var firstSplit = data.split(":")
    var type = firstSplit[4].split(";")[0];
    dataObj.type = type;
    dataObj.id = firstSplit[5].split(";")[0];
    if(type == "fineoffset"){
       dataObj.temperature = firstSplit[7].split(";")[0];  
    }
    
    else if (type == "mandolyn") 
    {
        dataObj.temperature = firstSplit[7].split(";")[0];
        dataObj.humidity = firstSplit[8].split(";")[0];
    }
    
    
      
   
  console.log(dataObj);
};