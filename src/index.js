const phrase = document.querySelector(".phrase");
const title = document.querySelector(".title");
const btn = document.querySelector(".btn");
const url = "https://api.adviceslip.com";

async function handleGetPhrase() {
  try {
    const getPhrase = await fetch(`${url}/advice/117`)
      .then((res) => res.json())
      .then((res) => {
        return res;
      });
    title.innerText = `advice #${getPhrase.slip.id}`;
    phrase.innerText = `"${getPhrase.slip.advice}"`;
  } catch (error) {
    console.error(error);
  }
}
handleGetPhrase();

async function handleRandomPhrase() {
  try {
    const randomPhrase = await fetch(`${url}/advice`).then((res) => res.json());

    title.innerText = `advice #${randomPhrase.slip.id}`;
    phrase.innerText = `"${randomPhrase.slip.advice}"`;
  } catch (error) {
    console.error(error);
  }
}

btn.addEventListener("click", handleRandomPhrase);
