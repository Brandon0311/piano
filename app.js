var boton= document.querySelectorAll('.boton');
var teclas= document.querySelectorAll('.teclas');

//boton.forEach(nota => console.log (nota['id']));
for (let i = 0; i < boton.length; i++) {
    var elemento =boton[i];    

    elemento.addEventListener('click',function(e){
        console.log (e.target.id);
        tecla="n"+e.target.id;
        var nota = document.getElementById(tecla).pause();
        var nota = document.getElementById(tecla).currentTime=0;
        var nota = document.getElementById(tecla).play();
    })
    // elemento.addEventListener('click',function(e){
    //     console.log (e.toElemnet.id);
        
        
    // })

}
