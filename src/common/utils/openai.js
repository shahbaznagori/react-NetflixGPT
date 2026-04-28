
import config from "./config";
console.log("CONFIG",config.apiKey);

async function NeflixSuggestion (content){
  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${config.apiKey}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    model: "llama-3.1-8b-instant",
    messages: [
      {
        role: "system",
        content: "You are a movie recommendation expert. Suggest movies based on user mood, genre like this ex:Sholay , Dilwale, Gangs of Wasseypur, etc. and make it short and simple. Dont give more that 5 movies at once. Without indexes just by comma separated"
      },
      {
        role: "user",
        content: content
      }
    ]
  })
});

const data = await response.json();

return data.choices[0].message.content

}

export default NeflixSuggestion