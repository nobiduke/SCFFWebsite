/*
    file: index.js
    author: nobiduke
    date: 5/9/2022
    desc: the javascript behind the typing home page of SCFF API framework
*/


const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

let theText = document.getElementById("gorb1");
let theDash = document.getElementById("gorb2");

theDash.innerHTML = '\u2759'

let word = "Client = scff.User(\"Your Token Here!\")";
let length = word.length;
let curr = ">>> ";
theText.innerHTML = curr;

async function text(){
    await sleep(800);
    for (let i = 0; i < length; i++){

        curr+=word[i];
        theText.innerHTML = curr;
        await sleep(100);
    }
    
    await sleep(150)
    let i = 0;
    while (true){
        if (i % 2 == 0){
            theDash.style.opacity = 0;
        }
        else{
            theDash.style.opacity = 1;
        }

        i++;
        if(i > 9){
            i = 0
        }
        await sleep(800);
    }
}


text();
