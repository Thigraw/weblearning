let myVariable = 'GIAO';
myVariable = 'HIA';
/*
加个注释玩玩
*/
let myAlert = document.querySelector('h1');
function multiply(num1, num2, num3){
    let result = num1 * num2 * num3;
    return result;
}
// document.querySelector('html').onclick = function(){
//     alert('别碰我！');
// }
let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Kochou.Shinobu.full.2893918.jpg'){
        myImage.setAttribute('src', 'images/298f4aa509ac1c47b1d17526d6aa5aba.jpeg');
    }else{
        myImage.setAttribute('src', 'images/Kochou.Shinobu.full.2893918.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUsername(){
    let myName = prompt('请输入你的名字。');
    if(!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Meet Kocho Shinobu, ' + myName;
    }
}
if(!localStorage.getItem('name')){
    setUsername();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Meet Kocho Shinobu, ' + storedName;
}
myButton.onclick = function(){
    setUsername();
}