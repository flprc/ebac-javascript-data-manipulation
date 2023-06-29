class Animal {
    constructor(especie) {
        this.especie = especie;
    }

    // Faz o animal falar
    falar() {
        console.log(this.especie + ' fala');
    }

    // Faz o animal comer
    comer() {
        console.log(this.especie + ' come');
    }

    // Faz o animal dormir
    dormir() {
        console.log(this.especie + ' dorme');
    }
}

export default class Cachorro extends Animal {
    // Faz o cachorro falar
    falar() {
        console.log(this.especie + ' fala au au au');
    }

    // Faz o cachorro comer
    comer() {
        console.log(this.especie + ' come ração');
    }
}