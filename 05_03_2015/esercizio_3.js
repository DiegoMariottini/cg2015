
	var i;
	var finoAlNumero;
	var stringaOutput;
	var j;

	finoAlNumero=10;
	for (i = 1; i < (finoAlNumero+1); i++) {
		stringaOutput='';
		for (j = 1; j < (finoAlNumero+1); j++) {
					if (j=== finoAlNumero) {
						if (i===j) {
							stringaOutput += "1";
						} else{
							stringaOutput += "0";
						};
					} 
						else{
							if (i===j) {
								stringaOutput += "1,\t"
							} else{
								stringaOutput += "0,\t"
							};
					};
				};
				console.log(stringaOutput); ;		
		};
	
	
