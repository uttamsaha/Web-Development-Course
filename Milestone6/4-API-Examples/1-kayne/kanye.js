const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(data => displayQuote(data))
}

// function displayQuotes(quotes){
//     const quotesContainer = document.getElementById('quote');
//         const p = document.createElement('p');
//         p.innerText = quotes.quote;
//         quotesContainer.appendChild(p);
// }

const displayQuote = quotes => {
    // console.log(quote);
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quotes.quote;
}
