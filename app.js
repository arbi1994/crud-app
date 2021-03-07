/* CREATE DATA */
const data = [
    {
        name: "Arber",
        surname: "Shyti",
        passport: "Italian",
        dob: "26/04/1994"   
    },
    {
        name: "Massimiliano",
        surname: "Quinto",
        passport: "Italian",
        dob: "12/08/1992"   
    }
]

/* INITIALIZE DATA */
const initData = () => {
    const display = document.createElement("div");
    display.className = "display-data";
    const body = document.querySelector("body");
    body.appendChild(display);

    //loop through data
    for(person of data){
        //create h1 element
        const div = document.createElement("div")
        div.classList.add("output")
        //append it to display box
        display.appendChild(div)
        //display data
        div.innerHTML = `<div class="details"><h3>First Name:</h3><h4>${person.name}</h4></div> 
                        <div class="details"><h3>Last Name:</h3><h4>${person.surname}</h4></div> 
                        <div class="details"><h3>Date of Birth:</h3><h4>${person.dob}</h4></div> 
                        <div class="details"><h3>Passport:</h3><h4>${person.passport}</h4></div>`
    }
}

/* ADD DATA */
const addData = () => {
   
}

/* Set the event listeners */
let load = document.querySelector(".load-data");
load.addEventListener("click", (e) => {
    initData()
    load.disabled = true
});
