function _gid(idx){
    return document.getElementById(idx);
 }

 function _dce(elemen){
     return document.createElement(elemen);
 }

 function ff(form){
    window.location.reload();
 }
 
 var imagenesVisibles = 0;
 var imagenAnterior = false;
 var vidas = 6;
 var wins = 0;


 function verificar(obj){
     index= obj.getAttribute('imagen');
     imagen = _gid ('imagen'+index);
     visible = imagen.getAttribute('visible');
     if(visible = '0'){
         imagen.style.visibility = 'visible';
         imagen.setAttribute('visible',1);
         imagenesVisibles++;
         if(!imagenAnterior){
             imagenAnterior = imagen;
         }
     }
     setTimeout(()=>{
         if(imagenesVisibles > 1){
         if(imagenAnterior.getAttribute('src')== imagen.getAttribute('src')){
             alert('Has encontrado dos imagenes iguales');
            wins++;
            if(wins == 9){
                const image = document.createElement('img')
                image.classList.add('imagenwin');
                image.src  = 'https://static.pintzap.com/img/pics/t/600/1591149158_felicidades-ganaste-el-juego.png'
                document.querySelector('body').appendChild(image)
            }
             imagenAnterior = false;
             imagenesVisibles = 0;
             imagenAnterior.parentNode.removeAttribute('onclick');
             imagen.parentNode.removeAttribute('onclick');
         }
         
         else{
            vidas--;
            if(vidas > 0){
                document.querySelector('.nvidas').innerText = 'Vidas: ' + vidas;
             }
             else{
                 alert('Has perdido')
                 window.location.reload();

             }
            alert('Las dos imagenes no son iguales');
             imagen.style.visibility = 'hidden';
             imagen.setAttribute('visible',0);
             imagenAnterior.style.visibility = 'hidden';
             imagenAnterior.setAttribute('visible',0);

         }
         imagenesVisibles = 0;
         imagenAnterior = false;
     }
     }, 300);
     
   
 }

function initGame(){
     destino = _gid('main_cont');
     destino.innerHTML = '';

     var fotos = [0,1,2,3,4,5,6,7,8,0,1,2,3,4,5,6,7,8,];
     fotos = fotos.sort( () => .5 - Math.random() );
     
     fotos.map((prop, index)=>{
         x = fotos[index];
         div = _dce('div');
         div.setAttribute('imagen',index);
         div.setAttribute('onclick','verificar(this)');
         div.innerHTML = `
         <img visible "0" id="imagen${index}" src="img/${x}.png" class="imagenes"/>
         `;
         destino.appendChild(div)
     });
 }