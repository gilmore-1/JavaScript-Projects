let count = 0;
const value = document.querySelector("#value");
// const decrease = document.querySelector(".decrease");
// const reset = document.querySelector(".reset");
// const increase = document.querySelector(".increase");
const btns = document.querySelectorAll(".btn");
btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count --;
            
        }
        else if(styles.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }
        if(count > 0){
            value.style.color = "green";
        }
        if(count < 0){
            value.style.color = "brown";
        }
        if(count === 0){
            value.style.color = "black";

        }
        value.textContent = count;
    })
})