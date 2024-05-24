var quotes = [
    {
        quote: "“Be yourself; everyone else is already taken.”",
        author: "― Oscar Wilde"
    },
    {
        quote: "“So many books, so little time.”",
        author: "― Frank Zappa"
    },
    {
        quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author: "― Albert Einstein"
    },
    {
        quote: "“A room without books is like a body without a soul.”",
        author: "― Marcus Tullius Cicero"
    },
    {
        quote: "“You only live once, but if you do it right, once is enough.”",
        author: "― Mae West"
    }
];

var oldNumber = 1;

function generateQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);

    while (randomNumber == oldNumber) {
        randomNumber = Math.floor(Math.random() * quotes.length);
    }

    oldNumber = randomNumber;

    document.getElementById("quoteOutput").innerText = quotes[randomNumber].quote;
    document.getElementById("authorOutput").innerText = quotes[randomNumber].author;

}

