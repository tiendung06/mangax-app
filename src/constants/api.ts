const domain = "https://api.jikan.moe/v4";
const anime = `${domain}/anime`;
const manga = `${domain}/manga`;
const characters = `${domain}/characters`;
const recommendations = `${domain}/recommendations`;
const season = `${domain}/seasons`;
const top = `${domain}/top`;

const LIMIT = 24;

export const jikanAPI = {
  //Anime
  getListAnime: (page = 1, query = "") =>
    `${anime}?page=${page}&limit=${LIMIT}&q=${query}`,
  getAnimeSearch: (filter: string) => `${anime}?q=${filter}$limit=${LIMIT}`,
  getAnimeById: (id: number) => `${anime}/${id}`,
  getAnimeCharacters: (id: number) => `${anime}/${id}/characters`,
  getAnimeVideos: (id: number) => `${anime}/${id}/videos`,
  getAnimeEpisodes: (id: number) => `${anime}/${id}/episodes`,
  getAnimeVideosEpisodes: (id: number, page = 1) =>
    `${anime}/${id}/videos/episodes?page=${page}`,
  getAnimePictures: (id: number) => `${anime}/${id}/pictures`,
  getAnimeRecommendations: (id: number) => `${anime}/${id}/recommendations`,
  getAnimeReviews: (id: number, page = 1) =>
    `${anime}/${id}/reviews?page=${page}`,
  //Manga
  getListManga: (page = 1) => `${manga}?page=${page}&limit=${LIMIT}`,
  getMangaSearch: (filter: string) => `${manga}?q=${filter}$limit=${LIMIT}`,
  getMangaById: (id: number) => `${manga}/${id}`,
  getMangaCharacters: (id: number) => `${manga}/${id}/characters`,
  getMangaPictures: (id: number) => `${manga}/${id}/pictures`,
  getMangaRecommendations: (id: number) => `${manga}/${id}/recommendations`,
  getMangaReviews: (id: number) => `${manga}/${id}/reviews`,
  //Characters
  getListCharacters: (page = 1) => `${characters}?page=${page}&limit=${LIMIT}`,
  getCharacterById: (id: number) => `${characters}/${id}`,
  getCharacterAnime: (id: number) => `${characters}/${id}/anime`,
  getCharacterVoiceActors: (id: number) => `${characters}/${id}/voices`,
  getCharacterPictures: (id: number) => `${characters}/${id}/pictures`,
  //Recommendations
  getRecentAnimeRecommendations: (page = 1) =>
    `${recommendations}/anime?page=${page}`,
  getRecentMangaRecommendations: (page = 1) =>
    `${recommendations}/manga?page=${page}`,
  //Season
  getSeasonNow: (page = 1) => `${season}/now?page=${page}&limit=${LIMIT}`,
  //Top
  getTopAnime: (page = 1) => `${top}/anime?page=${page}&limit=${LIMIT}`,
  getTopManga: (page = 1) => `${top}/manga?page=${page}&limit=${LIMIT}`,
};
