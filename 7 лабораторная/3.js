var a = parseFloat(2.7)
var b = parseFloat(-3.59)
var x = prompt('Введи х')
var x = parseFloat(x)
if(x > 2){

    var c = (Math.cos(a*x**2))**3;
    alert(c);
    
}else if(x <= -1){
    
    var c = (Math.sin(x))**2+(b/x);
    alert(c);
    
}else if(-1 < x <= 2){

    var c = 2-(x**2)**3
    alert(c)
    
}