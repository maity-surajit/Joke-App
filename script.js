// Language state
let currentLanguage = "english";

// API endpoints
const APIs = {
  english: "https://icanhazdadjoke.com/slack",
  hindi: "https://hindi-jokes-api-rm0c.onrender.com/jokes",
};

// Function to fetch jokes based on selected language
function fetchJoke() {
  const jokeElement = document.getElementById("joke");
  const button = document.getElementById("newJokeBtn");

  // Disable button and show loading state
  button.disabled = true;
  jokeElement.innerText = "Loading...";

  const apiUrl = APIs[currentLanguage];

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      let joke;

      // Handle different API response structures
      if (currentLanguage === "english") {
        joke = data.attachments[0].text;
      } else if (currentLanguage === "hindi") {
        joke = data.data[0].jokeContent;
      }

      jokeElement.innerText = joke;
    })
    .catch((error) => {
      jokeElement.innerText = "Failed to load joke. Try again!";
    })
    .finally(() => {
      // Re-enable button after request completes
      button.disabled = false;
    });
}

// Function to switch language
function switchLanguage(language) {
  currentLanguage = language;

  // Update button states
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  if (language === "english") {
    document.getElementById("englishBtn").classList.add("active");
  } else if (language === "hindi") {
    document.getElementById("hindiBtn").classList.add("active");
  }

  // Fetch new joke in selected language
  fetchJoke();
}

// Initialize the extension
document.addEventListener("DOMContentLoaded", function () {
  // Load initial joke
  fetchJoke();

  // Add event listeners for language toggle buttons
  document.getElementById("englishBtn").addEventListener("click", () => {
    switchLanguage("english");
  });

  document.getElementById("hindiBtn").addEventListener("click", () => {
    switchLanguage("hindi");
  });

  // Add event listener for new joke button
  document.getElementById("newJokeBtn").addEventListener("click", fetchJoke);
});
