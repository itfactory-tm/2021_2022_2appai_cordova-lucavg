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
const Sloebers = "Sloebers";
localStorage.setItem('afd', Sloebers);

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
	$("#tabLists").on("click", function () {
		getMemberData();
	});

	console.log('Device is ready');
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
function getMemberData() {
	const dbRef = ref(getDatabase());
	const afdeling = localStorage.getItem('afd');
	get(child(dbRef, 'Members/' + afdeling + '/')).then((snapshot) => {
		if (snapshot.exists()) {
			// console.log(snapshot.val());
			snapshot.forEach((child) => {
				//var formInput = child.key;
				console.log(child.key);
			});
		} else {
			console.log("No data available");
		}
	})
	.catch((error) => {
		console.error(error);
	});
}