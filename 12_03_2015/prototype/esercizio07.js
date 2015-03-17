(function () {
  // Code goes here

var Photo = function(nomeFoto){
  if (!(this instanceof Photo)){
    return new Photo(nomeFoto);
  }
  this.nomeFoto=nomeFoto;
  this.personeNellaFoto=[];
};

Photo.prototype.tag = function(nomePersonaNellaFoto) {
  this.personeNellaFoto.push(nomePersonaNellaFoto);
};

Photo.prototype.showTags = function() {
    var creaListaNomi=function(persone){
      var lista="";
      var i;
      
      if (persone.length===0) {
        return lista;
      }
      for (i = 0; i < (persone.length-1); i++) {
        lista = lista + persone[i]+ ", ";
      };
      
      lista=lista+persone[(persone.length-1)];
      console.log(lista);
    }
    creaListaNomi(this.personeNellaFoto);
  };



var PhotoAlbum= function(){
  if (!(this instanceof PhotoAlbum)){
    return new PhotoAlbum();
  };
  this.fotoNellAlbum = [];
};
  
PhotoAlbum.prototype.addPicture = function(foto) {
    this.fotoNellAlbum.push(foto);
};


PhotoAlbum.prototype.showPictures = function(persona) {
  var CercaPersonaNellaFoto=function(foto,persona){
      var i;
      var personeNellaFoto=foto.personeNellaFoto;
      for (i = 0; i < personeNellaFoto.length; i++) {
        if (personeNellaFoto[i]===persona) {
          return 1===1;
        };
      };
      return 2===1;
    }
  var listaFoto=function(persona){
      var i;
      var fotoInCuiCE=[];
      for (i = 0; i < this.fotoNellAlbum.length; i++) {
        if(CercaPersonaNellaFoto(this.fotoNellAlbum[i],persona)){
          fotoInCuiCE.push(this.fotoNellAlbum[i]);
        };
      };
      return fotoInCuiCE;
    }
  var visualizzaFoto= function(persona){
      
      var i;
      var stringa="";
      var lista= [].concat(listaFoto(persona));
      
      if (lista.length===0){return undefined};

      for (i = 0; i < (lista.length-1); i++) {
        stringa=stringa+lista[i];
      };

      stringa+= lista[(lista.length-1)];
      
      return console.log(stringa);
    }
    visualizzaFoto(persona);
};

  var album = PhotoAlbum();
  var p;

  p = Photo("Paris Trip 1");
  p.tag("Jimmy");
  p.tag("Jane");
  p.tag("Jeff");

  album.addPicture(p);

  p = Photo("Look the Eiffel");
  p.tag("Jimmy");
  p.tag("Max");
  album.addPicture(p);

  p = Photo("OMG it's so high");
  p.tag("Jimmy");
  p.tag("Jane");

  // prints "Jimmy, Jane"
  p.showTags();

  album.addPicture(p);

  // prints "Paris Trip 1, Look the Eiffel, OMG it's so high"
  album.showPictures("Jimmy");

  // prints "Paris Trip 1, OMG it's so high"
  album.showPictures("Jane");    
}());