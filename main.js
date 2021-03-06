const name = "Waldo";
const program = "citaroja";
const group = "Cinta Roja A";
const school = "DEV.F";

const request = require('request');
const axios = require('axios');
const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/';

// ----------------------------------Solucion con request---------------------------------------------
const getAuthorByID = (id) => {
    const URI = 'authors/';
    const ENDPOINT = URL_BASE + URI + id;

    return new Promise((resolve, reject) => {
        request.get(ENDPOINT, (err, response, body) => {
            if (response.statusCode === 200 && !err) {
                const json = JSON.parse(body);
                resolve(json);
            } else {
                reject(response.statusCode);
            }
        });
    });
}


// ------------------------------------Solucion con axios----------------------------------------------
const axiosGetAuthorById = (id) => {
    const URI = 'authors/';
    const ENDPOINT = URL_BASE + URI + id;

    return axios.get(ENDPOINT);
}

axiosGetAuthorById(6411).then(({data}) => console.log(data)).catch((error) => console.log(error))