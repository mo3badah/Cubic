function getRandomInt(min,max) {
    //  return Math.floor(Math.random() * (max - min + 1)) + min;
    let imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return imn;
}
let MainOne=0, MainTwo = 0;
let button1 = document.getElementById('play1');
let button2 = document.getElementById('play2');
let score1 =document.querySelector('.players .first');
let score2 =document.querySelector('.players .second');
let indicator1 =document.querySelector('.photo .first');
let indicator2 =document.querySelector('.photo .second');
let valueOne = document.querySelector('.first span');
let valueTwo = document.querySelector('.second span');
let cube = document.getElementById('cube');
let objectData = [{n:1,to:38},{n:4,to:14},{n:9,to:31},{n:17,to:7},{n:28,to:84},{n:21,to:42},{n:51,to:67},{n:54,to:34},{n:62,to:19},{n:64,to:60},{n:70,to:91},{n:80,to:100},{n:87,to:24},{n:93,to:73},{n:95,to:75},{n:98,to:79}];
button1.addEventListener('click',()=>{
    let getNumber = getRandomInt(1,6);
    let x,y;
    switch (getNumber) {
        case 1: x=360;y=630;break;
        case 2: x=360;y=360;break;
        case 3: x=450;y=360;break;
        case 4: x=540;y=360;break;
        case 5: x=630;y=360;break;
        case 6: x=360;y=450;break;
        default: x=360; y=360;break;
    }
    cube.style.cssText = `transform:rotateY(${x}deg) rotateX(${y}deg); `;
    MainOne = checkValues((getNumber + MainOne));
    valueOne.textContent = `${MainOne}`;
    change(MainOne,true);
    button1.style.visibility = "hidden";
    button2.style.visibility = "visible";
    score1.classList.remove('active');
    score2.classList.add('active');
    celbrate(true);
});
button2.addEventListener('click',()=>{
    let getNumber = getRandomInt(1,6);
    let x,y;
    switch (getNumber) {
        case 1: x=360;y=630;break;
        case 2: x=360;y=360;break;
        case 3: x=450;y=360;break;
        case 4: x=540;y=360;break;
        case 5: x=630;y=360;break;
        case 6: x=360;y=450;break;
        default: x=360; y=360;break;
    }
    cube.style.cssText = `transform:rotateY(${x}deg) rotateX(${y}deg); `;
    MainTwo = checkValues((getNumber + MainTwo));
    valueTwo.textContent = `${MainTwo}`;
    change(MainTwo,false);
    button2.style.visibility = "hidden";
    button1.style.visibility = "visible";
    score2.classList.remove('active');
    score1.classList.add('active');
    celbrate(false);
});

function checkValues(x) {
    let result = x;
    objectData.forEach(function(item){
        if (x === item.n){
            result = item.to;
        }
    });
    return result;
}
function change(where,which) {
    let x = Math.floor((where / 10) % 10);
    let y = Math.floor((where / 1) % 10);
    if (x+y === x){
        x--;
        y = 9;
        if (x%2){
            y-=9;
        }
    }else {
        if (x%2){
            y=10-y;
        }else {
            y--;
        }
    }
    if (where === 100){
        x =9;
        y=0
    }
    if (which){
        indicator1.style.top = `${500-(50*(x+1))}px`;
        indicator1.style.left = `${50*y}px`;
    }else {
        indicator2.style.top = `${500-(50*(x+1))}px`;
        indicator2.style.left = `${50*y}px`;
    }
}
let mybutton = document.querySelector('.btn');
let myText = document.querySelector('.celebrate p');
let myMain = document.querySelector('.celebrate');
function celbrate(x) {
    if (x){
        if (MainOne >= 100){
            myText.textContent = `الفائز هو الاعب الاول`
            myMain.style.visibility = 'visible';
            button1.style.visibility = "hidden";
            button2.style.visibility = "hidden";
        }
    }else {
        if (MainTwo >= 100){
            myText.textContent = `الفائز هو الاعب الثاني`
            myMain.style.visibility = 'visible';
            button1.style.visibility = "hidden";
            button2.style.visibility = "hidden";
        }
    }
}

mybutton.onclick = function (){
    myMain.style.display = 'none';
}

