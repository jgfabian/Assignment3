//Assignment 3 Part 1
/* Step 1
var movies = new Array("Jaws", "Zootopia", "The Wrestler", "Casino Royale", "Goldfinger");
console.log(movies);
*/
// Step 2
/* var movies = new Array("Jaws", "Zootopia", "The Wrestler", "Casino Royale", "Goldfinger");
console.log(movies[0]);
*/
/*
// Step 3
var movies = new Array("Jaws", "Zootopia", "The Wrestler", "Casino Royale", "Goldfinger");
movies[2] = "Ben Hur";
console.log(movies);
*/
/*
// Step 4
var movies = new Array("Jaws", "Zootopia", "The Wrestler", "Casino Royale", "Goldfinger");
delete movies[0];
console.log(movies);


// Step 5
var movies = new Array("Jaws", "Zootopia", "The Wrestler", "Casino Royale", "Goldfinger", "Ben Hur", "Moses");
for (var i = 0; i < movies.length; i++) {
	console.log(movies[i]);
}

// Step 6
var movies = new Array("Jaws", "Zootopia", "The Wrestler", "Casino Royale", "Goldfinger", "Ben Hur", "Moses");
for (var index in movies) {
	console.log(movies[index]);
}

// Step 7
var movies = new Array("Jaws", "Zootopia", "The Wrestler", "Casino Royale", "Goldfinger", "Ben Hur", "Moses");
for (var index in movies) {
    movies.sort();
	console.log(movies[index]);
}


// Step 8
var movies = new Array(" ", "Jaws", "Zootopia", "The Wrestler", "Casino Royale", "Goldfinger", "Ben Hur", "Moses", " ");
var leastFavMovies = new Array (" ", "Love Story", "A Star is Born", "Big");
    console.log("Movies I like:")
	for (var index in movies) {
	console.log(movies[index]);
}

console.log("Movies I regret watching:")
for (var index in leastFavMovies) {
	console.log(leastFavMovies[index]);
}


// Step 9
var movies = new Array(" ", "Jaws", "Zootopia", "The Wrestler", "Casino Royale", "Goldfinger", "Ben Hur", "Moses", " ");
var leastFavMovies = new Array (" ", "Love Story", "A Star is Born", "Big");

combined = movies.concat(leastFavMovies);
    for (var index in combined) {
    combined.sort();
        combined.reverse();
	console.log(combined[index]);
    }
*/
/*
// Step 10
var movies = new Array("Jaws", "Zootopia", "The Wrestler", "Casino Royale", "Goldfinger", "Ben Hur", "Moses");
var leastFavMovies = new Array ("Love Story", "A Star is Born", "Big");

combined = movies.concat(leastFavMovies);
lastItem = combined.length;
console.log(combined[lastItem-1]);
 
*/
/*
// Step 11
var movies = new Array("Jaws", "Zootopia", "The Wrestler", "Casino Royale", "Goldfinger", "Ben Hur", "Moses");
var leastFavMovies = new Array("Love Story", "A Star is Born", "Big");

combined = movies.concat(leastFavMovies);

console.log(combined[0]);
*/
/*
 // Step 12
 var movies = new Array("Jaws", "Zootopia", "The Wrestler", "Casino Royale", "A Few Dollars More", "Ben Hur", "Moses");
var leastFavMovies = new Array("Love Story", "A Star is Born", "Big");

var moviesILike = new Array("The Gambler", "The Sting", "Goldfinger");

combined = movies.concat(leastFavMovies);
combined.splice(7, 3, "The Gambler", "The Sting", "Goldfinger");
console.log(combined);
*/


              


 // Step 13
/*
//associative array - associates the two arrays 
var employee1 = [];
employee1["id"] = "4235";
employee1["name"] = "Zak Ruvalcaba";
employee1["title"] = "Web Developer";
employee1["department"] = "Engineering";
employee1["isCurrent"] = true;

var employee2 = [];
employee2["id"] = "1111";
employee2["name"] = "Joe Doaks";
employee2["title"] = "Custodian";
employee2["department"] = "Engineering";
employee2["isCurrent"] = true;

var employee = [employee1, employee2];


console.log(employee[1]["name"]);


 // Step 14

//associative array - associates the two arrays 
var employee1 = [];
employee1["id"] = "4235";
employee1["name"] = "Zak Ruvalcaba";
employee1["title"] = "Web Developer";
employee1["department"] = "Engineering";
employee1["isCurrent"] = true;

var employee2 = [];
employee2["id"] = "1111";
employee2["name"] = "Joe Doaks";
employee2["title"] = "Custodian";
employee2["department"] = "Engineering";
employee2["isCurrent"] = true;

var employee = [employee1, employee2];

for (var i = 0; i < employee.length; i++) {
                console.log(employee[i]["name"]);  //gets all items from loop in employee array that are properties of name
}

 */
 // Step 15
/*
var employee1 = [];
employee1["id"] = "4235";
employee1["name"] = "Zak Ruvalcaba";
employee1["title"] = "Web Developer";
employee1["department"] = "Engineering";
employee1["isCurrent"] = true;

var employee2 = [];
employee2["id"] = "1111";
employee2["name"] = "Joe Doaks";
employee2["title"] = "Custodian";
employee2["department"] = "Engineering";
employee2["isCurrent"] = true;

var employee3 = [];
employee3["id"] = "2222";
employee3["name"] = "Mary Smith";
employee3["title"] = "CFO";
employee3["department"] = "Finance";
employee3["isCurrent"] = false;

var employee = [employee1, employee2, employee3];

for (var i = 0; i < employee.length; i++) 
         
{
        if(employee[i]['isCurrent'] === true);
                   console.log(employee[i]["name"]); 
               
}

 */


// FUNCTIONS
// Step 1
/*
function displayMessage() {
	console.log("Some silly message");
}
displayMessage();
*/


//Step 2
/*
function calculate(a, b) {
    return a % b;
    
}
console.log(calculate(10, 3));
*/

//Step 3  NOT COMPLETE
/*
var employees = ["Joe", "Mary", "Bill", "Fred", "Sally"];

function showEmployee(employees) {
    if (employees <= 0) { return []}
}
*/





// Assignment 3 part 2  change to select
/*
var userChoice = prompt("Please choose Rock, Paper or Sissors").toUpperCase();
if (userChoice == "ROCK") {
   console.log("You chose ROCK");
    }
else if (userChoice == "PAPER") {
    console.log("You chose PAPER");
    }
else if (userChoice == "SISSORS") {
    console.log("You chose SISSORS");
    }
else {
    prompt("You did not chose correctly\nPlease choose Rock, Paper or Sissors").toUpperCase();
}



var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "ROCK";
} 
else if(computerChoice <= 0.67) {
    computerChoice = "PAPER";
} 
else {
    computerChoice = "SISSORS";
}


choice1 = userChoice;
choice2 = computerChoice;

console.log("Computer choose: " + computerChoice);

function compare(choice1, choice2){

if (choice1 === choice2) {
    alert ("It was a tie! Please try again");
   } 

  if (choice1 === "ROCK") {  // user choice
        if (choice2 === "PAPER") {  // computer choice
            return "Paper Wins!";
        } 
      else  {
            return "Rock Wins!";  // rock must win  because all computer can do is choose sissors - it would be a tie otherwise
        } 
       }

    if (choice1 === "PAPER") {  // user choice
        if (choice2 === "ROCK") {    // computer choice
            return "Paper Wins!";
        }  {
            return "Scissors Wins!";  // sissors must win  because all computer can do is choose sissors - it would be a tie otherwise
        }
    }

    if (choice1 === "SISSORS") {  // user choice
        if (choice2 === "ROCK") {  // computer choice
            return "Rock Wins!";
        } else  {
            return "Scissors Wins!";   // sissors must win  because all computer can do is choose paper - it would be a tie otherwise
     
    }
}
    };
        
compare(userChoice,computerChoice);

console.log(compare(choice1,choice2));
*/

/*
// Calculator
var msg;
var firstNumber = prompt("Please enter your first number");
var secondNumber = prompt("Please enter your second number");
var operation = prompt("Please enter the operation - ADD, SUBTRACT, MULTIPLY, DIVIDE").toUpperCase();

function calculate(num1, num2, op) {
    switch (operation) {
        case "ADD":
            alert ("The sum is " + (Number(num1)+Number(num2)));
            break;
        case "SUBTRACT":
            alert ("The difference is " + (Number(num1)-Number(num2)));
            break;
        case "MULTIPLY":
          alert ("The product is " + (Number(num1)*Number(num2)));
            break;
        case "DIVIDE":
          alert ("The quotiant is " + (Number(num1)/Number(num2)));
            break;
        default:
           alert("You need to enter a operation - ADD, SUBTRACT, MULTIPLY, DIVIDE").toUpperCase();
             break;
    }
    }

  calculate(firstNumber, secondNumber, operation);    

*/
// Death by JavaScript - this is a version of the script found on internet
/*

function alpha(str)
{

 return str.split('').sort().join('');

} 

console.log(alpha("webmaster")); 

*/

