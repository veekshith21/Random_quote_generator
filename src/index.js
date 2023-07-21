import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const quoteText = document.querySelector("#text");
const quoteBtn = document.querySelector("#new-quote");
const authorName = document.querySelector("#author");
const twitterBtn = document.querySelector("#tweet-quote");
const copyBtn = document.querySelector('#copy');

function randomQuote() {
  quoteBtn.classList.add("loading");
  quoteBtn.innerText = "Loading Quote...";
  fetch("http://api.quotable.io/random")
    .then((response) => response.json())
    .then((result) => {
      quoteText.innerText = result.content;
      authorName.innerText = result.author;
      quoteBtn.classList.remove("loading");
      quoteBtn.innerText = "New Quote";

    });
}

twitterBtn.addEventListener("click", () => {
  let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
  window.open(tweetUrl, "_blank");
});

copyBtn.addEventListener("click", ()=>{
  copyBtn.classList.add("copied");
  copyBtn.innerText = "C";
  navigator.clipboard.writeText(quoteText.innerText);
});

quoteBtn.addEventListener("click", randomQuote);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
