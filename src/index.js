const phrarse = document.querySelector(".phrarse");
const title = document.querySelector(".title");
const btn = document.querySelector(".btn");
const url = "https://api.adviceslip.com";

async function handleGetPhrarse() {
  try {
    const getPhrarse = await fetch(`${url}/advice/117`)
      .then((res) => res.json())
      .then((res) => {
        return res;
      });
    title.innerText = `advice #${getPhrarse.slip.id}`;
    phrarse.innerText = `"${getPhrarse.slip.advice}"`;
  } catch (error) {
    console.error(error);
  }
}
handleGetPhrarse();

async function handleRandomPhrarse() {
  try {
    const randomPhrarse = await fetch(`${url}/advice`).then((res) =>
      res.json()
    );

    title.innerText = `advice #${randomPhrarse.slip.id}`;
    phrarse.innerText = `"${randomPhrarse.slip.advice}"`;
  } catch (error) {
    console.error(error);
  }
}

btn.addEventListener("click", handleRandomPhrarse);
