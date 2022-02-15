import axios from "axios";

export const axiosBase = axios.create({
	baseURL: `${process.env.APP_HOST}:${process.env.JSDB_PORT || 3030}` //https://booklike-heroku.herokuapp.com/ "http://localhost:3030"
})
