
function openExplain() {
   // alert('openExplain called');
    document.getElementById('content');
    element.style.display = 'block';
}

function closeExplain() {
   // alert("closeExplain called");
   element = document.getElementById('content');
   element.style.display = 'none';
}

function doOver(element) {
   // alert('doOver called..');
   document.getElementById('image').innerHTML = element.alt;
}

function doOut() {
   // alert('doOut called..');
   document.getElementById('image').innerHTML = "Hover over an image below to display here.."
}

/**
 * ARROW Functions
 * 
 * var openExplain=()=>{
 * element =document.getElementById('content')
 * element.style.display= 'block';
 * }
 * 
 * var closeExplain=()=> {
 * element =document.getElementById('content')
 * element.style.display= 'none';
 * }
 * 
 * var doOver=()=> {
 * document.getElementById("image").innerHTML = element.alt;
 * }
 * 
 * var doOut=()=> {
 * document.getElementById("image").innerHTML = "Hover over and image below to display here..";
 * }
 */