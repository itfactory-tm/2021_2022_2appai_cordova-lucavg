import MyImage from '../../resources/me.jpg';
import {
	initializeApp
} from 'firebase/app';
import {
	getDatabase,
	ref,
	child,
	get
} from "firebase/database";
const firebaseConfig = {
	apiKey: "AIzaSyD-NuJva4GTL_2_w81wdwhJDEgXhLWVrko",
	authDomain: "ledenlijst-chiro.firebaseapp.com",
	databaseURL: "https://ledenlijst-chiro-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "ledenlijst-chiro",
	storageBucket: "ledenlijst-chiro.appspot.com",
	messagingSenderId: "804184704488",
	appId: "1:804184704488:web:7248f6d785581317fe905d"
};
const app = initializeApp(firebaseConfig);
const Sloeber = "Sloeber";
localStorage.setItem('afd', Sloeber);

$(function () {
	// document.addEventListener("deviceready", onDeviceReady, false);

	$("#me").attr("src", MyImage);

	$('.sidenav').sidenav();

	$('.sidenav a').on('click', function () {
		$('.spa').hide();
		$('#' + $(this).data('show')).show();
		switch(this.innerText) {
			case "ledenlijsten":
			  // code block
				getMemberData();
			  break;
			default:

		  }
		$('.sidenav').sidenav('close');
	});
	$('.tabInformation').show();

	$("#btnSubmit").on('click', function () {

	});

	$('.sidenav').sidenav();

	$("#tabLists").on("click", function () {
		getMemberData();
	});

	console.log('Device is ready');

	function getMemberData() {
		const dbRef = ref(getDatabase());
		const afdeling = localStorage.getItem('afd');
		get(child(dbRef, 'Members/' + afdeling + '/')).then((snapshot) => {
			if (snapshot.exists()) {
				// console.log(snapshot.val());
				$('#testID').text('peepee');
				snapshot.forEach((child) => {
					let childName = child.key;
					// let element = '<p><label><input type="checkbox" checked="checked" /><span>' + childName + '</span></label></p>';
					// $('#currentMembers').append($('p').append($('label').append($('input').prop('type', 'checkbox').prop('checked', 'unchecked'))).append($('span')));
					$("#currentMembers").append('<p>kut</p>');
					// .append('<label></label>')
					// .append('<input type="checkbox" />')
					// .append('<span> ' + childName + '</span>');
				});
			} else {
				console.log("No data available");
			}
		})
		.catch((error) => {
			console.error(error);
		});
	}
});

function saveAfdeling() {

}
/*
function writeMemberData(userId, name, email, imageUrl) {
	set(ref(db, 'users/' + userId), {
			username: name,
			email: email,
			profile_picture: imageUrl
		})
		.then(() => {
			console.log("Data saved successfully!")
		})
		.catch((error) => {
			console.log(error);
		});
}
*/