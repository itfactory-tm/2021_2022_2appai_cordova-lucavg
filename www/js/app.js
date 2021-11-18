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

import $ from './jquery';
import serviceAccount from './serviceAccount.json'

console.log('Device is ready');

function onDeviceReady() {
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