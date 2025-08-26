const addButton = document.querySelector("#add-btn");
const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
console.log(inputBox.value);

showTask();
function addTask()
{
    if(inputBox.value === '')
    {
        alert("Please enter a task.");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.append(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.append(span);
    }
    inputBox.value = "";
    saveData();
}
addButton.addEventListener("click", addTask);
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData()
{
    localStorage.setItem("data", listContainer.innerHTML);

}
function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data");
}
