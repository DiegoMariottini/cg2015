var es02a = function (array,n){
	var i;
	var arrayFunzione=[];
	arrayFunzione = array.concat([],[]);
	for (i= 0; i < n; i++) {
		arrayFunzione.push(Math.floor(Math.random() *1000));		//numero random inferiore a 1000
	};
	return arrayFunzione;
}

var es02b = function(array){
	var arrayFunzine=array;
	var filtro = function(item,index,ar){
		return ((item%2)===1);
	};
	return arrayFunzine.filter(filtro);
}

var es02c = function(array){
	var arrayFunzine = array;
	return arrayFunzine.sort();
}

var esercizio02 = function(array,n){
	var arrayFunzine = array;
	return es02c(es02b(es02a(arrayFunzine,n)));
}