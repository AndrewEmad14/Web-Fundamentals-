var username = "";
do {
  username = prompt("Enter Your name");
} while (!username || isFinite(username));
var birthYear = 1;
do {
  birthYear = prompt("Enter your birthYear");
} while (
  !birthYear ||
  isNaN(birthYear) ||
  parseInt(birthYear) < 1 ||
  parseInt(birthYear) >= 2010
);
var currentYear = 2010;
var age = currentYear - parseInt(birthYear);
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
                        Birth year:
                    </u>
                </strong>
                <span>
                    ${birthYear}
                </span>
                <br>
                <strong>
                    <u> 
                        Age:
                    </u>
                </strong>
                <span>
                    ${age}
                </span>
                <br>
                `);
