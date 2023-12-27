let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");    
const saveBtn = document.getElementById("save-btn");   
const deleteBtn = document.getElementById("delete-btn"); 
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")); //convert string to array

if (leadsFromLocalStorage) { //if leadsFromLocalStorage is not null
    myLeads = leadsFromLocalStorage; //assign leadsFromLocalStorage to myLeads
    render(myLeads); //render myLeads
}


saveBtn.addEventListener("click", function() {
    chrome.tabs.query({active : true, currentWindow: true}, function(tabs) { //query the current tab
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads)); //save MyLeads to local storage and use JSON.stringify to convert array to string
        render(myLeads); //render myLeads
    });

});

function render(leads) { //leads is function parameter
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        // listItems += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>";
        
        // Template String (instead of using many quotes and plus signs)
        listItems += ` 
        <li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems;
} 

deleteBtn.addEventListener("dblclick", function() { //dblclick is a double click
    localStorage.clear(); //clear local storage
    myLeads = []; //clear myLeads
    render(myLeads); //render myLeads
}); 

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = "www.google.com";
    localStorage.setItem("myLeads", JSON.stringify(myLeads)); //save MyLeads to local storage and use JSON.stringify to convert array to string
    render(myLeads); //render myLeads
});

// leads is a function parameter
// myLeads is a function argument
// so leads tu can put any name you want but myLeads is the name of the array you want to pass in