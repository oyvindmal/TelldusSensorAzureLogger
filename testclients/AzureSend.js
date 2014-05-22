var azure = require("../lib/AzureMobileServicesClient");
var obj = { "Location" : "This is a message", "From" : "System" };

azure.SendData(obj, "test");