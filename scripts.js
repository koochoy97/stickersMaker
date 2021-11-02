var bandera = document.querySelector('.bandera');
var stickerNombre = document.querySelectorAll('.nombre');
var stickerApellido = document.querySelectorAll('.apellido');

var button = document.querySelector('button');

var inputNombre = document.querySelector('.inputNombre')
var inputApellido = document.querySelector('.inputApellido')

var letras ={
    a:28,
    b:28,
    c:25,
    d:26,
    e:25,
    f:28,
    g:26,
    h:28,
    i:15,
    j:25,
    k:30,
    l:24,
    m:37,
    n:28,
    o:23,
    p:26,
    q:27,
    r:29,
    s:27,
    t:16,
    x:31,
    y:29,
    w:50,
    z:26,
    ' ':11
}


var nombreArray = [];

var ancho = 0;

function calcularAncho(nombre){
    ancho = 0;
    var nombreArray = nombre.split('');
    nombreArray.forEach((letraNombre, i)=>{
        ancho= ancho + letras[letraNombre];
    })
        ancho = ancho -15
    return (ancho);
}

button.addEventListener('click',()=>{
    
    var newValue = inputNombre.value.toLowerCase();
    calcularAncho(newValue)
    bandera.setAttribute('x',ancho)

    stickerNombre.forEach((element, i) => {
        element.innerHTML=inputNombre.value;
    });
    stickerApellido.forEach((element, i) => {
        element.innerHTML=inputApellido.value;
    });
    
})

