const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()
// console.log(process.env)
const configuration = new Configuration({
  organization: 'org-TJnBIUOuNacZrpszyPH1mlDL',
  apiKey: process.env.OPENAI_API_KEY,
});

console.log(process.env.OPENAI_API_KEY)
const openai = new OpenAIApi(configuration);
async function openapi() {
  const response = await openai.createCompletion({
    "model": "code-davinci-002",
    "prompt": "quiero un holamundo en python",
    temperature: 0.4,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0
  });
  return response;
}

module.exports = {
  completion : openapi
}
