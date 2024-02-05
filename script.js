
document.addEventListener("DOMContentLoaded", function () {
    const fullName = "Gursharandeep Singh";
    const body = document.body;

    // Create and append an h1 element for displaying the full name
    const fullNameHeader = createAndAppendElement("h1", fullName, body);
    fullNameHeader.style.textAlign = "center";
    fullNameHeader.style.color = "gray";

    // Create and append input elements for numeric values
    const firstNumericInput = createAndAppendElement("input", "", body, "number", "15vw");
    const secondNumericInput = createAndAppendElement("input", "", body, "number", "15vw");

    // Add styling to the input boxes
    styleInput(firstNumericInput);
    styleInput(secondNumericInput);

    // Create and append a button for calculating the sum of the numeric inputs
    const calculateSumButton = createAndAppendElement("button", "Addition of numbers", body);
    calculateSumButton.style.padding = "1.6vw";
    calculateSumButton.style.margin = "3vw 1.6vw";
    calculateSumButton.style.backgroundColor = "blue";
    calculateSumButton.style.color = "white";
    calculateSumButton.style.cursor = "pointer";
    calculateSumButton.style.border = "none";
    
    // Add event listeners for button hover effects and click action
    calculateSumButton.addEventListener("mouseover", function () {
        calculateSumButton.style.backgroundColor = "#4169e1";
    });

    calculateSumButton.addEventListener("mouseout", function () {
        calculateSumButton.style.backgroundColor = "blue";
    });

    // Arrow function to validate numeric input
    const validateNumericInputArrow = (input) => {
        try {
            const numericValue = parseInt(input.value);
            if (isNaN(numericValue)) {
                throw new Error("Please enter a valid number");
            }
            input.style.border = ""; // Reset border on successful validation
            return true;
        } catch (error) {
            input.style.border = "2px solid red";
            // Display error message on the page
            const errorMessageElement = createAndAppendElement("p", error.message, document.body);
            errorMessageElement.id = "error-message-container";
            return false;
        }
    };

    calculateSumButton.addEventListener("click", () => {
        // Remove previous result element if it exists
        const previousResultElement = document.getElementById("result-container");
        if (previousResultElement) {
            previousResultElement.remove();
        }

        // Remove previous error message element if it exists
        const previousErrorMessageElement = document.getElementById("error-message-container");
        if (previousErrorMessageElement) {
            previousErrorMessageElement.remove();
        }

        const isValidInput =
            validateNumericInputArrow(firstNumericInput) && validateNumericInputArrow(secondNumericInput);

        if (isValidInput) {
            const sumResult = parseInt(firstNumericInput.value) + parseInt(secondNumericInput.value);
            // Create and append a new result element
            const resultElement = createAndAppendElement("p", "Sum of numbers is: " + sumResult, body);
            resultElement.id = "result-container";
        }
    });

    // styling the body
    body.style.fontFamily = "Arial, sans-serif";
    body.style.margin = "2vw";
});

// Utility function to create and append elements
function createAndAppendElement(elementType, textContent, parent, type, width) {
    const element = document.createElement(elementType);
    element.textContent = textContent;

    if (type) {
        element.type = type;
    }

    if (width) {
        element.style.width = width;
    }

    parent.appendChild(element);
    return element;
}

// styling input boxes
function styleInput(input) {
    input.style.padding = "0.7vw";
    input.style.margin = "1vw";
    input.style.border = "2px solid black";
    input.style.borderRadius = "4px";
    input.style.boxSizing = "border-box";
}
