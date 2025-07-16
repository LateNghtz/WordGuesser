const apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export async function fetchDefinition(word) {
  console.log("test")
  try {
    const response = await fetch(`${apiUrl}${word}`);
    if (!response.ok) throw new Error('Word not found');
    if (input.value.trim() === "") {
      console.warn("No word entered.");
      return;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API error:', error.message);
    throw error;
  }
}

// //Testing

// async function run() {
//   const definition = await fetchDefinition("");
//   console.log(definition);  // Now you will see the resolved result
// }

// run();
