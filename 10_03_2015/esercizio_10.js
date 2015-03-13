var Randomizza = function(){
	return ((Math.floor(Math.random() *100000) % 9000)+1000);
}

var Esercizio10 = function(){
	var numero=Randomizza;
	var soluzione;
	soluzione=(numero%10) + ((Math.floor(numero / 10))%10)+((Math.floor(numero / 100))%10)+((Math.floor(numero / 1000))%10);
	return soluzione;
}