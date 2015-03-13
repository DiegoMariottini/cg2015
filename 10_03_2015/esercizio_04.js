var select = function(data, key, values){
	var i,j,dataDaRestituire=[];

	for (j = 0; j<data.length; j++) {
		for (i=0; i < values.length; i++) {
			if (data[j][key]===values[i]) {
				dataDaRestituire.push(data[j]);
			}; 
		};
	};
	return dataDaRestituire;
};
