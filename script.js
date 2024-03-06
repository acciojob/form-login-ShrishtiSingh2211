function getFormvalue() {
    //Write your code here
	var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
	var fullName = firstName + " " + lastName;
    window.alert(fullName);

}
