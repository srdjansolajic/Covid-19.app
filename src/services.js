import axios from 'axios'

export const getAll = () => {
    return axios.get('https://api.covid19api.com/summary');
}

export const getFlag = () => {
    return axios.get('https://restcountries.eu/rest/v2/all');
}

export const getCountriesByRegion = (region) => {
    return axios.get(`https://restcountries.eu/rest/v2/region/${region}`)
}
