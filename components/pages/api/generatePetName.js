// pages/api/generatePetName.js

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const response = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: "Generate a unique and creative pet name.",
      max_tokens: 10,
    });
    const petName = response.data.choices[0].text.trim();
    res.status(200).json({ petName });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
