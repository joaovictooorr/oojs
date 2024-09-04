function Veiculo(marca,modelo,ano){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}

function Moto(marca,modelo,ano){
    Veiculo.call(this,marca,modelo,ano)
}

function Carro(marca,modelo,ano){
    Veiculo.call(this,marca,modelo,ano)
}

const moto1 = new Moto('honda','cg150', 2024)
const moto2 = new Moto('yamaha', 'fazer150', 2024)

const carro1 = new Carro('ford', 'fiesta', 2023)
const carro2 = new Carro('fiat', 'uno', 2024)

console.log(moto1)
console.log(moto2)
console.log(carro1)
console.log(carro2)