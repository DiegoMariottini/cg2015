var es01a = function (numero) {
	var i;
	var array=[];
	for (i = 1; i < (numero+1); i++) {
		array.push(i);
	};
	return array;
}


var es01b = function (numero) {
	var array = es01a(numero);
	var filtro = function (item, index, array){
		return ((item % 2) ===0);
	} 
	return array.filter(filtro)
}


var es01c= function(numero){
	var array = es01b(numero);
	var iteratore = function(item, index, array){
		return item*2;
	}
	return array.map(iteratore);
}

var es01d= function(numero){
	var array = es01c(numero);
	var filtroDivisoriDiQuattro = function(item,index,array){
		return(item%4===0);
	}
	return array.filter(filtroDivisoriDiQuattro);
}

var es01e = function(numero){
	var array= es01d(numero);
	var sommaTuttiINumeri = function (prev, cur, index, array){
		return prev+cur;
	}
	array.reduce(array);
}

var esercizio_1=es01e;
