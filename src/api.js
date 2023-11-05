import axios from "axios";

const http = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTM4YmU4ODJmYjUzOGI4MmQyNzU1NDgxN2MyYTdmMCIsInN1YiI6IjY1MzhmMzgyMGZiMTdmMDBmZWIxMGI2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G8FUBigZ1a4p2Vd9-4WEoNljTmOfrizufYq9zcXMSaI",
  },
};

export const api = {
  getMovies: async (category) => {
    let response = await http.get(`${category}`, options);
    return response.data;
  },

  imgw500: (src) => `https://image.tmdb.org/t/p/w500/${src}`,
  imgoriginal: (src) => `https://image.tmdb.org/t/p/original/${src}`,
};
