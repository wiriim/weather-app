const API_KEY = 'hxxM8aHylXcyUd0OBDuHNKkFGpphSLZP';
const ENDPOINT = 'https://api.giphy.com/v1/gifs/translate';

export async function getGifUrl(string) {
  try {
    const uri = `?api_key=${API_KEY}&s=${string}`;
    const response = await fetch(ENDPOINT + uri);
    const json = await response.json();
    return json.data.images.original.url;
  } catch (error) {
    console.error(error);
  }
}