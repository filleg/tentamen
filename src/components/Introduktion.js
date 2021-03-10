import React from 'react'
import { uppgift1 } from '../view/uppgift1/Uppgift1'

export const Introduktion = (props) => {
	return (
		<div className="introduktion">
			<h2>Förnamn: {props.fname} </h2>
			<h2>Efternamn: {props.lname} </h2>
			<h2>Kurs: {props.course}</h2>
		</div>
	)
}

export default Introduktion 

/*

INSTRUKTIONER FÖR UPPGIFT 1:

	1. Denna komponent skall ta emot 3x prop värden som fyller i de färdiga fälten (fornamn, efternamn, kurs).

	2. Komponenten skall sedan importeras och användas i Uppgift1.js

	3. Värdena som skickas med skall vara korrekta(ditt namn, ditt klassnamn, kursens namn)

 */