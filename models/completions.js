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
    "model": "text-davinci-003",
    "prompt": "el sentido de la vida es",
    temperature: 0.4,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0
  });
  return response;
}

async function openapiCode() {
  const response = await openai.createCompletion({
    "model": "gpt-3.5-turbo",
    "prompt": "crea un hola mundo en javascript",
    temperature: 0,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0
  });
  return response;
}


async function openapiImages(prop) {
  const response = await openai.createImage({
    "prompt": prop,
    n: 1,
    size: '1024x1024'
  });
  return response;
}

module.exports = {
  completion : openapi,
  generateCode: openapiCode,
  generateImages: openapiImages
}
