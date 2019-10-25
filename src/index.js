//Nedelja 1, dan 1
/* komentar u vise redova
dobar za proveru kodova ili eliminisanje
sledeci kod nam ispisuje poruku kao i u web stranicu 
ubacuje neki element*/

console.log('Hello by js');
console.log('radi li');

//const app = document.getElementById('app');
//app.innerHTML = '<p>Hello to BootcampPizza by JavaScript Basics</p>';
const app = document.getElementById('app');
console.log(app);

app.inerHTML = '<p>Hello to Bootcamppizza</p>';

const social = document.getElementById('social');// prvi korak za ubacivanje

social.innerHTML = '<a href="https://www.facebook.com" target="_blank"><img class="social-icon" src="assets/images/fb_ico.png" /></a>';//ubacivanje ikonica fb

social.innerHTML += '<a href="https://www.youtube.com" target="_blank"><img class="social-icon" src="assets/images/icons8-youtube-480.png" /></a>';//ubacivanje jos ikonica you tube nprm fb

social.innerHTML += '<a href="https://www.instagram.com" target="_blank"><img class="social-icon" src="assets/images/icons8-instagram-480.png" /></a>';//ubacivanje jos ikonica you tube nprm fb

social.innerHTML += '<a href="https://www.twitter.com" target="_blank"><img class="social-icon" src="assets/images/icons8-twitter-400.png" /></a>';//ubacivanje jos ikonica you tube nprm fb

var variable = 'Dobar dan iz varijable!';
console.log(variable);
var variable2 = 'Dodatak poruke';
console.log(variable + variable2);
console.log(variable - variable2); //ne moze da se oduzima pojavljuje se nan satro kao ne broj isto je i sa puta i podeljeno
var number1 = 8;
var number2 = 0;
var number3 = number1 / number2;
console.log('to ' + number3 + ' and beyond');
number1 = 15;
number2 = 10;
number3 = 2;
console.log(variable + number1 + number2 * number3);// prvo sabira pa onda mnozi i sjedinjuje rezuldat
console.log((number1 + number2) * number3);
const constant = 5;
console.log(constant);
//constant=6; //Ne moze

{
    var a = 12; //radi van scopa
    let b = 5;  // ne radi van scopa
    console.log(a);
    console.log(b);
}


console.log(a);
//console.log(b); //greska ako ga aktiviramo zato sto je van scopa

//let b=15; // ako imamo let spolja onda je naredna linija okej u suprotnom nije

{//s1
let b;
b=10;
console.log(b)
    {//s2
        b=15
        let c;
        c=8;
        console.log(b+c)

        {//s3
            let d;
            console.log(d)


        }

    }

}

{
    var a;
    {let b;
        b=12;
    }
    {var c;}
}
{

    
let a
let a1                    //  promenljive primeri
let 1a                      // ne moze da se pocne sa brojem nmg da budu operacije mat 
let _a
let _ab
let *ab                              
let 
let 
let 
let 
    let 
}