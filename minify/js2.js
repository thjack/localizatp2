/**************************************
 * Copyright (c) 2016 Jose Venegas
 * Soporte contacte a:
 * jvenegasperu@gmail.com Facebook & Skype: jvenegasperu
 **************************************/
function checkConnection(){try{var nS1=navigator.connection.type;nS1=navigator.connection.type;var states={};states[Connection.UNKNOWN]='Estado de conex desconocido';states[Connection.ETHERNET]='Ethernet';states[Connection.WIFI]='WiFi';states[Connection.CELL_2G]='Cel 2G';states[Connection.CELL_3G]='Cel 3G';states[Connection.CELL_4G]='Cel 4G';states[Connection.CELL]='Cel generica';states[Connection.NONE]='No hay conex a la red';return states[nS1];}catch(e){alert(e);$.each(navigator,function(key,value){alert(key+'=>'+value);});}}
function showConfirm(){navigator.notification.confirm('¿Seguro que quieres cerrar la aplicación?',exitFromApp,'Salir','Cancelar,Si');};function exitFromApp(buttonIndex){if(buttonIndex===2){navigator.app.exitApp();}};var map;var ancho=$(window).height();ancho=ancho-100;var hei1=String(ancho)+"px";var latitud;var longitud;var P1,P2,P3,P4,P5,P6,P7;function nap1(p1,p2,p3,p4,p5,p6,p7){document.getElementById("map").style.display="block";document.getElementById("map").style.height=hei1;map=new GMaps({div: '#map',lat: p3,lng: p4,zoom: 15,zoomControl: true,zoomControlOpt:{style: 'SMALL',position: 'TOP_RIGHT'},panControl: true,streetViewControl: true,mapTypeControl: false});map.addMarker({lat: p2,lng: p1,icon: "img/usuario.png",title: 'El usuario',infoWindow:{content: '<strong>'+p6+'</strong><br>'+p5+'-Dir: '+p7+''}});map.setCenter(p3,p4);map.addMarker({lat: p3,lng: p4,icon: "img/tu.png",title: 'Tu',infoWindow:{content: 'Tu ubicación Actualmente'}});map.drawRoute({origin: [p3,p4],destination: [p2,p1],travelMode: 'driving',strokeColor: '#296fb7',strokeOpacity: 0.6,strokeWeight: 6});};function funca(lat,long,lat2,long2,id,nomcli,vgral){nomcli=nomcli.replace(/%20/gi,' ');nomcli=nomcli.replace(/%27/gi,"'");nomcli=nomcli.replace(/%26/gi,"&");vgral=vgral.replace(/%20/gi,' ');vgral=vgral.replace(/%27/gi,"'");vgral=vgral.replace(/%3A/gi,":");P1=lat;P2=long;P3=lat2;P4=long2;P5=id;P6=nomcli;P7=vgral;$.mobile.changePage("#pag-mapa",{transition: "slide",reverse: false,changeHash: true});};function f3(lat2,long2,id,nomcli,vgral){nomcli=nomcli.replace(/%20/gi,' ');nomcli=nomcli.replace(/%27/gi,"'");nomcli=nomcli.replace(/%26/gi,"&");vgral=vgral.replace(/%20/gi,' ');vgral=vgral.replace(/%27/gi,"'");vgral=vgral.replace(/%3A/gi,":");P3=lat2;P4=long2;P5=id;P6=nomcli;P7=vgral;$.mobile.changePage("#pag-estru",{transition: "slide",reverse: false,changeHash: true});}$(document).on("pageshow","#pag-mapa",function(){nap1(P1,P2,P3,P4,P5,P6,P7);});$(document).on("pageshow","#pag-estru",function(){nap2(P3,P4,P5,P6,P7);});$(document).ready(function(){});if(localStorage.getItem('listView')==="undefined"){}else{}
