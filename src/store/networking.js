import axios from "axios";
import * as config from "../config.json";

const { translateAPI, postsAPI } = config;

export const fetchAllPosts = axios.create({
  baseURL: `${postsAPI.baseURL}/${postsAPI.routs.posts}`,
  headers: { "X-API-Key": postsAPI.key },
});

export const translateText = (fromLanguage, toLanguage, body) =>
  axios.post(
    `${translateAPI.baseUrl}/${translateAPI.routs.translate}?api-version=3.0&from=${fromLanguage}&to=${toLanguage}`,
    body,
    {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        "Ocp-Apim-Subscription-Key": translateAPI.key,
        "Ocp-Apim-Subscription-Region": "centralus",
      },
    }
  );
