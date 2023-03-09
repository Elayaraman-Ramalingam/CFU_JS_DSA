

let n = 0;
/*get the number of characters*/
function charLength() {

    document.getElementById('password__result').value = "";

    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
    n = charLength;
    if(charLength == 0 ){
        document.getElementById('btn').setAttribute('disabled', 'disabled');
    }
    if(charLength > 0){
        document.getElementById('btn').removeAttribute('disabled');
    }
    return charLength;

}

document.getElementById('length').addEventListener('change', charLength);


document.getElementById('btn').addEventListener("click",printPasswd);

const Largecheck = document.getElementById("uppercase");
const smallcheck = document.getElementById("lowercase");
const numcheck = document.getElementById("numbers");
const symcheck = document.getElementById("symbols");

const small = "abcdefghijklmnopqrstuvwxyz";
const large = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=?|\/~`.,<>;:'{}[] "

function printPasswd(){

    outputNum.innerHTML = 0;

    let Lval = "", Sval = "" , nval = "" , sval = "";

    if(Largecheck.checked == true){
        Lval = large;
    }
    if(smallcheck.checked == true){
        Sval = small;
    }
    if(numcheck.checked == true){
        nval = numbers;
    }
    if(symcheck.checked == true){
        sval = symbols;
    }

    let value = Lval + Sval + nval + sval ;

    const length = value.length;
    let str = "";
        for(let i = 0; i < n; i++) {
            str += value.charAt(Math.floor(Math.random()*length)); ;
        }
    document.getElementById('password__result').value = str;

    showStrength();

    function showStrength(){
        if(str.length > 0){
            outputNum.innerHTML = 1;
        }
        if(str.length > 5){
            outputNum.innerHTML = 2;
        }
        if(str.length > 10){
            outputNum.innerHTML = 3;
        }
        if(str.length > 15){
            outputNum.innerHTML = 4;
        }
    }
}

let outputNum = document.getElementById('outputNum')



