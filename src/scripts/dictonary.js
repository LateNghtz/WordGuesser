const apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

async function fetchDefinition(word) {
  try {
    const response = await fetch(`${apiUrl}${word}`);
    if (!response.ok) throw new Error('Word not found');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API error:', error.message);
    throw error;
  }
}

//Testing

async function run() {
  const definition = await fetchDefinition("");
  console.log(definition);  // Now you will see the resolved result
}

run();
