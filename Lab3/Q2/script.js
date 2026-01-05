function putInHtmlTable(userName,age){
  //get the  table body
  var tableBody = document.getElementById("tableBody");

  //create a row
  var tableRow = document.createElement("tr");
  //user name
  var userNameCell = document.createElement("td");
  userNameCell.textContent = userName;
  var ageCell = document.createElement("td")
  ageCell.textContent = age

  tableRow.append(userNameCell);
  tableRow.append(ageCell);
  tableBody.append(tableRow);
}


// number of people

var isRunning = true;
var number = "";
while (isRunning) {
  number = prompt(`Enter the number of persons: `);
  if (!number) {
    alert("YOU CANT ENTER AN EMPTY NUMBER");
  } else if (isNaN(number)) {
    alert("NUMBER MUST CONTAIN ONLY NUMBERS");
  } else {
    isRunning = false;
  }
}
//people entery
var number = parseInt(number);
for(var i=0;i<number;i++){
  //user name

  var userName = "";
  isRunning = true;
  while (isRunning) {
    userName = prompt("Enter Your name");
    if (!userName.match(/^[a-zA-Z]{3,10}$/)) {
      alert("WRONG USERNAME FORMAT");
    } else {
      isRunning = false;
    }
  }

  //age

  var age = "";
  isRunning=true;
  while (isRunning) {
    age = prompt("Enter the age : ");
    if (!age) {
      alert("YOU CANT ENTER AN EMPTY NUMBER");
    } else if (isNaN(age)) {
      alert("NUMBER MUST CONTAIN ONLY NUMBERS");
    }else if(parseInt(age)<10 || parseInt(age)>60){
      alert("AGE MUST BE MORE THAN AND LESS THAN 10"); 
    } else {
      isRunning = false;
    }
  }
  putInHtmlTable(userName,age)
}




