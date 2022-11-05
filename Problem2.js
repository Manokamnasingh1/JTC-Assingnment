//Person class to generate ticket
class Person {
  constructor(age) {
    this.ticket = this.generateTicket(age);
  }

  generateTicket(age) {
    switch (true) {
      case age <= 2:
        return { age: age, price: 0 };
      case age > 2 && age < 18:
        return { age: age, price: 100 };
      case age >= 18 && age < 60:
        return { age: age, price: 500 };
      case age >= 60:
        return { age: age, price: 300 };
    }
  }
}

//initializing ticket and total price
var ticket = {};
var total = 0;

//setting readlines for input
rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

//function to take input
function question(theQuestion) {
  return new Promise((resolve) =>
    rl.question(theQuestion, (answ) => resolve(answ))
  );
}

//async function to take modultiple input
async function askQuestions() {
    
  //total no. of guests
  var guests = await question("Enter Number of guests: ");

  //iterating to get age of all guest
  for (let index = 0; index < guests; index++) {
    var age = await question(`Enter age of guest${index + 1}: `);

    //creating a new person object for age
    var a = new Person(Number(age));

    //setting ticket for newly created object/person
    ticket["guest" + (index + 1)] = a.ticket;
    //total counter
    total = total + a.ticket.price;
  }

  //displaying ticket
  console.log("");
  console.log("----------Ticket----------");
  console.table(ticket);
  console.log(`----- Total = RS${total} -------`);
  rl.close();
}

askQuestions();
