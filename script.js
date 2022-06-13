const num = document.getElementById("number");
const addHere = document.getElementById("addHere");
const btn = document.getElementById("btn");
const lbKg = document.getElementById("lbKg");

const displayConversions = () => {
    let num = JSON.parse(localStorage.getItem("current-number"));
    let unit = localStorage.getItem("current-unit");
    document.querySelector("h1").innerHTML = `Percentages`
    document.querySelector("h1").innerHTML += ` of: ${num}${unit} (${unit === "kg" ? `${Math.round(num*2.2)}lb`: `${Math.round(num/2.2)}kg`})`
    addHere.innerHTML = "";
    let percentageStart = .40
    while(percentageStart <= .95){
        addHere.innerHTML += `
            <div class="row justify-content-center">
                <div class="col-10 text-center">
                    <h4>${Math.round(percentageStart*100)}%: ${Math.round(num*percentageStart)}${unit === "kg" ? `kg = ${Math.round(num*2.2*percentageStart)}lb`:`lb = ${Math.round(num/2.2*percentageStart)}kg`}</h4>
                </div>
             </div>
        `;
        percentageStart += .05; 
            }
            addHere.innerHTML += `
    <div class="row justify-content-center">
            <div class="col-10 text-center">
                <button type="button" onclick="doMath()" id="conversionBtn" class="btn btn-primary m-1">Hide Conversions</button>
            </div>
        </div>
    `
}

const doMath = (num) => {
    addHere.innerHTML = "";
    let unit = lbKg.value;
    if(!num){
        num = JSON.parse(localStorage.getItem("current-number"))
        unit = localStorage.getItem("current-unit");
    }
    localStorage.setItem("current-number", num);
    localStorage.setItem("current-unit", unit);
document.querySelector("h1").innerHTML = `Percentages`
document.querySelector("h1").innerHTML += ` of: ${num}${unit}`
    let percentageStart = .40
    while(percentageStart <= .95){
        addHere.innerHTML += `
        <div class="row justify-content-center">
            <div class="col-10 text-center">
                <h4>${Math.round(percentageStart*100)}%: ${Math.round(num*percentageStart)}</h4>
            </div>
        </div>
        `;
       percentageStart += .05; 
    } 
    addHere.innerHTML += `
    <div class="row justify-content-center">
            <div class="col-10 text-center">
                <button type="button" onclick="displayConversions()" id="conversionBtn" class="btn btn-primary m-1">Show Conversions</button>
            </div>
        </div>
    `
}



if(localStorage.getItem("current-number")){
    doMath(JSON.parse(localStorage.getItem("current-number")))
}

btn.addEventListener("click", function(){
    let number = num.value;
    doMath(number);
    num.value = null;
})