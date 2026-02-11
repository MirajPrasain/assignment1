async function getRecipe () { 
  const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent";
  const apiKeyInput = document.getElementById('api-key-input').value 
  const apiKey = apiKeyInput.trim()
  const ingredientInput = document.getElementById('ingredients-input').value
  const ingredients = ingredientInput.trim()
  
  
  if (!apiKey) {
    alert('Please Enter API key')
    return
  }

  if (!ingredientInput) { 
    alet('Please Enters Ingredient')
    return 
  }

  const recipeDisplay = document.getElementById('recipe-display')
  recipeDisplay.innerText = "Cooking up something special... 🍲"


  const prompt = `I have these ingredients: ${ingredients}. Please provide a creative recipe name, a list of instructions, and estimated cooking time. Format the output in clean HTML (using <h2> and <li> tags). Return only the inner HTML content. Do not include markdown code blocks, and do not include <html>, <head>, or <body> tags. Start directly with an <h2> tag`;


  fetch(API_URL, { 
    method : "POST", 
    headers: { 
      "Content-Type" : "application/json", 
      "X-google-api-key" : apiKey
    } , 
    body: JSON.stringify({contents:[{parts:[{text:prompt}]}]})

    } 
  ).then(response=> response.json())
  .then( data => 
    recipeDisplay.innerHTML = data.candidates[0].content.parts[0].text
  )
  .catch( (error) => { 
    console.error('Error Occured', error.message)
    recipeDisplay.innerHTML = "Error fetching recipe. Check your API key or connection"
  } ) 

  

// the fetch response that comes back will be in JSON format. use response.json() to parse it into a var called data,
} 

