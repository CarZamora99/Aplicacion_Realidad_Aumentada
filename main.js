 /* ========================================== */
 function patron(){
  var archivo = document.getElementById("file").files[0];

  var reader = new FileReader();
  if (file) {
    reader.readAsDataURL(archivo);
    reader.onloadend = function () {
        document.getElementById("img").src = reader.result;
        const imagen=document.getElementById("img");}
      }
    }
        document.getElementById('urlImag').addEventListener("change", function(){ 
          
          document.getElementById('img').src=this.value;});
/* ========================================== */

/* ========================================== */
function modelo(){
  var archivo = document.getElementById("file1").files[0];
  
  var reader = new FileReader();
  if (file) {
    reader.readAsDataURL(archivo);
    reader.onloadend = function () {
        document.getElementById("img1").src = reader.result;
        const imagen=document.getElementById("img1");}
      }

    }
        document.getElementById('urlImag').addEventListener("change", function(){ 
          
          document.getElementById('img1').src=this.value;});
/* ========================================== */
function arPantalla(){
if(document.getElementById("file1").files[0].name == 'img2.jpg'){
  var div = document.getElementById("camara");
  div.insertAdjacentHTML("beforeend",'<iframe src="toroto.html" width="500px" height="300px" align="center"></iframe>');
  }
  else if(document.getElementById("file1").files[0].name == 'img1.jpg'){
    var div = document.getElementById("camara");
    div.insertAdjacentHTML("beforeend",'<iframe src="rocket.html" width="500px" height="300px" align="center"></iframe>');
  }
  else if(document.getElementById("file1").files[0].name == 'img3.jpg'){
    var div = document.getElementById("camara");
    div.insertAdjacentHTML("beforeend",'<iframe src="dragon.html" width="500px" height="300px" align="center"></iframe>');
  }
  else{
    alert("Modelo no encontrado");
  }

}



