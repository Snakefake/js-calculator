var person;
if(confirm("Are you sure?")) {
        person = prompt("Hi, what's your name?");
        personLastName = prompt("What's your LastName?");
        alert("Hello, " + person + personLastName);
    } else
        alert("Person not sure");