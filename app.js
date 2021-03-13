

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

/* CREATE DISPLAY ELEMENTS */
const display = document.createElement("div");
display.className = "display-data";
const userInput = document.querySelector(".user-input");
userInput.appendChild(display);

/* INITIALIZE DATA */
const initData = () => {
    //empty existing div of any existing content
    display.innerHTML = ""

    //remove border if no data
    if(data.length > 0){
        display.style.border = "1px solid black"
    }else{
        display.style.border = "none"
    }
    
    //loop through data
    data.forEach((person, index) => {
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

        //select data
        div.addEventListener("click", () => {
            div.classList.toggle("selected")

            //remove data
            if(div.classList.contains("selected")){
                const deleteBtn = document.querySelector(".remove-data")
                //link delete button id to the index of the element selected
                deleteBtn.id = index
                //delete selected
                deleteBtn.addEventListener("click", () => {
                    deleteData()
                })
            }
        })       
    })
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

/* DELETE DATA */
const deleteData = () => {
    
    //check if there is something in the array
    if(data.length > 0){
        initData()
    }else{
        const data = [];
    }

    //remove selected data
    data.forEach((index) => {
        //remove from the array
        data.splice(index, 1)
        initData()
    })
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
    console.log(data.length)
})



