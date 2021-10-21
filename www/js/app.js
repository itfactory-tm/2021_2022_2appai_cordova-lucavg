$(function(){
    document.addEventListener("deviceready", onDeviceReady, false);
});

function onDeviceReady() {
    console.log('Device is ready');
};

$(document).ready(function(){
    $('.sidenav').sidenav();
});