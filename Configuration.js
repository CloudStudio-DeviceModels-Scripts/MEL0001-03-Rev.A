function getConfiguration(config)
{
  // Esta función permite indicar valores de configuración generales para 
  // todos los dispositivos de este modelo.
  
  // Dependiendo del significado de la "dirección del dispositivo" en este 
  // dispositivo, es posible que desee cambiar la etiqueta que se utiliza 
  // para hacer referencia a la dirección en la interfaz de usuario.
  // Por ejemplo, si la dirección del dispositivo es en realidad una dirección 
  // MAC, es posible que desee utilizar el código siguiente.
  
  // config.addressLabel = {en: "MAC address", es: "Dirección MAC"};
}

function getEndpoints(deviceAddress, endpoints)
{
   var d1 = endpoints.addEndpoint("1", "Día 1", endpointType.genericSensor);
  d1.variableTypeId = 1396;
  var d2 = endpoints.addEndpoint("2", "Día 2", endpointType.genericSensor);
  d2.variableTypeId = 1396;
  var d3 = endpoints.addEndpoint("3", "Día 3", endpointType.genericSensor);
  d3.variableTypeId = 1396;
  var d4 = endpoints.addEndpoint("4", "Día 4", endpointType.genericSensor);
  d4.variableTypeId = 1396;
  var d5 = endpoints.addEndpoint("5", "Día 5", endpointType.genericSensor);
  d5.variableTypeId = 1396;
  var d6 = endpoints.addEndpoint("6", "Día 6", endpointType.genericSensor);
  d6.variableTypeId = 1396;
  var d7 = endpoints.addEndpoint("7", "Día 7", endpointType.genericSensor);
  d7.variableTypeId = 1396;
  var d8 = endpoints.addEndpoint("8", "Día 8", endpointType.genericSensor);
  d8.variableTypeId = 1396;
  var d9 = endpoints.addEndpoint("9", "Día 9", endpointType.genericSensor);
  d9.variableTypeId = 1396;
  var d10 = endpoints.addEndpoint("10", "Día 10", endpointType.genericSensor);
  d10.variableTypeId = 1396;
  var d11 = endpoints.addEndpoint("11", "Día 11", endpointType.genericSensor);
  d11.variableTypeId = 1396;
  var d12 = endpoints.addEndpoint("12", "Día 12", endpointType.genericSensor);
  d12.variableTypeId = 1396;
  var d13 = endpoints.addEndpoint("13", "Día 13", endpointType.genericSensor);
  d13.variableTypeId = 1396;
  var d14 = endpoints.addEndpoint("14", "Día 14", endpointType.genericSensor);
  d14.variableTypeId = 1396;
  var d15 = endpoints.addEndpoint("15", "Día 15", endpointType.genericSensor);
  d15.variableTypeId = 1396;
  var d16 = endpoints.addEndpoint("16", "Día 16", endpointType.genericSensor);
  d16.variableTypeId = 1396;
  var d17 = endpoints.addEndpoint("17", "Día 17", endpointType.genericSensor);
  d17.variableTypeId = 1396;
  var d18 = endpoints.addEndpoint("18", "Día 18", endpointType.genericSensor);
  d18.variableTypeId = 1396;
  var d19 = endpoints.addEndpoint("19", "Día 19", endpointType.genericSensor);
  d19.variableTypeId = 1396;
  var d20 = endpoints.addEndpoint("20", "Día 20", endpointType.genericSensor);
  d20.variableTypeId = 1396;
  var d21 = endpoints.addEndpoint("21", "Día 21", endpointType.genericSensor);
  d21.variableTypeId = 1396;
  var d22 = endpoints.addEndpoint("22", "Día 22", endpointType.genericSensor);
  d22.variableTypeId = 1396;
  var d23 = endpoints.addEndpoint("23", "Día 23", endpointType.genericSensor);
  d23.variableTypeId = 1396;
  var d24 = endpoints.addEndpoint("24", "Día 24", endpointType.genericSensor);
  d24.variableTypeId = 1396;
  var d25 = endpoints.addEndpoint("25", "Día 25", endpointType.genericSensor);
  d25.variableTypeId = 1396;
  var d26 = endpoints.addEndpoint("26", "Día 26", endpointType.genericSensor);
  d26.variableTypeId = 1396;
  var d27 = endpoints.addEndpoint("27", "Día 27", endpointType.genericSensor);
  d27.variableTypeId = 1396;
  var d28 = endpoints.addEndpoint("28", "Día 28", endpointType.genericSensor);
  d28.variableTypeId = 1396;
  var d29 = endpoints.addEndpoint("29", "Día 29", endpointType.genericSensor);
  d29.variableTypeId = 1396;
  var d30 = endpoints.addEndpoint("30", "Día 30", endpointType.genericSensor);
  d30.variableTypeId = 1396;
  var d31 = endpoints.addEndpoint("31", "Día 31", endpointType.genericSensor);
  d31.variableTypeId = 1396;

  //Caudal consumido
  var n1 = endpoints.addEndpoint("32", "Caudal consumido 1", endpointType.genericSensor);
  n1.variableTypeId = 1426;
  var n2 = endpoints.addEndpoint("33", "Caudal consumido 2", endpointType.genericSensor);
  n2.variableTypeId = 1426;
  var n3 = endpoints.addEndpoint("34", "Caudal consumido 3", endpointType.genericSensor);
  n3.variableTypeId = 1426;
  var n4 = endpoints.addEndpoint("35", "Caudal consumido 4", endpointType.genericSensor);
  n4.variableTypeId = 1426;
  var n5 = endpoints.addEndpoint("36", "Caudal consumido 5", endpointType.genericSensor);
  n5.variableTypeId = 1426;
  var n6 = endpoints.addEndpoint("37", "Caudal consumido 6", endpointType.genericSensor);
  n6.variableTypeId = 1426;
  var n7 = endpoints.addEndpoint("38", "Caudal consumido 7", endpointType.genericSensor);
  n7.variableTypeId = 1426;
  var n8 = endpoints.addEndpoint("39", "Caudal consumido 8", endpointType.genericSensor);
  n8.variableTypeId = 1426;
  var n9 = endpoints.addEndpoint("40", "Caudal consumido 9", endpointType.genericSensor);
  n9.variableTypeId = 1426;
  var n10 = endpoints.addEndpoint("41", "Caudal consumido 10", endpointType.genericSensor);
  n10.variableTypeId = 1426;
  var n11 = endpoints.addEndpoint("42", "Caudal consumido 11", endpointType.genericSensor);
  n11.variableTypeId = 1426;
  var n12 = endpoints.addEndpoint("43", "Caudal consumido 12", endpointType.genericSensor);
  n12.variableTypeId = 1426;
  var n13 = endpoints.addEndpoint("44", "Caudal consumido 13", endpointType.genericSensor);
  n13.variableTypeId = 1426;
  var n14 = endpoints.addEndpoint("45", "Caudal consumido 14", endpointType.genericSensor);
  n14.variableTypeId = 1426;
  var n15 = endpoints.addEndpoint("46", "Caudal consumido 15", endpointType.genericSensor);
  n15.variableTypeId = 1426;
  var n16 = endpoints.addEndpoint("47", "Caudal consumido 16", endpointType.genericSensor);
  n16.variableTypeId = 1426;
  var n17 = endpoints.addEndpoint("48", "Caudal consumido 17", endpointType.genericSensor);
  n17.variableTypeId = 1426;
  var n18 = endpoints.addEndpoint("49", "Caudal consumido 18", endpointType.genericSensor);
  n18.variableTypeId = 1426;
  var n19 = endpoints.addEndpoint("50", "Caudal consumido 19", endpointType.genericSensor);
  n19.variableTypeId = 1426;
  var n20 = endpoints.addEndpoint("51", "Caudal consumido 20", endpointType.genericSensor);
  n20.variableTypeId = 1426;
  var n21 = endpoints.addEndpoint("52", "Caudal consumido 21", endpointType.genericSensor);
  n21.variableTypeId = 1426;
  var n22 = endpoints.addEndpoint("53", "Caudal consumido 22", endpointType.genericSensor);
  n22.variableTypeId = 1426;
  var n23 = endpoints.addEndpoint("54", "Caudal consumido 23", endpointType.genericSensor);
  n23.variableTypeId = 1426;
  var n24 = endpoints.addEndpoint("55", "Caudal consumido 24", endpointType.genericSensor);
  n24.variableTypeId = 1426;
  var n25 = endpoints.addEndpoint("56", "Caudal consumido 25", endpointType.genericSensor);
  n25.variableTypeId = 1426;
  var n26 = endpoints.addEndpoint("57", "Caudal consumido 26", endpointType.genericSensor);
  n26.variableTypeId = 1426;
  var n27 = endpoints.addEndpoint("58", "Caudal consumido 27", endpointType.genericSensor);
  n27.variableTypeId = 1426;
  var n28 = endpoints.addEndpoint("59", "Caudal consumido 28", endpointType.genericSensor);
  n28.variableTypeId = 1426;
  var n29 = endpoints.addEndpoint("60", "Caudal consumido 29", endpointType.genericSensor);
  n29.variableTypeId = 1426;
  var n30 = endpoints.addEndpoint("61", "Caudal consumido 30", endpointType.genericSensor);
  n30.variableTypeId = 1426;
  var n31 = endpoints.addEndpoint("62", "Caudal consumido 31", endpointType.genericSensor);
  n31.variableTypeId = 1426;

  //Energía Eléctrica
  var np1 = endpoints.addEndpoint("63", "Energía Electrica 1", endpointType.genericSensor);
  np1.variableTypeId = 1425;
  var np2 = endpoints.addEndpoint("64", "Energía Electrica 2", endpointType.genericSensor);
  np2.variableTypeId = 1425;
  var np3 = endpoints.addEndpoint("65", "Energía Electrica 3", endpointType.genericSensor);
  np3.variableTypeId = 1425;
  var np4 = endpoints.addEndpoint("66", "Energía Electrica 4", endpointType.genericSensor);
  np4.variableTypeId = 1425;
  var np5 = endpoints.addEndpoint("67", "Energía Electrica 5", endpointType.genericSensor);
  np5.variableTypeId = 1425;
  var np6 = endpoints.addEndpoint("68", "Energía Electrica 6", endpointType.genericSensor);
  np6.variableTypeId = 1425;
  var np7 = endpoints.addEndpoint("69", "Energía Electrica 7", endpointType.genericSensor);
  np7.variableTypeId = 1425;
  var np8 = endpoints.addEndpoint("70", "Energía Electrica 8", endpointType.genericSensor);
  np8.variableTypeId = 1425;
  var np9 = endpoints.addEndpoint("71", "Energía Electrica 9", endpointType.genericSensor);
  np9.variableTypeId = 1425;
  var np10 = endpoints.addEndpoint("72", "Energía Electrica 10", endpointType.genericSensor);
  np10.variableTypeId = 1425;
  var np11 = endpoints.addEndpoint("73", "Energía Electrica 11", endpointType.genericSensor);
  np11.variableTypeId = 1425;
  var np12 = endpoints.addEndpoint("74", "Energía Electrica 12", endpointType.genericSensor);
  np12.variableTypeId = 1425;
  var np13 = endpoints.addEndpoint("75", "Energía Electrica 13", endpointType.genericSensor);
  np13.variableTypeId = 1425;
  var np14 = endpoints.addEndpoint("76", "Energía Electrica 14", endpointType.genericSensor);
  np14.variableTypeId = 1425;
  var np15 = endpoints.addEndpoint("77", "Energía Electrica 15", endpointType.genericSensor);
  np15.variableTypeId = 1425;
  var np16 = endpoints.addEndpoint("78", "Energía Electrica 16", endpointType.genericSensor);
  np16.variableTypeId = 1425;
  var np17 = endpoints.addEndpoint("79", "Energía Electrica 17", endpointType.genericSensor);
  np17.variableTypeId = 1425;
  var np18 = endpoints.addEndpoint("80", "Energía Electrica 18", endpointType.genericSensor);
  np18.variableTypeId = 1425;
  var np19 = endpoints.addEndpoint("81", "Energía Electrica 19", endpointType.genericSensor);
  np19.variableTypeId = 1425;
  var np20 = endpoints.addEndpoint("82", "Energía Electrica 20", endpointType.genericSensor);
  np20.variableTypeId = 1425;
  var np21 = endpoints.addEndpoint("83", "Energía Electrica 21", endpointType.genericSensor);
  np21.variableTypeId = 1425;
  var np22 = endpoints.addEndpoint("84", "Energía Electrica 22", endpointType.genericSensor);
  np22.variableTypeId = 1425;
  var np23 = endpoints.addEndpoint("85", "Energía Electrica 23", endpointType.genericSensor);
  np23.variableTypeId = 1425;
  var np24 = endpoints.addEndpoint("86", "Energía Electrica 24", endpointType.genericSensor);
  np24.variableTypeId = 1425;
  var np25 = endpoints.addEndpoint("87", "Energía Electrica 25", endpointType.genericSensor);
  np25.variableTypeId = 1425;
  var np26 = endpoints.addEndpoint("88", "Energía Electrica 26", endpointType.genericSensor);
  np26.variableTypeId = 1425;
  var np27 = endpoints.addEndpoint("89", "Energía Electrica 27", endpointType.genericSensor);
  np27.variableTypeId = 1425;
  var np28 = endpoints.addEndpoint("90", "Energía Electrica 28", endpointType.genericSensor);
  np28.variableTypeId = 1425;
  var np29 = endpoints.addEndpoint("91", "Energía Electrica 29", endpointType.genericSensor);
  np29.variableTypeId = 1425;
  var np30 = endpoints.addEndpoint("92", "Energía Electrica 30", endpointType.genericSensor);
  np30.variableTypeId = 1425;
  var np31 = endpoints.addEndpoint("93", "Energía Electrica 31", endpointType.genericSensor);
  np31.variableTypeId = 1425;

  //Energía Necesaria
  var npo1 = endpoints.addEndpoint("94", "Energía Necesaria 1", endpointType.genericSensor);
  npo1.variableTypeId = 1425;
  var npo2 = endpoints.addEndpoint("95", "Energía Necesaria 2", endpointType.genericSensor);
  npo2.variableTypeId = 1425;
  var npo3 = endpoints.addEndpoint("96", "Energía Necesaria 3", endpointType.genericSensor);
  npo3.variableTypeId = 1425;
  var npo4 = endpoints.addEndpoint("97", "Energía Necesaria 4", endpointType.genericSensor);
  npo4.variableTypeId = 1425;
  var npo5 = endpoints.addEndpoint("98", "Energía Necesaria 5", endpointType.genericSensor);
  npo5.variableTypeId = 1425;
  var npo6 = endpoints.addEndpoint("99", "Energía Necesaria 6", endpointType.genericSensor);
  npo6.variableTypeId = 1425;
  var npo7 = endpoints.addEndpoint("100", "Energía Necesaria 7", endpointType.genericSensor);
  npo7.variableTypeId = 1425;
  var npo8 = endpoints.addEndpoint("101", "Energía Necesaria 8", endpointType.genericSensor);
  npo8.variableTypeId = 1425;
  var npo9 = endpoints.addEndpoint("102", "Energía Necesaria 9", endpointType.genericSensor);
  npo9.variableTypeId = 1425;
  var npo10 = endpoints.addEndpoint("103", "Energía Necesaria 10", endpointType.genericSensor);
  npo10.variableTypeId = 1425;
  var npo11 = endpoints.addEndpoint("104", "Energía Necesaria 11", endpointType.genericSensor);
  npo11.variableTypeId = 1425;
  var npo12 = endpoints.addEndpoint("105", "Energía Necesaria 12", endpointType.genericSensor);
  npo12.variableTypeId = 1425;
  var npo13 = endpoints.addEndpoint("106", "Energía Necesaria 13", endpointType.genericSensor);
  npo13.variableTypeId = 1425;
  var npo14 = endpoints.addEndpoint("107", "Energía Necesaria 14", endpointType.genericSensor);
  npo14.variableTypeId = 1425;
  var npo15 = endpoints.addEndpoint("108", "Energía Necesaria 15", endpointType.genericSensor);
  npo15.variableTypeId = 1425;
  var npo16 = endpoints.addEndpoint("109", "Energía Necesaria 16", endpointType.genericSensor);
  npo16.variableTypeId = 1425;
  var npo17 = endpoints.addEndpoint("110", "Energía Necesaria 17", endpointType.genericSensor);
  npo17.variableTypeId = 1425;
  var npo18 = endpoints.addEndpoint("111", "Energía Necesaria 18", endpointType.genericSensor);
  npo18.variableTypeId = 1425;
  var npo19 = endpoints.addEndpoint("112", "Energía Necesaria 19", endpointType.genericSensor);
  npo19.variableTypeId = 1425;
  var npo20 = endpoints.addEndpoint("113", "Energía Necesaria 20", endpointType.genericSensor);
  npo20.variableTypeId = 1425;
  var npo21 = endpoints.addEndpoint("114", "Energía Necesaria 21", endpointType.genericSensor);
  npo21.variableTypeId = 1425;
  var npo22 = endpoints.addEndpoint("115", "Energía Necesaria 22", endpointType.genericSensor);
  npo22.variableTypeId = 1425;
  var npo23 = endpoints.addEndpoint("116", "Energía Necesaria 23", endpointType.genericSensor);
  npo23.variableTypeId = 1425;
  var npo24 = endpoints.addEndpoint("117", "Energía Necesaria 24", endpointType.genericSensor);
  npo24.variableTypeId = 1425;
  var npo25 = endpoints.addEndpoint("118", "Energía Necesaria 25", endpointType.genericSensor);
  npo25.variableTypeId = 1425;
  var npo26 = endpoints.addEndpoint("119", "Energía Necesaria 26", endpointType.genericSensor);
  npo26.variableTypeId = 1425;
  var npo27 = endpoints.addEndpoint("120", "Energía Necesaria 27", endpointType.genericSensor);
  npo27.variableTypeId = 1425;
  var npo28 = endpoints.addEndpoint("121", "Energía Necesaria 28", endpointType.genericSensor);
  npo28.variableTypeId = 1425;
  var npo29 = endpoints.addEndpoint("122", "Energía Necesaria 29", endpointType.genericSensor);
  npo29.variableTypeId = 1425;
  var npo30 = endpoints.addEndpoint("123", "Energía Necesaria 30", endpointType.genericSensor);
  npo30.variableTypeId = 1425;
  var npo31 = endpoints.addEndpoint("124", "Energía Necesaria 31", endpointType.genericSensor);
  npo31.variableTypeId = 1425;

  //Pueblo
  var nu1 = endpoints.addEndpoint("125", "Energía Caldera 1", endpointType.genericSensor);
  nu1.variableTypeId = 1425;
  var nu2 = endpoints.addEndpoint("126", "Energía Caldera 2", endpointType.genericSensor);
  nu2.variableTypeId = 1425;
  var nu3 = endpoints.addEndpoint("127", "Energía Caldera 3", endpointType.genericSensor);
  nu3.variableTypeId = 1425;
  var nu4 = endpoints.addEndpoint("128", "Energía Caldera 4", endpointType.genericSensor);
  nu4.variableTypeId = 1425;
  var nu5 = endpoints.addEndpoint("129", "Energía Caldera 5", endpointType.genericSensor);
  nu5.variableTypeId = 1425;
  var nu6 = endpoints.addEndpoint("130", "Energía Caldera 6", endpointType.genericSensor);
  nu6.variableTypeId = 1425;
  var nu7 = endpoints.addEndpoint("131", "Energía Caldera 7", endpointType.genericSensor);
  nu7.variableTypeId = 1425;
  var nu8 = endpoints.addEndpoint("132", "Energía Caldera 8", endpointType.genericSensor);
  nu8.variableTypeId = 1425;
  var nu9 = endpoints.addEndpoint("133", "Energía Caldera 9", endpointType.genericSensor);
  nu9.variableTypeId = 1425;
  var nu10 = endpoints.addEndpoint("134", "Energía Caldera 10", endpointType.genericSensor);
  nu10.variableTypeId = 1425;
  var nu11 = endpoints.addEndpoint("135", "Energía Caldera 11", endpointType.genericSensor);
  nu11.variableTypeId = 1425;
  var nu12 = endpoints.addEndpoint("136", "Energía Caldera 12", endpointType.genericSensor);
  nu12.variableTypeId = 1425;
  var nu13 = endpoints.addEndpoint("137", "Energía Caldera 13", endpointType.genericSensor);
  nu13.variableTypeId = 1425;
  var nu14 = endpoints.addEndpoint("138", "Energía Caldera 14", endpointType.genericSensor);
  nu14.variableTypeId = 1425;
  var nu15 = endpoints.addEndpoint("139", "Energía Caldera 15", endpointType.genericSensor);
  nu15.variableTypeId = 1425;
  var nu16 = endpoints.addEndpoint("140", "Energía Caldera 16", endpointType.genericSensor);
  nu16.variableTypeId = 1425;
  var nu17 = endpoints.addEndpoint("141", "Energía Caldera 17", endpointType.genericSensor);
  nu17.variableTypeId = 1425;
  var nu18 = endpoints.addEndpoint("142", "Energía Caldera 18", endpointType.genericSensor);
  nu18.variableTypeId = 1425;
  var nu19 = endpoints.addEndpoint("143", "Energía Caldera 19", endpointType.genericSensor);
  nu19.variableTypeId = 1425;
  var nu20 = endpoints.addEndpoint("144", "Energía Caldera 20", endpointType.genericSensor);
  nu20.variableTypeId = 1425;
  var nu21 = endpoints.addEndpoint("145", "Energía Caldera 21", endpointType.genericSensor);
  nu21.variableTypeId = 1425;
  var nu22 = endpoints.addEndpoint("146", "Energía Caldera 22", endpointType.genericSensor);
  nu22.variableTypeId = 1425;
  var nu23 = endpoints.addEndpoint("147", "Energía Caldera 23", endpointType.genericSensor);
  nu23.variableTypeId = 1425;
  var nu24 = endpoints.addEndpoint("148", "Energía Caldera 24", endpointType.genericSensor);
  nu24.variableTypeId = 1425;
  var nu25 = endpoints.addEndpoint("149", "Energía Caldera 25", endpointType.genericSensor);
  nu25.variableTypeId = 1425;
  var nu26 = endpoints.addEndpoint("150", "Energía Caldera 26", endpointType.genericSensor);
  nu26.variableTypeId = 1425;
  var nu27 = endpoints.addEndpoint("151", "Energía Caldera 27", endpointType.genericSensor);
  nu27.variableTypeId = 1425;
  var nu28 = endpoints.addEndpoint("152", "Energía Caldera 28", endpointType.genericSensor);
  nu28.variableTypeId = 1425;
  var nu29 = endpoints.addEndpoint("153", "Energía Caldera 29", endpointType.genericSensor);
  nu29.variableTypeId = 1425;
  var nu30 = endpoints.addEndpoint("154", "Energía Caldera 30", endpointType.genericSensor);
  nu30.variableTypeId = 1425;
  var nu31 = endpoints.addEndpoint("155", "Energía Caldera 31", endpointType.genericSensor);
  nu31.variableTypeId = 1425;

  //Energía BCA
  var nut1 = endpoints.addEndpoint("156", "Energía BCA 1", endpointType.genericSensor);
  nut1.variableTypeId = 1425;
  var nut2 = endpoints.addEndpoint("157", "Energía BCA 2", endpointType.genericSensor);
  nut2.variableTypeId = 1425;
  var nut3 = endpoints.addEndpoint("158", "Energía BCA 3", endpointType.genericSensor);
  nut3.variableTypeId = 1425;
  var nut4 = endpoints.addEndpoint("159", "Energía BCA 4", endpointType.genericSensor);
  nut4.variableTypeId = 1425;
  var nut5 = endpoints.addEndpoint("160", "Energía BCA 5", endpointType.genericSensor);
  nut5.variableTypeId = 1425;
  var nut6 = endpoints.addEndpoint("161", "Energía BCA 6", endpointType.genericSensor);
  nut6.variableTypeId = 1425;
  var nut7 = endpoints.addEndpoint("162", "Energía BCA 7", endpointType.genericSensor);
  nut7.variableTypeId = 1425;
  var nut8 = endpoints.addEndpoint("163", "Energía BCA 8", endpointType.genericSensor);
  nut8.variableTypeId = 1425;
  var nut9 = endpoints.addEndpoint("164", "Energía BCA 9", endpointType.genericSensor);
  nut9.variableTypeId = 1425;
  var nut10 = endpoints.addEndpoint("165", "Energía BCA 10", endpointType.genericSensor);
  nut10.variableTypeId = 1425;
  var nut11 = endpoints.addEndpoint("166", "Energía BCA 11", endpointType.genericSensor);
  nut11.variableTypeId = 1425;
  var nut12 = endpoints.addEndpoint("167", "Energía BCA 12", endpointType.genericSensor);
  nut12.variableTypeId = 1425;
  var nut13 = endpoints.addEndpoint("168", "Energía BCA 13", endpointType.genericSensor);
  nut13.variableTypeId = 1425;
  var nut14 = endpoints.addEndpoint("169", "Energía BCA 14", endpointType.genericSensor);
  nut14.variableTypeId = 1425;
  var nut15 = endpoints.addEndpoint("170", "Energía BCA 15", endpointType.genericSensor);
  nut15.variableTypeId = 1425;
  var nut16 = endpoints.addEndpoint("171", "Energía BCA 16", endpointType.genericSensor);
  nut16.variableTypeId = 1425;
  var nut17 = endpoints.addEndpoint("172", "Energía BCA 17", endpointType.genericSensor);
  nut17.variableTypeId = 1425;
  var nut18 = endpoints.addEndpoint("173", "Energía BCA 18", endpointType.genericSensor);
  nut18.variableTypeId = 1425;
  var nut19 = endpoints.addEndpoint("174", "Energía BCA 19", endpointType.genericSensor);
  nut19.variableTypeId = 1425;
  var nut20 = endpoints.addEndpoint("175", "Energía BCA 20", endpointType.genericSensor);
  nut20.variableTypeId = 1425;
  var nut21 = endpoints.addEndpoint("176", "Energía BCA 21", endpointType.genericSensor);
  nut21.variableTypeId = 1425;
  var nut22 = endpoints.addEndpoint("177", "Energía BCA 22", endpointType.genericSensor);
  nut22.variableTypeId = 1425;
  var nut23 = endpoints.addEndpoint("178", "Energía BCA 23", endpointType.genericSensor);
  nut23.variableTypeId = 1425;
  var nut24 = endpoints.addEndpoint("179", "Energía BCA 24", endpointType.genericSensor);
  nut24.variableTypeId = 1425;
  var nut25 = endpoints.addEndpoint("180", "Energía BCA 25", endpointType.genericSensor);
  nut25.variableTypeId = 1425;
  var nut26 = endpoints.addEndpoint("181", "Energía BCA 26", endpointType.genericSensor);
  nut26.variableTypeId = 1425;
  var nut27 = endpoints.addEndpoint("182", "Energía BCA 27", endpointType.genericSensor);
  nut27.variableTypeId = 1425;
  var nut28 = endpoints.addEndpoint("183", "Energía BCA 28", endpointType.genericSensor);
  nut28.variableTypeId = 1425;
  var nut29 = endpoints.addEndpoint("184", "Energía BCA 29", endpointType.genericSensor);
  nut29.variableTypeId = 1425;
  var nut30 = endpoints.addEndpoint("185", "Energía BCA 30", endpointType.genericSensor);
  nut30.variableTypeId = 1425;
  var nut31 = endpoints.addEndpoint("186", "Energía BCA 31", endpointType.genericSensor);
  nut31.variableTypeId = 1425;







}

function validateDeviceAddress(address, result)
{
  // Esta función permite validar la dirección de un dispositivo, cuando el usuario 
  // lo está creando. Si el dispositivo tiene reglas de validación especiales para 
  // la dirección, pueden verificarse aquí y devolver un mensaje de error en 
  // caso de que el formato de la dirección sea incorrecto.
  
  // En el código siguiente, se realiza una validación para asegurarse de que la 
  // dirección tiene exactamente 10 caracteres.
  
  // if (address.length != 10) {
  //   result.ok = false;
  //   result.errorMessage = {
  //     en: "The address must be 10 characters long", 
  //     es: "La dirección debe tener exactamente 10 caracteres"
  //   };
  // }
}

function updateDeviceUIRules(device, rules)
{
  // Esta función permite especificar reglas de interfaz de usuario en el nivel de 
  // dispositivo. Por ejemplo, es posible habilitar o deshabilitar la creación 
  // de endpoints manualmente al dispositivo después de que se creó.

  // En el código siguiente, el agregado manual de endpoints está deshabilitada 
  // en la interfaz de usuario. Esto significa que el dispositivo se limitará a los 
  // endpoints definidos por la función getEndpoints() anterior.
  
  // rules.canCreateEndpoints = false;
}

function updateEndpointUIRules(endpoint, rules)
{
  // Esta función permite especificar reglas de interfaz de usuario para cada
  // endpoint del dispositivo. Por ejemplo, es posible habilitar o inhabilitar la
  // eliminación de endpoints, o la edición de subtipo de endpoint.

  // En el código siguiente, se definen las siguientes reglas:
  // - Los endpoints no se pueden eliminar.
  // - El subtipo de endpoint se puede cambiar, pero solo para el segundo endpoint.
  
  // rules.canDelete = false;
  // rules.canEditSubType = (endpoint.address == "2");
}
