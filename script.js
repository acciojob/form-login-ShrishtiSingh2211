function getFormvalue(event) {

//Write your code here

event.preventDefault();

var firstName = document.getElementById(“fname”).value;

var lastName = document.getElementById(“lname”).value;

var fullName = firstName + " " + lastName;

window.alert(fullName);

}

getFormvalue();
