const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector('.color')
btn.addEventListener("click", (event) => {
    //getrandom number betwen 
    const randomNumber = GetRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})
function GetRandomNumber(){
    return  Math.floor(Math.random() * colors.length);
}