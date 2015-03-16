(function() {
// Write your code here  
  var Album = function(nome,cantante){
    return {play:function(){
      this.numeroDiVolteAscoltate += 1;
      console.log("Playing "+ nome + " - "+cantante)
    },
    numeroDiVolteAscoltate:0,
    }
  }

 var MusicBox= function() {
    return{
    albumCheAscolto:[],
    addAlbum:function(albumDaAggiungere){
      this.albumCheAscolto.push(albumDaAggiungere);
    },
    favoriteAlbum: function(){
      var Cercalo = function(album){
        if (album.length===0) {
          return Album("","")
        };

        var i,favorite;
        favorite=album[0];

        for (var i = 0; i < album.length; i++) {
          if ((favorite.numeroDiVolteAscoltate)<(album[i].numeroDiVolteAscoltate)) {
            favorite=album[i];
          };
        };

        return favorite;
      }
      Cercalo(this.albumCheAscolto);
    }




    }
  };
  

  var box = MusicBox();
  var a1 = Album("The Who", "Tommy");
  var a2 = Album("Tom Waits", "Closing Time");
  var a3 = Album("John Cale", "Paris 1919");
  var favorite;

  box.addAlbum(a1);
  box.addAlbum(a2);
  box.addAlbum(a3);

  a1.play() ; // prints "Playing The Who - Tommy"
  a2.play(); // prints "Playing Tom Waits - Closing Time"  
  a1.play(); // prints "Playing The Who - Tommy"

  favorite = box.favoriteAlbum(); 

  // prints "favorite album is The Who - Tommy"
  console.log("favorite album is " + favorite); 
}());