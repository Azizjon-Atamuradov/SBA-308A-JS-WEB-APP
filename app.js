
const date = document.getElementById('date');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const tempImg = document.getElementById('tempImg');
const description = document.getElementById('description');
const tempMax = document.getElementById('tempMax');
const tempMin = document.getElementById('tempMin');


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


let dateObj = new Date();
let month = months[dateObj.getUTCMonth()]; //// method returns month (from 0 to 11)
let day = dateObj.getUTCDate() ; //// returns the day of the month (from 1-31)
let year = dateObj.getUTCFullYear();


date.innerHTML = `${month} ${day}, ${year}`;




