class AddressBook {
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex=RegExp("^[A-Z]{1}[a-zA-z]{3,}$")
        if(nameRegex.test(name))
        this._name = name;
        else throw "Nmae is Incorrect!"
    }

    get address() {
        return this._address;
    }
    set address(address) {
        let addressRegex=RegExp("^[A-Z]{1}[a-zA-z]{3,}$")
        if(addressRegex.test(address))
        this._address = address;
        else throw "address is Incorrect!"
    }
    get state() {
        return this._state;
    }
    set state(state) {
        this._state = state;
    }
    get city() {
        return this._city;
    }
    set city(city) {
        this._city = city;
    }
    get zip() {
        return this._zip;
    }
    set zip(zip) {
        this._zip = zip;
    }
    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        let phoneNumberRegex=RegExp("^[6-9]{1}[0-9]{9}$");
        if(phoneNumberRegex.test(phoneNumber))
        this._phoneNumber =phoneNumber;
        else throw "phoneNumber is Incorrect!"
    }
    toString() {
        return "name : " + this.name + ", address : " + this.address + ", state : " + this.state + ", city : " + this.city + ", zip code : " + this.zip + ", phone number : " + this.phoneNumber;
    }
}
const save = () => {
    try {
        let personDetails = createAddressBook();
        createAndUpdateStorage(personDetails);
    }
    catch (exception) {
        return;
    }
}
function createAndUpdateStorage(personDetails) {
    let AddressBook = JSON.parse(localStorage.getItem("AddressBookList"));
  
    if (AddressBook != undefined) {
        AddressBook.push(personDetails);
    }
    else {
        AddressBook = [personDetails];
    }
    alert(AddressBook.toString());
   // localStorage.setItem('personEdit', JSON.stringify(personDetails));
    localStorage.setItem("AddressBookList", JSON.stringify(AddressBook));
   
}
const createAddressBook = () => {
    let addressBook = new AddressBook();
    addressBook.id = createNewEmployeeId();
    addressBook.name = getInputValueById("#name");
    addressBook.address = getInputValueById("#address");
    addressBook.state = getInputValueById("#state");
    addressBook.city = getInputValueById("#city");
    addressBook.zip = getInputValueById("#zip");
    addressBook.phoneNumber = getInputValueById("#phoneNumber");
    return addressBook;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}
const getInputValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
}

const createNewEmployeeId = () => {
    let empID = localStorage.getItem("PersonID");
    empID = !empID ? "1" : (parseInt(empID) + 1).toString();
    localStorage.setItem("PersonID", empID);
    return empID;
}