const ul_1 = document.querySelector(".ques1");
const ul_2 = document.querySelector(".ques2");
const ul_3 = document.querySelector(".ques3")
const ul_4 = document.querySelector(".ques4");
const ul_5 = document.querySelector(".ques5");


const Q1 = document.querySelector(".Q1");
const Q2 = document.querySelector(".Q2");
const Q3 = document.querySelector(".Q3");
const Q4 = document.querySelector(".Q4");
const Q5 = document.querySelector(".Q5");

const ques = document.querySelector(".ques");
const end = document.querySelector(".thanks");
const typara = document.querySelector(".typara");


ul_1.addEventListener("click", function() {
    Q1.style.display = "none";
    Q2.style.display = "block";
})

ul_2.addEventListener("click", function() {
    Q2.style.display = "none";
    Q3.style.display = "block";
})

ul_3.addEventListener("click", function() {
    Q3.style.display = "none";
    Q4.style.display = "block";
})

ul_4.addEventListener("click", function() {
    Q4.style.display = "none";
    Q5.style.display = "block";
})

ul_5.addEventListener("click", function() {
    Q5.style.display = "none";
    end.style.display = "block";
})

typara.addEventListener("click", function() {
    end.style.display = "none";
    Q1.style.display = "block";
})
