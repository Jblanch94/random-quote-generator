const quote = document.querySelector('.quote');
const auth = document.querySelector('.author');
const btn = document.querySelector('#quote-btn');

async function getQuote() {
  try {
    const response = await fetch('https://api.quotable.io/random');
    const { content, author } = await response.json();

    const p = quote.querySelector('p');
    const h3 = auth.querySelector('h3');
    h3.innerText = `- ${author}`;
    p.innerText = content;
  } catch (err) {
    console.error(err.message);
  }
}

btn.addEventListener('click', getQuote);
getQuote();
