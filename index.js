// Use the provided index.html
// -----------------------------------------------------------------------------------

// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.

function getUSA(){

    let usaTxt = document.getElementsByTagName("h1")[0].getElementsByTagName("span")[1].innerHTML
    return usaTxt
}
console.log(getUSA())
// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.

function getPeopleInSales() {

    let peopleInSales = []
    let row = document.getElementsByTagName("tr")
    let findPpl = document.getElementsByTagName("td")

    for (let i = 0; i < row.length; i++) {
        if (findPpl[i].innerHTML == 'Sales'){
            peopleInSales.push(findPpl[i-1].innerHTML)
        }
    }

    return peopleInSales
}
console.log(getPeopleInSales())
// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>

function getAnchorChildren() {
    let getAll = document.querySelectorAll("a>span")
    
    for (let i = 0; i < getAll.length; i++) {
        console.log(getAll[i])
    }
}        
console.log(getAnchorChildren())

// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.

function getHobbies(){
    
    let hobbies = document.getElementsByTagName("select")[2].options
    for (let i = 0; i < hobbies.length; i++) {
        printVal = hobbies[i].innerHTML
        console.log(printVal)
    }
}

console.log(getHobbies())

// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute. 

function getCustomAttribute() {

    let getAll = document.querySelectorAll("[data-customAttr]")

    return getAll
}

console.log(getCustomAttribute())

// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>  

let getAll = document.querySelectorAll('[class = "num"]')
let allEle = [...getAll]


allEle[0].onchange = function() {
    sum()
}

allEle[1].onchange = function() {
    sum()
}

function sum() {
    let fVal = parseInt(document.getElementById("num1"))
    let sVal = parseInt(document.getElementById("num2"))
    let total = fVal + sVal

    return total
}

// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element

// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.

let allEle = document.querySelectorAll('[name="skills"]')
allEle[0].onchange = function() {
    alert("Are you sure CSS is one of your skills?")
}


// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor

// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.


// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.

let myTime = document.getElementById("currentTime")
let interval = setInterval(()=> {
    let newdate = new Date()
    myTime.innerHTML = newdate.toLocaleTimeString()
}, 1000)

// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.

let theColor = document.getElementById("Hello, World")
let interval = setTimeout(()=> {

   theColor = Math.floor(Math.random() * (5-2)+2)
 
    switch(theColor) {
        case 2:
        theColor.style.color = "green"
        break
        case 3:
        theColor.style.color = "red"
        break
        case 4:
        theColor.style.color = "blue"
        break
        case 5:
        theColor.style.color = "yellow"
        break
        default:
        theColor.style.color = "green"
        break

    }
},3000)

// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).
