//Ejercicio 1
const personas = [
    { nombre: "Marta", edad: 25 },
    { nombre: "Pedro", edad: 16 },
    { nombre: "Alejandro", edad: 18 },
    { nombre: "Antonio", edad: 31 },
    { nombre: "Laura", edad: 12 },
 ];
 
 const menoresDeEdad = [];
 const mayoresDeEdad = [];
 
 for (let i = 0; i < personas.length; i++) {
    if (personas[i].edad < 18) {
       menoresDeEdad.push(personas[i].nombre);
    } else {
       mayoresDeEdad.push(personas[i].nombre);
    }
 }
 
 console.log("Personas menores de edad:", menoresDeEdad);
 console.log("Personas mayores de edad:", mayoresDeEdad);

 //Ejercicio 2
 const verduras = ["Brócoli", "Calabacín", "Guisantes", "Tomates"];

const comidas = [
   { nombres: "Tofu", vegano: true },
   { nombres: "Pollo", vegano: false },
   { nombres: "Queso", vegano: false },
   { nombres: "Manzana", vegano: true },
   { nombres: "Patata", vegano: true },
   { nombres: "Huevos", vegano: false },
];

for (let i = 0; i < comidas.length; i++) {
   if (!comidas[i].vegano) {
      comidas[i].nombres = verduras[i % verduras.length]; // Asigna una verdura de manera cíclica
   }
}

console.log(comidas);

//Ejercicio 3
const peliculas = [
    { titulo: "El Rey León", minutos: 88 },
    { titulo: "Jurassic Park", minutos: 127 },
    { titulo: "Matrix", minutos: 136 },
    { titulo: "Regreso al Futuro", minutos: 116 },
    { titulo: "Frozen", minutos: 102 },
    { titulo: "Lo que en viento se llevó", minutos: 238 },
 ];
 
 const peliculaCorta = [];
 const peliculaMedia = [];
 const peliculaLarga = [];
 
 for (let i = 0; i < peliculas.length; i++) {
    if (peliculas[i].minutos < 100) {
       peliculaCorta.push(peliculas[i]);
    } else if (peliculas[i].minutos >= 100 && peliculas[i].minutos <= 200) {
       peliculaMedia.push(peliculas[i]);
    } else {
       peliculaLarga.push(peliculas[i]);
    }
 }
 
 console.log("Películas cortas:", peliculaCorta);
 console.log("Películas medias:", peliculaMedia);
 console.log("Películas largas:", peliculaLarga);
 