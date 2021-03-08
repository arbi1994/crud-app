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
    const form = document.querySelector("form")
    //const body = document.querySelector("body");
    form.appendChild(display);

    display.innerHTML = ""

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
    const fName = document.querySelector(".f_name").value,
          lName = document.querySelector(".l_name").value,
          DOB = document.querySelector(".dob").value,
          pass = document.querySelector(".passport").value

    const name = fName,
          surname = lName,
          dob = DOB,
          passport = pass

    const newPerson = {name, surname, passport, dob}
    data.push(newPerson)
    initData()
}

/* Set the event listeners */

//load data
let load = document.querySelector(".load-data");
load.addEventListener("click", (e) => {
    initData()
    load.disabled = true
});

//open form to add data
const form = document.querySelector("form .content")
const add = document.querySelector(".add-data")

add.addEventListener('click', () => {
    form.classList.toggle("open")
})

//submit data
const submit = document.querySelector(".submit")
submit.addEventListener("click", (e) => {
    e.preventDefault()
    addData()
    form.classList.remove("open")
})

