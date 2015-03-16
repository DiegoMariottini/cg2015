(function () {
  // Code goes here

var Photo = function(nomeFoto){
  return{
  nomeFoto:nomeFoto,

  personeNellaFoto:[],

  tag:function(nomePersonaNellaFoto){
    this.personeNellaFoto.push(nomePersonaNellaFoto);
  },


  showTags: function(){
    var creaListaNomi=function(persone){
      var lista="";
      var i;
      
      if (persone.length===0) {
        return lista;
      }
      for (i = 0; i < (persone.length-1); i++) {
        lista = lista + persone[i]+ ", ";
      };
      
      lista=lista+persone[persone.length];
      console.log();
    }
    creaListaNomi(this.personeNellaFoto);
  }

}
}


var PhotoAlbum= function(){
  return{
  fotoNellAlbum:[],
  
  addPicture:function(foto){
    this.fotoNellAlbum.push(foto);
  },

  showPictures:function(persona){
    var CercaPersonaNellaFoto=function(foto,persona){
      var i;
      for (i = 0; i < foto.personeNellaFoto.length; i++) {
        if (foto.personeNellaFoto[i]===persona) {
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
      var lista= listaFoto(persona);
      for (i = 0; i < lista.length; i++) {
        stringa=stringa+lista[i];
        if (!(i===(lista.length-1)) {
          stringa=stringa+", ";
        };

      };
      return stringa;
    }
    console.log(visualizzaFoto(persona));

  }
}
}


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