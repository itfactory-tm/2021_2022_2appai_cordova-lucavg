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

function onDeviceReady() {
    console.log('Device is ready');
	CiviCRM();
};

const CiviCRM = function () {
	var config = {
		server:'https://www.chiro-vorselaar.be/wp-admin/admin.php?page=CiviCRM',
		path:'?page=CiviCRM&q=civicrm/ajax/rest',
		key:'b3fb777f76e001f9e15aa87b5ec23022',
		api_key:'BUNEULKF7Z9SufJbeGnni0Jn'
	  };
	
	var crmAPI = require(['civicrm']);

	(config);

	crmAPI.get ('contact',{contact_type:'Individual',return:'display_name,email,phone'},
		function (result) {
		  for (var i in result.values) {
			val = result.values[i];
		   console.log(val.id +": "+val.display_name+ " "+val.email+ " "+ val.phone);
		  }
		});
}

  /*CRM.api4('Membership', 'get', {
	select: ["contact_id.first_name", "contact_id.last_name"],
	where: [["OR", [["membership_type_id", "=", 3], ["membership_type_id", "=", 7], ["membership_type_id", "=", 8]]], ["contact_id.Afdeling.Afdeling_extended", "=", 4], ["OR", [["status_id", "=", 1], ["status_id", "=", 5]]]],
	limit: 25,
	checkPermissions: false // IGNORED: permissions are always enforced from client-side requests
  }).then(function(memberships) {
	// do something with memberships array
  }, function(failure) {
	// handle failure
  });*/
  
$(document).ready(function(){
    $('.sidenav').sidenav();
	
});

var configServer = {
	server:''
}