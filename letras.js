
const letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

export function generarLetraRandom() {
    let random = Math.floor(Math.random() * letras.length);
    return letras[random]; // Retorna la letra aleatoria
}


