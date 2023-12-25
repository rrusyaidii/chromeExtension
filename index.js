let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];

myLeads=JSON.parse(myLeads);
myLeads.push("www.newlead.com");
myLeads=JSON.stringify(myLeads);
console.log(typeof myLeads);

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");    

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    renderLead()
    inputEl.value = "www.";
});

function renderLead() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        // listItems += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>";
        
        // Template String (instead of using many quotes and plus signs)
        listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems;
} 