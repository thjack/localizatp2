/***************************************
 * Copyright (c) 2015-2016 Jose Venegas
 * 
 * Para soporte contacte a:
 * jvenegasperu@gmail.com Facebook & Skype: jvenegasperu
 ***************************************/
function checkConnection(){var networkState=navigator.connection.type;var states={};states[Connection.UNKNOWN]='Estado de conex desconocido';states[Connection.ETHERNET]='Ethernet';states[Connection.WIFI]='WiFi';states[Connection.CELL_2G]='Cel 2G';states[Connection.CELL_3G]='Cel 3G';states[Connection.CELL_4G]='Cel 4G';states[Connection.CELL]='Cel generica';states[Connection.NONE]='No hay conex a la red';return states[networkState];}
function l1(){var conex=checkConnection();if((conex==='Estado de conex desconocido')||(conex==='No hay conex a la red')){var mesge2=conex+',la aplicación requiere conexion a red';showAlert(mesge2,alertDismissed,'Aviso','Aceptar');}else{var usuario=$("#txt-user").val();localStorage.setItem('usuario',usuario);var contrasenia=$("#txt-pass").val();localStorage.setItem('password',contrasenia);$.ajax({type: "POST",url: "http://200.60.11.227:81/moviles3/login_1.php",data:({usuario: usuario,contrasenia: contrasenia}),cache: false,dataType: "text",success: onSuccessLogin});}};function onSuccessLogin(data){var datason=JSON.parse(data);if(datason.oki==='2'){showAlert('Usuario o contraseña no valido',alertDismissed,'Aviso','Aceptar');$.mobile.changePage("index.html",{transition: "slide",reverse: false,changeHash: false});}else if(datason.oki==='1'){var mesge3='Bienvenido '+localStorage.getItem('usuario');showAlert(mesge3,alertDismissed,'Aviso','Aceptar');$.mobile.changePage("#pag-usuarios-registrados",{transition: "slide",reverse: false,changeHash: true});document.getElementById("usua").innerHTML=localStorage.getItem('usuario');}}
function showConfirm(){navigator.notification.confirm('¿Seguro que quieres cerrar la aplicación?',exitFromApp,'Salir','Cancelar,Si');};function exitFromApp(buttonIndex){if(buttonIndex===2){navigator.app.exitApp();}};var map;var ancho=$(window).height();ancho=ancho-100;var ayuda=String(ancho)+"px";var latitud;var longitud;var P1,P2,P3,P4,P5,P6,P7;function mapita(p1,p2,p3,p4,p5,p6,p7){document.getElementById("map").style.display="block";document.getElementById("map").style.height=ayuda;map=new GMaps({div: '#map',lat: p3,lng: p4,zoom: 15,zoomControl: true,zoomControlOpt:{style: 'SMALL',position: 'TOP_RIGHT'},panControl: true,streetViewControl: true,mapTypeControl: false});map.addMarker({lat: p2,lng: p1,icon: "img/usuario.png",title: 'El usuario',infoWindow:{content: '<strong>'+p6+'</strong><br>'+p5+'-Dir: '+p7+''}});map.setCenter(p3,p4);map.addMarker({lat: p3,lng: p4,icon: "img/tu.png",title: 'Tu',infoWindow:{content: 'Tu ubicación Actualmente'}});map.drawRoute({origin: [p3,p4],destination: [p2,p1],travelMode: 'driving',strokeColor: '#296fb7',strokeOpacity: 0.6,strokeWeight: 6});};function funca(lat,long,lat2,long2,id,nomcli,vgral){nomcli=nomcli.replace(/%20/gi,' ');nomcli=nomcli.replace(/%27/gi,"'");nomcli=nomcli.replace(/%26/gi,"&");vgral=vgral.replace(/%20/gi,' ');vgral=vgral.replace(/%27/gi,"'");vgral=vgral.replace(/%3A/gi,":");P1=lat;P2=long;P3=lat2;P4=long2;P5=id;P6=nomcli;P7=vgral;$.mobile.changePage("#pag-mapa",{transition: "slide",reverse: false,changeHash: true});}$(document).on("pageshow","#pag-mapa",function(){mapita(P1,P2,P3,P4,P5,P6,P7);});$(document).ready(function(){});if(localStorage.getItem('listView')==="undefined"){}else{}
