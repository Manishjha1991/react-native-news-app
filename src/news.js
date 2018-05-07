const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=47806c71f5b9469989c8c42441854dc6";

export async function getNews() {
  let result = await fetch(url).then(response => response).then(response => response.json());
  return result.articles;
}