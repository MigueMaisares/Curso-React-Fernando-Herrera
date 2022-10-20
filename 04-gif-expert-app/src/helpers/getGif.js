export let getGif = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=lLw4g3KPclmBHeq0pd0ICB9MvpMC2LLB&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    img: img.images.downsized_medium.url,
  }));

  return gifs;
};
