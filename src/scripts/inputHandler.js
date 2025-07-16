import { fetchDefinition } from "./dictionary.js";

window.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("input");
    console.log("log")
  if (!input) {
    console.error("Input element not found");
    return;
  }

  input.addEventListener("keydown", async (event) => {
  if (event.key === "Enter") {
    console.log(`"${input.value}"`);
    try {
      const def = await fetchDefinition(input.value);
      console.log(def);
    } catch (err) {
      console.error("Error fetching definition:", err);
    }
  }
});


});
