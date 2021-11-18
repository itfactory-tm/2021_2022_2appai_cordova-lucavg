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

import $ from 'jquery';
import serviceAccount from './serviceAccount.json'

function onDeviceReady() {
	/*const firebaseConfig = {
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
	});

	const serviceAccount = require('./serviceAccount.json');

	initializeApp({
		credential: cert(serviceAccount)
	});

	const db = getFirestore();*/
	initializeApp({
		credential: cert(serviceAccount)
	});
	
	const db = getFirestore();
	
	const docRef = db.collection('Members').doc('member3');
	
	(async () => {
		const snapshot = await db.collection('Members').get();
		snapshot.forEach((doc) => {
			console.log(doc.id, '=>', doc.data());
		});
	});
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