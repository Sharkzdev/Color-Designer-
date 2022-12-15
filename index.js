background = document.getElementById("body");
text = document.getElementById("rgb_text");
let r = 0;
let g = 0;
let b = 0;
let inc = true;
let i = 0;

function More_R(){
    if (r >= 255){
        r = 0;
    }
    r += 5;
    background.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    text.innerHTML = "rgb("+r+","+g+","+b+")";
}

function More_G(){
    if (g >= 255){
        g = 0;
    }
    g += 5;
    background.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    text.innerHTML = "rgb("+r+","+g+","+b+")";
}

function More_B(){
    if (b >= 255){
        b = 0;
    }
    b += 5;
    background.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    text.innerHTML = "rgb("+r+","+g+","+b+")";
}