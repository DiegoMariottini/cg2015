var Randomizza = function(){
	return ((Math.floor(Math.random() *100000) % 9000)+1000);
}

var Esercizio11 = function(){
	var numero=1049;
	do { 
		numero=(numero%10) + ((Math.floor(numero / 10))%10)+((Math.floor(numero / 100))%10)+((Math.floor(numero / 1000))%10);
	}
	while(numero>10)
	return numero;
}