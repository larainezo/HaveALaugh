//Sun icons created by DinosoftLabs - Flaticon
let jokeElement = document.querySelector("#joke");
let punchlineElement = document.querySelector("#punchline");

let api_url = "https://official-joke-api.appspot.com/random_joke";

fetch(api_url)
  .then((res) => res.json())
  .then((data) => {
    if (data.setup && data.punchline) {
      jokeElement.innerHTML = `"${data.setup}"`;
      punchlineElement.innerHTML = `${data.punchline}`;
    } else {
      jokeElement.innerHTML = "No joke available at the moment.";
      punchlineElement.innerHTML = "";
    }
  })
  .catch((error) => {
    console.error("Error fetching joke:", error);
    jokeElement.innerHTML = "Failed to load joke.";
    punchlineElement.innerHTML = "";
  });

jokeElement.addEventListener("click", () => {
    punchlineElement.style.display = "block"; // Make the punchline visible
});

const backgrounds = [
  'url("background1.png")',
  'url("background2.png")',
  'url("background3.png")',
];

const randomIndex = Math.floor(Math.random() * backgrounds.length);
document.body.style.backgroundImage = backgrounds[randomIndex];

chrome.storage.local.get(["userName"], (result) => {
  const userName = result.userName;

  if (userName) {
    const greetingElement = document.getElementById("greeting");
    if (greetingElement) {
      greetingElement.textContent = `Hey ${userName}!`;
    }
  } else {
    console.log("No username found in storage.");
  }
});
