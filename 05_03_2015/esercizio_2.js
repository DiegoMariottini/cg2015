
	var i;
	var finoAlNumero;
	var stringaOutput;
	var j;

	finoAlNumero=10;
	for (i = 1; i < (finoAlNumero+1); i++) {
		stringaOutput='';
		for (j = 1; j < (finoAlNumero+1); j++) {
					if (j=== finoAlNumero) {
						stringaOutput += (j*i);
					} 
						else{
						stringaOutput += (j*i) + ",\t";
					};
				};
				console.log(stringaOutput); ;		
		};
	
	
