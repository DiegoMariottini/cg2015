(function() {
// Write your code here    function Album(artist,name){
function Album(artist,name){
	if (!(this instanceof Album)){
        return new Album(artist,name);
   	}
   	this.artist=artist;
   	this.name=name;
    this.numeroDiVolteAscoltate=0;
};

Album.prototype.play=function(){
      this.numeroDiVolteAscoltate += 1;
      console.log("Playing "+ this.name + " - "+this.artist)
};

var MusicBox =function(){
 	if (!(this instanceof MusicBox)) {
 		return new MusicBox();
 	};
 	this.albumCheAscolto=[];
};

MusicBox.prototype.addAlbum=function(albumDaAggiungere){
  this.albumCheAscolto.push(albumDaAggiungere);
};

MusicBox.prototype.favoriteAlbum = function(){
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

        return (favorite.name + " - " + favorite.artist);
      }
      return Cercalo(this.albumCheAscolto);
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