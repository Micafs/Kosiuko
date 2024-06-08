'use strict';

const h1 = document.querySelector('h1')
const main = document.querySelector('main')
const newA = main.lastElementChild

h1.addEventListener('mouseout', (e) => {
    console.log('Logo Normal')
    h1.style.color = 'black'
    h1.style["font-family"] = "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    h1.style["font-weight"] = 'bold';
    h1.style["letter-spacing"] = '.3cm';
});
h1.addEventListener('mouseover', (e) => {
    console.log('Cambio del Logo')
    h1.style.color = 'white';
    h1.style["-webkit-text-stroke"] = 'black 1px';

});

newA.addEventListener('mouseout', (e) => {
    console.log('New Arrivals Normal')
    newA.style["font-family"] = "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    newA.style["background-color"] = '#A6ACAF';
    newA.style.color = 'whitesmoke';
    newA.style["font-weight"] = 'bold';
    newA.style["font-size"] = '50px';
    newA.style["letter-spacing"] = '35px';
    newA.style["text-align"] = 'center';
    newA.style["margin-block"] = '5px';
    newA.style["-webkit-text-stroke"] = '#979A9A 1px';
    newA.style["border-block"] = '#979A9A 2px solid';
    newA.style["transition"] = '.2s ease';


});
newA.addEventListener('mouseover', (e) => {
    console.log('Cambio de New Arrivals')
    newA.style.color = 'black';
    newA.style["-webkit-text-stroke"] = 'black 1px';

});

const lista = ['NO EXITEN CÓDIGOS A LA HORA DE VESTIRSE. BE YOUR OWN PIECE OF STREET ART.','3 Y 6 CUOTAS SIN INTERÉS','ENVÍOS GRATIS EN COMPRAS SUPERIORES A $250.000','ENVÍO EN EL DÍA COMPRANDO ANTES DE LAS 12HS - DÍAS HÁBILES']
let promo = 1


function funcion (){
document.getElementById('discountTop').innerHTML = `${lista[promo]}`;
promo+=1;
if (promo > 3){
    promo = 0
}
}
setInterval(funcion,2000)