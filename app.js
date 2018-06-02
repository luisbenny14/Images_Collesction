window.onload=(function(){
    initializate();
})();
function initializate (){
    var images = document.querySelectorAll(".images a"); //selecciona la clase imagenes y los elementos <a
    var viewer = document.querySelector(".view");// selecciona la clase .view que es el back del visualizador
    images.forEach(link => link.addEventListener("click", function(e){
        e.preventDefault();

        
        var viewx = this.querySelector ('img')
        viewimg = viewer.querySelector('img')
        viewimg.src = viewx.src;
        viewer.style.display='flex'
    }))
    var cerrar = document.querySelector(".close");
    cerrar.addEventListener("click", function(e){
        e.preventDefault();
        viewer.style.display="none";
});
}
