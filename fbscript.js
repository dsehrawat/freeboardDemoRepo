var window.respimatic_uid = "";
$.support.cors = true;

while (1) {
  respimatic_uid = 
    window.prompt("Please enter RESPIMATIC 100 SysUID to connect to", "");

  if (respimatic_uid == null || respimatic_uid == "") {
    window.alert("Invalid SysUID - Please try again!");
  } else {
    freeboard.setDatasourceSettings("RESPIMATIC100", 
      {"thing_id":window.respimatic_uid});
    break;
  }
}
