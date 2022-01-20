const quotes = [
    {
        quotes: "The owl of Minerva spreads its wings Only with the falling of the dusk.",
        author: "Hegel"
    },
    {
        quotes: "One must still have chaso in oneself to be able to give birth to a dancing star.",
        author : "Nietzsche"
    },
    {
        quotes: "The higher a man gets, the smaller he seems to those who cannot fly.",
        author: "Nietzsche"
    },
    {
        quotes: "If you want the present to be different from the past, study the past.",
        author: "Spinoza"
    },
    {
        quotes: "Fear cannot be without hope nor hope without fear.",
        author: "Spinoza"
    },
    {
        quotes: "Those who are believed to be most abject and humble are usually most ambitious and envious.",
        author: "Spinoza"
    },
    {
        quotes: "The endeavor to understand is the first and only basis of virtue.",
        author : "Spinoza"
    },
    {
        quotes: "That which does not kill us makes us stronger.",
        author: "Nietzsche"
    },
    {
        quotes: "Thoughts are the shadows of our feelings - always darker, emptier and simpler.",
        author: "Nietzsche"
    },
    {
        quotes: "Pleasure in the job puts perfection in the work.",
        author : "Aristotle"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes + "\n";
author.innerText = todaysQuote.author;