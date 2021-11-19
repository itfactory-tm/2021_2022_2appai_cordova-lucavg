import MyImage from '../../resources/me.jpg';
import {
	initializeApp
} from 'firebase/app';
import {
	getDatabase,
	ref,
	set,
	child,
	get,
	onValue
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
const db = getDatabase(app);
localStorage.setItem('sloeber', afdeling);
let afdeling = localStorage.getItem('afdeling');

$(function () {
	document.addEventListener("deviceready", onDeviceReady, false);

	$("#me").attr("src", MyImage);

	$('.sidenav').sidenav();

	$('.sidenav a').on('click', function () {
		$('.spa').hide();
		$('#' + $(this).data('show')).show();
		$('.sidenav').sidenav('close');
	});
	$('.tabInformation').show();

	$("#btnSubmit").on('click', function () {

	});

	$('.sidenav').sidenav();

	$("#btnWrite").on("click", function () {
		writeMemberData("Luca Van Genechten", "Berkenlaan 9", "Vorselaar", "peepee");
	});
	$("#btnGet").on("click", function () {
		getMemberData();
	});

	console.log('Device is ready');
});

function onDeviceReady() {

};

function writeMemberData(userId, name, email, imageUrl) {
	set(ref(db, 'users/' + userId), {
			username: name,
			email: email,
			profile_picture: imageUrl
		})
		.then(() => {
			// Data saved successfully!
			console.log("Data saved successfully!")
		})
		.catch((error) => {
			// The write failed...
			console.log("error");
		});
}

function getMemberData() {
	const dbRef = ref(getDatabase());
	get(child(dbRef, 'Members/' + afdeling + '/')).then((snapshot) => {
		if (snapshot.exists()) {
			console.log(snapshot.val());
		} else {
			console.log("No data available");
		}
	})
	.then(() => {

	})
	.catch((error) => {
		console.error(error);
	});
	/*get(child(db, `users/${userId}`)).then((snapshot) => {
	  if (snapshot.exists()) {
		console.log(snapshot.val());
	  } else {
		console.log("No data available");
	  }
	})
	.then(() => {
		console.log(snapshot.username.val);
	})
	.catch((error) => {
	  console.error(error);
	});*/
}
/*
function writeMemberData(name, street, city) {
	userId++;
	set(ref(db, 'Members/' + userId), {
			name: name,
			street: street,
			city: city
		})
		.then(() => {
			console.log("Data written successfully")
		})
		.catch((error) => {
			console.log(error);
		})
}

function getMemberData(userId) {
	get(child(d, `Members/${userId}`)).then((snapshot) => {
		if (snapshot.exists()) {
			console.log(snapshot.val());
		} else {
			console.log("No data available");
		}
	}).catch((error) => {
		console.error(error);
	});
}
*/