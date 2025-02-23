const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
    { name: "Spirited Away", durationInMinutes: 80 },
    { name: "The Matrix", durationInMinutes: 136 },
    { name: "Amélie", durationInMinutes: 110 },
    { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 }
];


const pequeñas = [];
const medianas = [];
const grandes = [];

for (const movie of movies) {

    if (movie.durationInMinutes >= 200) {
        grandes.push(movie.name);
    } else if (movie.durationInMinutes >= 100) {
        medianas.push(movie.name);
    } else {
        pequeñas.push(movie.name);
    }
}


console.log('Películas cortas:', pequeñas.join(', '));
console.log('Películas medianas:', medianas.join(', '));
console.log('Películas largas:', grandes.join(', '));