/*********************************************
 * Copyright (c) 2015-2016 Jose Venegas
 * 
 * Si desea soporte contacte a:
 * jvenegasperu@gmail.com Facebook & Skype: jvenegasperu
 *********************************************/
function checkConnection(){var networkState=navigator.connection.type;var states={};states[Connection.UNKNOWN]='Estado de conex desconocido';states[Connection.ETHERNET]='Ethernet';states[Connection.WIFI]='WiFi';states[Connection.CELL_2G]='Cel 2G';states[Connection.CELL_3G]='Cel 3G';states[Connection.CELL_4G]='Cel 4G';states[Connection.CELL]='Cel generica';states[Connection.NONE]='No hay conex a la red';return states[networkState];}
function l1(){var conex=checkConnection();if((conex==='Estado de conex desconocido')||(conex==='No hay conex a la red')){var mesge2=conex+',la aplicación requiere conexion a red';showAlert(mesge2,alertDismissed,'Aviso','Aceptar');}else{var usuario=$("#txt-user").val();localStorage.setItem('usuario',usuario);var contrasenia=$("#txt-pass").val();localStorage.setItem('password',contrasenia);$.ajax({type: "POST",url: "http://200.60.11.227:81/moviles3/login_1.php",data:({usuario: usuario,contrasenia: contrasenia}),cache: false,dataType: "text",success: onSuccessLogin});}};function onSuccessLogin(data){var datason=JSON.parse(data);if(datason.oki==='2'){showAlert('Usuario o contraseña no valido',alertDismissed,'Aviso','Aceptar');$.mobile.changePage("index.html",{transition: "slide",reverse: false,changeHash: false});}else if(datason.oki==='1'){var mesge3='Bienvenido '+localStorage.getItem('usuario');showAlert(mesge3,alertDismissed,'Aviso','Aceptar');$.mobile.changePage("#pag-usuarios-registrados",{transition: "slide",reverse: false,changeHash: true});document.getElementById("usua").innerHTML=localStorage.getItem('usuario');}}
