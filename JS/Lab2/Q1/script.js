// const VALID_NUMBERS = {
//   ORANGE: "012",
//   VODAFONE: "010",
//   ETISLAT: "011",
// };

//user name
var isRunning = true;
var username = "";
while (isRunning) {
  username = prompt("Enter Your name");
  if (!username) {
    alert("YOU CANT ENTER AN EMPTY NAME");
  } else if (isFinite(username)) {
    alert("NAME MUST CONTAIN ONLY LETTERS");
  } else {
    isRunning = false;
  }
}

//phone number
isRunning = true;
var phoneNumber = "";
while (isRunning) {
  phoneNumber = prompt("Enter your phone number");
  if (!phoneNumber) {
    alert("YOU CANT ENTER AN EMPTY Number");
  } else if (isNaN(phoneNumber)) {
    alert("PHONE NUMBER MUST CONTAIN ONLY NUMBERS");
  } else if (phoneNumber.length != 8) {
    alert("PHONE NUMBER MUST HAVE EXCATLY 8 NUMBERS");
  } else if (parseInt(phoneNumber) < 0) {
    alert("YOU CANT HAVE NEGATIVE NUMBERS");
  } else {
    isRunning = false;
  }
}

//mobile number
isRunning = true;
var mobileNumber = "";
while (isRunning) {
  mobileNumber = prompt("Enter your mobile number");
  if (!mobileNumber) {
    alert("YOU CANT ENTER AN EMPTY Number");
  } else if (isNaN(mobileNumber)) {
    alert("MOBILE NUMBER MUST CONTAIN ONLY NUMBERS");
  } else if (mobileNumber.length != 11) {
    alert("MOBILE NUMBER MUST HAVE EXCATLY 11 NUMBERS");
  } else if (
    !mobileNumber.startsWith("010") &&
    !mobileNumber.startsWith("011") &&
    !mobileNumber.startsWith("012")
  ) {
    alert("MOBILE MUST START WITH EITHER 010,011,012");
  } else {
    isRunning = false;
  }
}

//email
isRunning = true;
var email = "";
var emailRegex = /[\w.-]+@([\w-]+\.)+[\w-]{2,4}/;
while (isRunning) {
  email = prompt("Enter Your Email");
  if (email.match(emailRegex)) {
    isRunning = false;
  } else {
    alert("WRONG EMAIL FORMAT");
  }
}

document.write(`<strong>
                    <u> 
                        Name:
                    </u>
                </strong>
                <span>
                    ${username}
                </span>
                <br>
                <strong>
                    <u> 
                        Phone Number:
                    </u>
                </strong>
                <span>
                    ${phoneNumber}
                </span>
                <br>
                <strong>
                    <u> 
                        Mobile Number:
                    </u>
                </strong>
                <span>
                    ${mobileNumber}
                </span>
                <br>
                <strong>
                    <u> 
                        email:
                    </u>
                </strong>
                <span>
                    ${email}
                </span>
                <br>
                `);
