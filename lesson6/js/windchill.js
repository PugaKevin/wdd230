/*Calculate Wind chill*/
let temp = parseFloat(document.querySelector('#temp').textContent);
let speed = parseFloat(document.querySelector('#speed').textContent);
// Math time
let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
//round down to make sure we dont' get a long number
let windchill = Math.floor(wc);
//Output

if(temp <= 50 && speed > 3){
    let istemp = isNaN(temp);
    let isspeed = isNaN(speed);
    if(istemp === "True" || isspeed === "True"){
        document.querySelector('#windchilla').innerHTML = `N/A`;
    }else{
        document.querySelector('#windchilla').innerHTML = `${windchill}`; 
    }
}else {
    document.querySelector('#windchilla').innerHTML = `N/A`;
}
