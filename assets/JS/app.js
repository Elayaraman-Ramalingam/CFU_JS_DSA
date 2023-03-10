

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

const [Largecheck, smallcheck, numcheck, symcheck] = [
    'uppercase', 'lowercase', 'numbers', 'symbols'
    ].map(id => document.getElementById(id));

const small = "abcdefghijklmnopqrstuvwxyz";
const large = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=?|///\~`.,<>;:'{}[] "

function printPasswd(){

    outputNum.innerHTML = 0;

    let 
    Lval = Largecheck.checked ? large : "",
    Sval = smallcheck.checked ? small : "",
    nval = numcheck.checked ? numbers : "",
    sval = symcheck.checked ? symbols : "";

    let value = Lval + Sval + nval + sval ;

    const length = value.length;
    let str = "";
        for(let i = 0; i < n; i++) {
            str += value.charAt(Math.floor(Math.random()*length)); ;
        }
    document.getElementById('password__result').value = str;

    showStrength();

    function showStrength(){

        outputNum.innerHTML = 
        str.length <= 5 ? "weak" : 
        str.length <= 10 ? "Normal" :
        str.length <= 15 ? "strong" :
        str.length <= 20 ? "Very Strong" : "Very Weak"; ;
    }
}

let outputNum = document.getElementById('outputNum')



