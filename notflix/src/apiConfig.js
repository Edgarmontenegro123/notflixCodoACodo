import axios from 'axios';

const apiKey = '?api_key=5fb4f9c2df2238897ac45fc16e8e5513';

export const tmdb = {
  urlBase: 'https://api.themoviedb.org/3',
  apiKey: apiKey,
  entity: {
    topRatedMovies: '/movie/top_rated',
    topRatedTv: '/tv/top_rated',
    popularMovies: '/movie/popular',
    popularTv: '/tv/popular',
    movieById: '/movie/',
    tvById: '/tv/',
  },
  language: {
    en: '&language=en-US',
    es: '&language=es-ES',
  },
  pagination: '&page=',
  imageUrl: 'https://image.tmdb.org/t/p',
  quality: {
    posterSmall: '/w200',
    posterMedium: '/w300',
    posterLarge: '/w500',
    backdropSmall: '/w300',
    backdropMedium: '/w780',
    backdropLarge: '/w1280',
  }
}

export const apiQuality = {
  posterSmall: 'posterSmall',
  posterMedium: 'posterMedium',
  posterLarge: 'posterLarge',
  backdropSmall: 'backdropSmall',
  backdropMedium: 'backdropMedium',
  backdropLarge: 'backdropLarge',
}

export const apiEntity = {
  topRatedMovies: 'topRatedMovies',
  topRatedTv: 'topRatedTv',
  popularMovies: 'popularMovies',
  popularTv: 'popularTv',
  movieById: 'movieById',
  tvById: 'tvById',
}

export const apiLanguage = {
  english: 'en',
  spanish: 'es'
}

export const apiBuilder = {
  tryGet: async (entity, lang = 'es', page = 1) => {
    const url = `${tmdb.urlBase}${tmdb.entity[entity]}${tmdb.apiKey}${tmdb.language[lang]}${tmdb.pagination}${page}`
    try {
      const res = await axios (url)
      return res
    }
    catch (error) {
      return error
    }
  }
}

export const tryGetById = async (entity, id, lang = 'es') => {
  const url = `${tmdb.urlBase}${tmdb.entity[entity]}/${id}${tmdb.apiKey}${tmdb.language[lang]}`
  try {
    const res = await axios (url)
    return res
  }
  catch (error) {
    return error
  }
}