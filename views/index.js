var convertBtn = document.querySelector('.download');
var URLinput = document.querySelector('.URL-input');
var mp3btn = document.querySelector('.mp3');
var mp4btn = document.querySelector('.mp4');


mp3btn.addEventListener('click', function(){
  mp3btn.classList.add('active');
  mp4btn.classList.remove("active");
});
mp4btn.addEventListener('click', function(){
  mp4btn.classList.add('active');
  mp3btn.classList.remove("active");
});


var x = 0;


function mp4(){
  x = 1;
}
function mp3(){
  x = 2;
}


function matchYoutubeUrl() {
  var url = URLinput.value;
  var p = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
  if (!url.match(p)) {
    alert("Insert a valid URL");
  } else if(x==0){
    alert("select a format");
  }else{
    
    sendURL(URLinput.value);
    
  }
}






function sendURL(URL) {
  if(x==1){
  window.location.href = `https://ytvideosaver.herokuapp.com/download?URL=${URL}`;
  }
  if(x==2){
  window.location.href = `https://ytvideosaver.herokuapp.com/mp3?URL=${URL}`;
  }
  }
  
    
    
