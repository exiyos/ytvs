var convertBtn = document.querySelector('.download');
var URLinput = document.querySelector('.URL-input');




function matchYoutubeUrl() {
  var url = URLinput.value;
  var p = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
  if (url.match(p)) {
    console.log(`URL: ${URLinput.value}`);
    sendURL(URLinput.value);
  } else {
    alert("Insert a valid URL");
  }
}





convertBtn.addEventListener('click', () => {});
function sendURL(URL) {
  window.location.href = `http://localhost:4000/download?URL=${URL}`;
}