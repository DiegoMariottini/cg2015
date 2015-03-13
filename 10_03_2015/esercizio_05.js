var esercizio05 = function(){
	var PrimoNumero,SecondoNumero,TerzoNumero;

	PrimoNumero = Math.floor(Math.random() *100) % 100;
	SecondoNumero = Math.floor(Math.random() *100) % 100;
	TerzoNumero = Math.floor(Math.random() *100) % 100;

	if (PrimoNumero < SecondoNumero) {
		if (TerzoNumero < SecondoNumero) {console.log(SecondoNumero);} else{console.log(TerzoNumero)};
	} else{
		if (TerzoNumero < PrimoNumero) {console.log(PrimoNumero)} else{console.log(TerzoNumero)};
	};
}