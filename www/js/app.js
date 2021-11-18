/*import {
	initializeApp,
	applicationDefault,
	cert
} from '../../node_modules/firebase-admin/lib/app/index.js';
import {
	getFirestore,
	Timestamp,
	FieldValue
} from '../../node_modules/firebase-admin/lib/firestore/index.js';

import serviceAccount from './serviceAccount.json'
*/

import MyImage from '../../resources/me.jpg';

$(function () {
	document.addEventListener("deviceready", onDeviceReady, false);

	$("#me").attr("src",MyImage);

	$('.sidenav').sidenav();

	$('.sidenav a').on('click', function() {
		$('.spa').hide();
		$('#' + $(this).data('show')).show();
		$('.sidenav').sidenav('close');
	});
	$('.tabInformation').show();
});

$(document).on('load', function() {
	$('.sidenav').sidenav();

});

function onDeviceReady() {

	console.log('Device is ready');
	/*
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
	*/
};