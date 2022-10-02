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
            if(count <= 0) return;
            count --;
            
        }
        else if(styles.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }
        value.textContent = count;
    })
})