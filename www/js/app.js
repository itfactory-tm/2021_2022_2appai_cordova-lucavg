function onDeviceReady() {
    console.log('Device is ready');
};

$(function () {
	document.addEventListener("deviceready", onDeviceReady, false);

	$('.sidenav').sidenav();

	$('.sidenav a').click(function () {
		$('.spa').hide();
		$('#' + $(this).data('show')).show();
		$('.sidenav').sidenav('close');
	});
	$('.tabInformation').show();
});

$(document).ready(function () {
	$('.sidenav').sidenav();

});