/**************************************
 * Copyright (c) 2016 Jose Venegas
 * Soporte contacte a:
 * jvenegasperu@gmail.com Facebook & Skype: jvenegasperu
 **************************************/
function onBodyLoad(){document.addEventListener("deviceready",onDeviceReady,false);};function onDeviceReady(){alert('Phonegapi esta en marcha');u1();}
function u1(){navigator.geolocation.getCurrentPosition(onSuccess,onError,{enableHighAccuracy: true,maximumAge: 60000});};var watchID=null;var Lat1;var Long2;var Precision;var Lat3;var Long4;var P1;var ListView;function actualizarmiubicacion(){watchID=navigator.geolocation.watchPosition(coordenadasbien,coordenadasmal,{maximumAge: 60000,timeout: 5000,enableHighAccuracy: true});};var conta=0;function coordenadasbien(position){precision=position.coords.accuracy;if(conta===0){precisionbuena=precision;conta=1;};if(precision<precisionbuena){precisionbuena=precision;Lat1=position.coords.latitude;Long2=position.coords.longitude;}};function coordenadasmal(position){};function onSuccess(position){Lat1=position.coords.latitude;Long2=position.coords.longitude;Precision=position.coords.accuracy;};function onError(){};function alertDismissed(){};function showAlert(mesage,funcion,title,boton){navigator.notification.alert(mesage,funcion,title,boton);};function bS(){u1();var intevalo=setInterval('actualizarmiubicacion()',7000);if(typeof(Lat1)==="undefined"||typeof(Long2)==="undefined"){showAlert('Dame unos segundos aun te estoy ubicando,recuerda estar a campo abierto para mejores resultados',alertDismissed,'Aviso','Aceptar');}else{if(Precision>50){var mesge1='Ubicado con precisión de '+Precision+' metros por favor espera unos segundos mas para mejorar la precision';showAlert(mesge1,alertDismissed,'Aviso','Aceptar');}else{var $ul=$("#list_view");$ul.empty();$.getJSON('200.60.11.226:48245/moviles3/busSum.php?lat1='+Lat1+'&long2='+Long2,function(result){var o1=result.oki;if(o1==='1'){var data=result.results;var listaAGuardar=JSON.stringify(data);localStorage.setItem("lista",listaAGuardar);for(var item in data){var id=data[item].id;var nomcli=data[item].nomcli;var nomcli1=data[item].nomcli;var nomcli=escape(data[item].nomcli);var lat=data[item].st_x;var long=data[item].st_y;var vgral=data[item].vgral;content='<li><a onclick="funca('+lat+','+long+','+Lat1+','+Long2+',\''+id+'\',\''+nomcli+'\',\''+vgral+'\');">'+id+'-'+nomcli1+'</a></li>';$ul.append(content);}$ul.listview("refresh");var $urba=$("#urba");$.getJSON('200.60.11.226:48245/moviles3/busUrba.php?lat1='+Lat1+'&long2='+Long2,function(result){var data=result.results;for(var item in data){var urba=data[item].urba;content='Ubic : '+urba;$urba.html(content);}});showAlert('Listo te ubique ahi tienes la lista de usuarios cercanos a tu posicion',alertDismissed,'Aviso','Aceptar');}else{showAlert('No se encontro usuarios cercanos a tu posición en un radio de 200 metros',alertDismissed,'Aviso','Aceptar');}});var conex=checkConnection();var $mprecision=$("#mprecision");var $mconex=$("#mconex");$mprecision.html('Lat:'+Lat1+'<br>Long:'+Long2+'<br>Precis:'+Precision);$mconex.html('Conec a: '+conex+'<br>');}}};function llenaLista(){var data1=JSON.parse(localStorage.getItem("lista"));for(var item in data1){var id=data1[item].id;var nomcli=data1[item].nomcli;var lat=data1[item].st_x;var long=data1[item].st_y;var vgral=data1[item].vgral;content='<li><a onclick="funca('+lat+','+long+','+Lat1+','+Long2+','+id+',\''+nomcli+'\',\''+vgral+'\');">'+id+'-'+nomcli+'</a></li>';$ul.append(content);}$ul.listview("refresh");}
