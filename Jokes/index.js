const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

//-----------------Axios
async function translateToAlbanian(text) {
  const apiKey = "AIzaSyDYnbTTm6dm7Sn2j6f0DukHqJHiNnsiKWg"; // Zëvendësojeni me kyçin tuaj të Google Translate API
  const url = "https://translation.googleapis.com/language/translate/v2";

  try {
    const response = await axios.post(url, {
      q: text,
      source: "en",
      target: "sq",
      key: apiKey,
    });

    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error("Gabim gjatë përkthimit:", error.message);
    throw error;
  }
}
//---------------------------------------

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const jokeURL = "https://v2.jokeapi.dev/joke/Any?amount=10";
    const response = await axios.get(jokeURL);
    const jokes = response.data.jokes;

    // Përkthe shakat në shqip dhe ruaj rezultatin në një listë të re
    const translatedJokes = [];
    for (const joke of jokes) {
      if (joke.type === "single") {
        const translatedJoke = await translateToAlbanian(joke.joke);
        translatedJokes.push({ ...joke, joke: translatedJoke });
      } else {
        const translatedSetup = await translateToAlbanian(joke.setup);
        const translatedDelivery = await translateToAlbanian(joke.delivery);
        translatedJokes.push({
          ...joke,
          setup: translatedSetup,
          delivery: translatedDelivery,
        });
      }
    }

    res.render("index", { jokes: translatedJokes });
  } catch (error) {
    console.error("Gabim gjatë marrjes së shakave:", error.message);
    res.status(500).send("Gabim gjatë marrjes së shakave.");
  }
});

app.listen(port, () => {
  console.log(`Serveri është i gatshëm në http://localhost:${port}`);
});
