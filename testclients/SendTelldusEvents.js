var eventParser = require("../lib/TelldusEventParser.js");
console.log("FineOffset")
eventParser.SendData("16:TDRawDeviceEvent68:class:sensor;protocol:fineoffset;id:181;model:temperature;temp:28.4;i1s");
console.log("Mandolyn")
eventParser.SendData("16:TDRawDeviceEvent85:class:sensor;protocol:mandolyn;id:12;model:temperaturehumidity;temp:28.4;humidity:48;i1s");
console.log("Random garbage");
eventParser.SendData("This is not a sensor");
console.log("Not a sensor but looks accurate")
eventParser.SendData("16:TDRawDeviceEvent85:class:sensffor;protocol:mandolyn;id:12;model:temperaturehumidity;temp:28.4;humidity:48;i1s");