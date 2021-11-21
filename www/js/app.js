//imports all the needed data
// import MyImage from '../../resources/me.jpg';
import {
	initializeApp
} from 'firebase/app';
import {
	getDatabase,
	ref,
	child,
	get
} from "firebase/database";
import {
	getAuth,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signInWithRedirect,
	getRedirectResult,
	GoogleAuthProvider
} from "firebase/auth";
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

//all data needed for connecting to the database
const firebaseConfig = {
	apiKey: "AIzaSyD-NuJva4GTL_2_w81wdwhJDEgXhLWVrko",
	authDomain: "ledenlijst-chiro.firebaseapp.com",
	databaseURL: "https://ledenlijst-chiro-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "ledenlijst-chiro",
	storageBucket: "ledenlijst-chiro.appspot.com",
	messagingSenderId: "804184704488",
	appId: "1:804184704488:web:7248f6d785581317fe905d"
};
let ledenChecker = 0;
firebase.initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
var ui = new firebaseui.auth.AuthUI(firebase.auth());
const auth = getAuth();

$(function () {
	//firebase login ui setup
	ui.start('#firebaseui-auth-container', {
		signInOptions: [
			firebase.auth.EmailAuthProvider.PROVIDER_ID
		],
		// Type other config options here...
	});
	var uiConfig = {
		callbacks: {
			signInSuccessWithAuthResult: function (authResult, redirectUrl) {
				// User successfully signed in.
				// Return type determines whether we continue the redirect automatically
				// or whether we leave that to developer to handle.
				$("#adrescheckbox").removeAttr("disabled");
				return false;
			},
			uiShown: function () {
				// The widget is rendered.
				// Hide the loader.
				document.getElementById('loader').style.display = 'none';
			}
		},
		// Will use popup for IDP Providers sign-in flow instead of the default, redirect.
		signInFlow: 'popup',
		signInSuccessUrl: '<url-to-redirect-to-on-success>',
		signInOptions: [
			firebase.auth.EmailAuthProvider.PROVIDER_ID
		]
	};
	ui.start('#firebaseui-auth-container', uiConfig);

	//set value of afdeling selector on settings page
	switch (localStorage.getItem('afd')) {
		case ("/Sloeber"):
			$("#afdselect option[value='1']").attr("selected", "selected");
			break;
		case ("/Speelclub"):
			$("#afdselect option[value='2']").attr("selected", "selected");
			break;
		case ("/Rakwi"):
			$("#afdselect option[value='3']").attr("selected", "selected");
			break;
		case ("/Tito"):
			$("#afdselect option[value='4']").attr("selected", "selected");
			break;
		case ("/Keti"):
			$("#afdselect option[value='5']").attr("selected", "selected");
			break;
		case ("/Aspi"):
			$("#afdselect option[value='6']").attr("selected", "selected");
			break;
	}
	if (localStorage.getItem('afdSet') === null) {
		localStorage.setItem('afd', "/Sloeber");
		localStorage.setItem('afdSet', 1);
	}

	// enables sidenav
	$('.sidenav').sidenav();
	$("#ElementName").css("pointer-events", "none");

	// methods that activate on click of one of the sidenav links
	$('.sidenav a').on('click', function () {
		$('.spa').hide();
		$('#' + $(this).data('show')).show();
		switch (this.innerText) {
			case "ledenlijsten":
				getMemberData();
				$('#tabLists').css({
					display: "block"
				});
				break;
		}
		$('.sidenav').sidenav('close');
	});

	// starts app on about me page
	$('.tabInformation').show();

	//saves settings to localstorage
	$('#settingsbtn').on('click', function () {
		if ($('#adrescheckbox').is(":checked") == true) {
			fillTable();
		}
		const choice = $('#afdselect').val();
		switch (choice) {
			case ("1"):
				localStorage.setItem('afd', "/Sloeber");
				break;
			case ("2"):
				localStorage.setItem('afd', '/Speelclub');
				break;
			case ("3"):
				localStorage.setItem('afd', '/Rakwi');
				break;
			case ("4"):
				localStorage.setItem('afd', '/Tito');
				break;
			case ("5"):
				localStorage.setItem('afd', '/Keti');
				break;
			case ("6"):
				localStorage.setItem('afd', "/Aspi");
				break;
		}
		ledenChecker = 0;
		$('#aanwLeden').text(ledenChecker);
		navigator.vibrate(500)
		alert("Uw instellingen zijn opgeslagen!");
	});

	//login methods
	$('#loginBtn').on('click', function () {
		const email = $('#email').val();
		const password = $('#password').val();
		signInWithEmailAndPassword(auth, email, password);
	});

	// method for grabbing data out of firebase db
	function getMemberData() {
		const dbRef = ref(getDatabase());
		const afdeling = localStorage.getItem('afd');
		$('#afdTitel').innerText = afdeling;
		get(child(dbRef, 'Members/' + afdeling + '/')).then((snapshot) => {
				if (snapshot.exists()) {
					$('#memberList').empty();
					snapshot.forEach((child) => {
						$('#memberList')
							.append($('<p></p>')
								.append($('<label></label>')
									.append($('<input type="checkbox" />'))
									.append($('<span>' + child.key + '</span>'))));
					});
				} else {
					console.log("No data available");
				}
			})
			.catch((error) => {
				console.error(error);
			});
	}

	// on checkbox in ledenlijst checked, procs this function:
	$('#memberList').on('change', "[type='checkbox']", function () {
		if (this.checked) {
			ledenChecker++;
		} else {
			ledenChecker--;
		}
		$('#aanwLeden').text(ledenChecker);
	});

	// fills the table with afdelingdata + adressen
	function fillTable() {
		const dbRef = ref(getDatabase());
		const afdeling = localStorage.getItem('afd');
		get(child(dbRef, 'Members/' + afdeling + '/')).then((snapshot) => {
				if (snapshot.exists()) {
					$('#adresstable').empty();
					$('#adresstable')
					.append($("<tr id='tableheader'></tr>")
					.append('<th>Naam</th>')
					.append('<th>Straat</th>')
					.append('<th>Dorp</th>'));
					
					snapshot.forEach((child) => {
						const childKeyString = child.key.replace("'", "\'");
						let childKeyId = child.key.replaceAll(" ", "_");
						childKeyId = childKeyId.replaceAll("'", "_");
						$('#adresstable')
							.append($('<tr id="' + childKeyId + '"></tr>'));
						$("#" + childKeyId)
						.append($('<td>' + childKeyString + '</td>'));
						var memberSnap = snapshot.child(child.key);
						memberSnap.forEach((childData) => {
							$("#" + childKeyId)
							.append($('<td>' + childData.val() + '</td>'));
						})
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

//firebase authentication methods
//These methods offer possibilities for expanding the app
signInWithEmailAndPassword(auth, email, password)
	.then((userCredential) => {
		// Signed in 
		const user = userCredential.user;

	})
	.catch((error) => {
	});

onAuthStateChanged(auth, (user) => {
	if (user) {
		// User is signed in, see docs for a list of available properties
		// https://firebase.google.com/docs/reference/js/firebase.User
		const uid = user.uid;
		// ...
	} else {
		// User is signed out
		// ...
	}
});

signInWithRedirect(auth, new GoogleAuthProvider())
	.then(() => {
		return getRedirectResult(auth);
	})
	.then((result) => {
		const credential = GoogleAuthProvider.credentialFromResult(result);

		// This gives you a Google Access Token.
		// You can use it to access the Google API.
		const token = credential.accessToken;

		// The signed-in user info.
		const user = result.user;
		// ...
	}).catch((error) => {
		// Handle Errors here.
		const errorCode = error.code;
		const errorMessage = error.message;
	});

getRedirectResult(auth)
	.then((result) => {
		const credential = GoogleAuthProvider.credentialFromResult(result);
		if (credential) {
			// This gives you a Google Access Token.
			// You can use it to access the Google API.
			const token = credential.accessToken;
			// The signed-in user info.
			const user = result.user;
			// ...
		}
	})
	.catch((error) => {
		// Handle Errors here.
		const errorCode = error.code;
		const errorMessage = error.message;
	});