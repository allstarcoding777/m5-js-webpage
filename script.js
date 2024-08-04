// Create a simple object literal for a fictional dog
const myDog = {
    name: "Astro",
    show: "The Jetsons",
    breed: "Great Dane",
    description: "I was the family dog in a cartoon about a family in the future.",
    mySound: "I sound very intimidating because of my size"
};

// Display the dog's information in the HTML
document.addEventListener("DOMContentLoaded", function() {
    // Get the div where we will show the information
    const outputDiv = document.getElementById('output');
    
    // Create a message with the dog's information
    let message = `Hello, my name is ${myDog.name}. I starred in the TV show ${myDog.show}. My character was a ${myDog.breed}. ${myDog.description}`;
    
    // Add the message and sound to the output
    outputDiv.innerHTML = `<p>${message}</p><p>${myDog.mySound}</p>`;
});

// Create a constructor function to make dog objects
function Dog(name, show, breed, description, mySound) {
    this.name = name;
    this.show = show;
    this.breed = breed;
    this.description = description;
    this.mySound = mySound;
    this.canTalk = true; // All dogs created with this constructor will be able to talk

    // Method to create a greeting message
    this.myGreeting = function() {
        return `Hello, my name is ${this.name}. I starred in the TV show ${this.show}. My character was a ${this.breed}. ${this.description}`;
    };
}

// Create a dog object using the constructor function
const myDogConst = new Dog("Astro", "The Jetsons", "Great Dane", "I was the family dog in a cartoon about a family in the future.", "I sound very intimidating because of my size");

// Display the greeting message from the constructor object
document.addEventListener("DOMContentLoaded", function() {
    // Get the div where we will show the greeting
    const outputDiv = document.getElementById('output');
    
    // Add the greeting message to the output
    outputDiv.innerHTML += `<p>${myDogConst.myGreeting()}</p>`;
});
