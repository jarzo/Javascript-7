'use strict'
/*Instrukcje Warunkowe if, if-else, else if, switch */
var wzrostMateusza = 170;
var wzrostOli = 170;

//warunek if//

if ( wzrostOli < wzrostMateusza){
    console.log("Ola jest niższa");
}

//warunek if  else//

if ( wzrostOli > wzrostMateusza){
	console.log("Olga jest wyższa :)");
}else{
	console.log("Olga jest niższa");
}

//warunek else_if//

if ( wzrostOli > wzrostMateusza ) {
	console.log( "Olga jest wyższa :)");
} else if ( wzrostOli == wzrostMateusza) { 
	console.log("Olga tak wysoka jak Mateusz");
} else { 
	console.log("Olga jest niższa");
}

//warunek switch//

var kolor = 'zielony';

switch (kolor){
	case 'czerwony':
		console.log('Kolor czerwony');
		break;
	case 'zielony':
		console.log('Kolor zielony');
		break;
	case 'niebieski':
		console.log('Kolor niebieski');
			 break;
	default:
			 console.log('Inny kolor')
}