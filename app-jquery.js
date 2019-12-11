$(document).ready(function () {

   //Usando el mouse con click
   $('.boton').on('click',sonido);
   function sonido(e){
      var nota= e.target.dataset.value;
      //console.log(nota);

      var audio = "#"+ "n" + nota;
      //console.log(audio);
         
      $(audio)[0].pause();
      $(audio)[0].currentTime=0;
      $(audio)[0].play();
   }
   

   //Usando teclas definidas
   $("body").keypress(function(tecla){  
      var key = tecla.key;       
         
      if(key !== "q" && key !== "w" && key !== "e" && key !== "r" && key !== "t" && key !== "y" && key !== "u"){ 
            
            alert("solo se considera las letras: q, w, e, r, t, y, u ");
      
      }else {
         $(`audio[data-value="${key}"]`)[0].pause();
         $(`audio[data-value="${key}"]`)[0].currentTime=0;
         $(`audio[data-value="${key}"]`)[0].play();
      }
         

      });
  
});