const next = document.getElementById("next-btn");
const text = document.getElementById("text");
const auth = document.getElementById("auth");
const url = "https://type.fit/api/quotes";

next.addEventListener("click", async () => {
  let response = await fetch(url);
  let quote = await response.json();

  let index = Math.floor(Math.random() * quote.length);
  let newQuoty = quote[index].text;
  let newAuth = quote[index].author;
  text.innerHTML = `<i class="fas fa-quote-left text-danger"></i> ${newQuoty} <i
  class="fas fa-quote-right text-danger"></i>`;
  auth.innerHTML = `${newAuth}`;
});
