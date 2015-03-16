var identity = function(numero) {









	var i=0;
	var stringaOutput;
	var j=0;
	var matriceRisultante;

	for (var i = 0; i < numero; i++) {
		matriceRisultante= "";
		for (var j = 0; j < numero; j++){
			if (j === (numero-1)) {
				if (i===j) { 
					matriceRisultante += "1"; 
				} 
				else{
					matriceRisultante += "0";
				}
			}
			else{
				if (i===j) { 
					matriceRisultante += "1, \t"; 
				} 
				else{
					matriceRisultante += "0, \t";
				}
			}
		}
		console.log( matriceRisultante );			
	}
}
