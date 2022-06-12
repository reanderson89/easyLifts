const num = document.getElementById("number");
const addHere = document.getElementById("addHere");
const btn = document.getElementById("btn");
const lbKg = document.getElementById("lbKg");

const doMath = (num) => {
    addHere.innerHTML = "";
    localStorage.setItem("current-number", num);
document.querySelector("h1").innerHTML = `Percentages`
document.querySelector("h1").innerHTML += ` of ${num}`
    let unit = lbKg.value
    let percentageStart = .40;

    while(percentageStart <= .95){
        addHere.innerHTML += `
        <div class="row justify-content-center">
            <div class="col-3">
                <h4>${Math.round(percentageStart*100)}%: ${Math.round(num*percentageStart)}${unit}</h4>
            </div>
        </div>
        `;
       percentageStart += .05; 
    }
}

if(localStorage.getItem("current-number")){
    doMath(JSON.parse(localStorage.getItem("current-number")))
}

btn.addEventListener("click", function(){
    let number = num.value;
    doMath(number);
})