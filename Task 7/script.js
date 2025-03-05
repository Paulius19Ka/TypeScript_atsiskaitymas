"use strict";
const ENDPOINT = 'NBA.json';
fetch(ENDPOINT)
    .then(res => res.json())
    .then((data) => {
    console.log(data);
    console.log(data.teams[0]);
});
