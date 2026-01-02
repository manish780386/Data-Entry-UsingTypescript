interface Person {
    name: string;
    age: number;
    mobile: number;
    city: string;
}

// Elements
const nameInput = document.getElementById("name")! as HTMLInputElement;
const ageInput = document.getElementById("age")! as HTMLInputElement;
const mobileInput = document.getElementById("mobile")! as HTMLInputElement;
const cityInput = document.getElementById("city")! as HTMLInputElement;
const saveBtn = document.getElementById("saveBtn")! as HTMLButtonElement;
const historyBody = document.querySelector("#historyTable tbody")! as HTMLTableSectionElement;

// Store data (RENAMED)
let people: Person[] = [];

saveBtn.onclick = () => {
    const person: Person = {
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

function addToTable(person: Person) {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${person.name}</td>
        <td>${person.age}</td>
        <td>${person.mobile}</td>
        <td>${person.city}</td>
    `;

    historyBody.appendChild(row);
}
