let employeePayrollObj = {};
window.addEventListener("DOMContentLoaded", (event) => {
    personList = getEmployeePayrollDataFromStorage();
    personList = JSON.parse(localStorage.getItem("AddressBookList"));
    console.log(personList);
    document.querySelector(".emp-count").textContent = personList.length;
    createInnerHtml();
    localStorage.removeItem("editEmp");
});
const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem("AddressBookList") ? JSON.parse(localStorage.getItem("AddressBookList")) : [];
}
const createInnerHtml = () => {
    const headerHtml = " <th>Full Name</th><th>Address</th><th>State</th><th>City</th>"
        + "<th>Zip Code</th><th>Phone Number</th><th>Actions</th>;";
    if (personList.length == 0) return;
    let innerHtml = `${headerHtml}`;
    for (const addressBook of personList) {
        innerHtml = `${innerHtml}
    <tr>
    <td>${addressBook._name}</td>
    <td>${addressBook._address}</td>
    <td>
        ${addressBook._state}
    </td>
    <td>${addressBook._city}</td>
    <td>${addressBook._zip}</td>
    <td>${addressBook._phoneNumber}</td>
    <td>
        <img id="${addressBook._id}" onclick="remove(this)" alt="delete" src="../Assets/ICons/delete-black-18dp.svg" >
        <a href="AddressBook.html" onclick="update(this)"><img id="${addressBook._id}" onclick="update(this)" alt="edit" src="../Assets/ICons/create-black-18dp.svg" ></a>
    </td>
</tr>
`;
    }
    document.querySelector("#display").innerHTML = innerHtml;
}

const remove = (node) => {
    let personData = personList.find(empData => empData._id == node.id);
    if (!personData) return;
    const index = personList.map(empData => empData._id).indexOf(personData._id);
    personList.splice(index, 1);
    localStorage.setItem("AddressBookList", JSON.stringify(personList));
    document.querySelector(".emp-count").textContent = personList.length;
    createInnerHtml();
}

const update = (node) => {
    let personData = personList.find(empData => empData._id == node.id);
    if (personData) {
        localStorage.setItem('personEdit', JSON.stringify(personData));
        window.location.replace(site_properties.add_AddressBook_Page);
        return;
    } 
    
}