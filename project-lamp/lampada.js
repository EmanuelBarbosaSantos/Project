const turnOn = document.getElementById ('turnOn');

const turnOff = document.getElementById ('turnOff');

const lamp = document.getElementById ('lamp');
 
function islampBroken () {
    return lamp.src.indexoff ( 'quebrada' ) > -1
}
function lampOn () {
    if ( !islampBroken ()) {
    lamp.src ='./ligada.jpg';
    }
}
 
function lampOff () { 
    if ( !islampBroken ()) {
    lamp.src ='./desligada.jpg';
    }
} 
 function lampBroken () {
    lamp.src = './quebrada.jpg';
 }

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);

lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBroken)