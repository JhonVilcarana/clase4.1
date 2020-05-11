console.log
var op=parseInt(prompt("OP: "));


function suma (a,b){
    return (parseInt(a)+parseInt(b));
}
function resta(a,b) {
    return  (parseInt(a)-parseInt(b));
}
function multi(a,b) {
    return  (parseInt(a)*parseInt(b));
}
function divi(a,b) {
    if(b>=1)

    return  (parseInt(a)/parseInt(b));
}
function raiz3(a){
    return Math.pow(parseInt(a),1/3)
}
function potencia(a){
    return a*a;
}
function fac(a) {
    let i, s=1;
    for (i =1; i <a+1; i++) {
        s*=i;            
    }
    return s;
}
function datos2(a){
    x=prompt("n1:");
    y=prompt("n2");

}
function datos1(){
    x=Number(prompt("N:"));
}

switch (op) {
    case 1: datos2();
        document.write(suma(x,y));
        break;
    case 2: datos2();
        document.write(resta(x,y));
        break;
    case 3: datos2();
        document.write(multi(x,y));
        break;
    case 4: datos2();
        document.write(divi(x,y));
        break;
    case 5: datos1();
        document.write(raiz3(x));
        break;
    case 6: datos1();
        document.write(potencia(x));
        break;
    case 7: datos1();
        document.write(fac(x));
        break;


    default:
        
}

