// Elements
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const mobileInput = document.getElementById("mobile");
const cityInput = document.getElementById("city");
const saveBtn = document.getElementById("saveBtn");
const historyBody = document.querySelector("#historyTable tbody");
// Store data (RENAMED)
let people = [];
saveBtn.onclick = () => {
    const person = {
        name: nameInput.value,
        age: Number(ageInput.value),
        mobile: Number(mobileInput.value),
        city: cityInput.value
    };
    people.push(person); // ← FIXED
    addToTable(person);
    // Clear inputs
    nameInput.value = "";
    ageInput.value = "";
    mobileInput.value = "";
    cityInput.value = "";
};
function addToTable(person) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${person.name}</td>
        <td>${person.age}</td>
        <td>${person.mobile}</td>
        <td>${person.city}</td>
    `;
    historyBody.appendChild(row);
}
