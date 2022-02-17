let person;
if(confirm("Are you sure?")) {
        person = prompt("Hi, what's your name?");
        personLastName = prompt("What's your LastName?");
        alert("Hello, " + person + personLastName + "!" + "How Are You?");
    } else
        alert("Person not sure");