const QUOTE_API_URL = "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/3-javascript/challenges/group_1/data/random-quotes.json";

export function fetchQuotes() {
  return fetch(QUOTE_API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao buscar citações");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Erro na requisição:", error);
      return [];
    });
}
