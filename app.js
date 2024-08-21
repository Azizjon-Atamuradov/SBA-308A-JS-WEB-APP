
const date = document.getElementById('date');
const city = document.getElementById('city');
const temp = documnet.getElementById('temp');
const tempImg = document.getElementById('tempImg');
const description = document.getElementById('description');
const tempMax = document.getElementById('tempMax');
const tempMin = documnet.getElementById('tempMin');


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


let dateObj = new Date();
let month = months[date.getUTCMonth()]; //// method returns month (from 0 to 11)

