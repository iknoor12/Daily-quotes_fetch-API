const btn = document.querySelector('button');
const quoteDiv = document.querySelector('.quote-div');


let i = 1; // start from first quote
let allQuotes = [];

btn.addEventListener('click', fetchData);

async function fetchData(){
    quoteDiv.textContent = 'Loading..';
    
    try{
        if (allQuotes.length === 0) {
            const response = await fetch("https://dummyjson.com/quotes");
            const data = await response.json();
            allQuotes = data.quotes;
        }

        // Show current quote
        quoteDiv.innerText = allQuotes[i].quote;

        // Move to next quote, loop back if needed
        i = (i + 1) % allQuotes.length;

        
    } catch(error) {
        quoteDiv.textContent = 'Oops! Something went wrong.';
        console.error(error);
    }
}
