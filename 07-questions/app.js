//using selectors inside the 
const question = document.querySelectorAll(".question");
question.forEach(question => {
    const btn = question.querySelector(".question-btn")
    btn.addEventListener("click",(e) => {
        question.classList.toggle("show-text")
    })
})
// traversing the dom
//  const btns = document.querySelectorAll(".question-title");
// btns.forEach(btn => {
//     btn.addEventListener("click",(e) => {
//         e.currentTarget.parentElement.classList.toggle("show-text");
//     })
// })