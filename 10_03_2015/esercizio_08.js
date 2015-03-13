var esercizio08= function(){
	var numero = Math.floor(Math.random() *100) % 100;
	if (numero > 40) {
		for (i = 40; i <= numero; i++) {
			if (i%2===1) {console.log(i)};
		};
	}else{
		for (i = 40; i >= numero; i--) {
			console.log(i);
		};
	};
}