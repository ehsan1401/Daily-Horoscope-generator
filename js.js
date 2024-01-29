
let button = document.getElementById("Random");
let text = document.getElementById("text")
let text2 = document.getElementById("text2")





const TakeRandom = (max)=>{
    return Math.floor(Math.random() * max)
};


fetch("./DB.json")
    .then((response) => response.json())
    .then((json) => {
            button.addEventListener("click" , ()=>{
                let item =  json.horoscopes[TakeRandom(json.horoscopes.length)]
                text.innerHTML = item.sign
                text2.innerHTML = item.horoscope
            })
    });






