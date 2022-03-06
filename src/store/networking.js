import axios from "axios";

//TODO - create config file

export const fetchAllPosts = axios.create({
  baseURL: "https://my.api.mockaroo.com/posts",
  headers: { "X-API-Key": "ad43d380" },
});

export const translateText = (fromLanguage, toLanguage) =>
  axios.post(
    `https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=${fromLanguage}&to=${toLanguage}`,
    {},
    {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        "Ocp-Apim-Subscription-Key": "083f98b1ea1e49bcbadc13de4616d9a8",
        "Ocp-Apim-Subscription-Region": "centralus",
      },
    }
  );
