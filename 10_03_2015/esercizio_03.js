var es03a = function(parola){
	return (parola.charAt(0).toUpperCase().concat(parola.slice(1,parola.length)));
}
 
var es03b = function(stringa){
	var i=0;
	stringa = "".concat(es03a(stringa.slice(0)));		
	for ( i=0;i < stringa.length;i++) {
		if (stringa.charAt(i)===' '){
			stringa=((stringa.slice(0,i)).concat(' ',es03a(stringa.slice((i+1)))));		
		}
	};
	return stringa;
}