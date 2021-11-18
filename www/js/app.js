/*import {
	initializeApp,
	credential as _credential,
	firestore
} from "firebase-admin";

import serviceAccount from "./serviceAccount.json";

const db = firestore();
let memberRef = db.collection("Members");
memberRef.get().then((QuerySnapshot) => {
	QuerySnapshot.forEach(document => {
		console.log(document.data());
	})
})*/

import {
	initializeApp,
	applicationDefault,
	cert
} from '../../node_modules/firebase-admin/lib/app/index.js';
import {
	getFirestore,
	Timestamp,
	FieldValue
} from '../../node_modules/firebase-admin/lib/firestore/index.js';

initializeApp({
	credential: applicationDefault(),
	databaseURL: 'https://ledenlijst-chiro.firebaseapp.com'
});

const docRef = db.collection('Members').doc('member3');

(async () => {
	await docRef.set({
		Name: 'Luca Van Genechten',
		Street: 'Berkenlaan 9',
		City: 'Vorselaar'
	})
})();

(async () => {
	const snapshot = await db.collection('users').get();
	snapshot.forEach((doc) => {
		console.log(doc.id, '=>', doc.data());
	});
});

/*function onDeviceReady() {
	const firebaseConfig = {
		apiKey: "AIzaSyD-NuJva4GTL_2_w81wdwhJDEgXhLWVrko",
		authDomain: "ledenlijst-chiro.firebaseapp.com",
		projectId: "ledenlijst-chiro",
		storageBucket: "ledenlijst-chiro.appspot.com",
		messagingSenderId: "804184704488",
		appId: "1:804184704488:web:7248f6d785581317fe905d"
	};

	const app = initializeApp(firebaseConfig);
	const firebaseApp = initializeApp({
		apiKey: 'AIzaSyD-NuJva4GTL_2_w81wdwhJDEgXhLWVrko',
		authDomain: 'ledenlijst-chiro.firebaseapp.com',
		projectId: 'ledenlijst-chiro'
	});*/

	/*const serviceAccount = require('./serviceAccount.json');

	initializeApp({
		credential: cert(serviceAccount)
	});

	const db = getFirestore();
};*/

/*$(function () {
	document.addEventListener("deviceready", onDeviceReady, false);

	$('.sidenav').sidenav();

	$('.sidenav a').click(function () {
		$('.spa').hide();
		$('#' + $(this).data('show')).show();
		$('.sidenav').sidenav('close');
	});
	$('.tabInformation').show();

	initializeApp({
		credential: applicationDefault(),
		databaseURL: 'https://ledenlijst-chiro.firebaseapp.com'
	});

	const docRef = db.collection('Members').doc('member3');

	(async () => {
		await docRef.set({
			Name: 'Luca Van Genechten',
			Street: 'Berkenlaan 9',
			City: 'Vorselaar'
		})
	})();

	(async () => {
		const snapshot = await db.collection('users').get();
		snapshot.forEach((doc) => {
			console.log(doc.id, '=>', doc.data());
		});
	});
});

$(document).ready(function () {
	$('.sidenav').sidenav();

});*/