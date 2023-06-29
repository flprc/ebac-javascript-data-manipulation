import smartphones from './smartphones.js'

// Filtra meses
const filteredSmartphones = smartphones.filter( (smartphones)=> {
    return smartphones.ano === 2023
})

console.log(filteredSmartphones)

let toPrint = ''

// Lista meses
filteredSmartphones.forEach(smartphones => {
   toPrint += smartphones.smartphones + ', '
});


// Map - funções em arrays de retorno individual (cada valor array)

//Usando a função map para obter uma nova array com os modelos dos smartphones
let modelosSmartphones = smartphones.map(function(smartphone) {
    return smartphone.modelo;
  });
  
  console.log(modelosSmartphones);

// Reduce - função com todos os itens do array e devolve um valor único

//Usando a função reduce para obter o valor médio dos smartphones
let valorTotal = smartphones.reduce(function(acumulador, smartphone) {
    let valorMedioFloat = parseFloat(smartphone.valorMedio.replace('R$ ', '').replace(',', '.'));
    return acumulador + valorMedioFloat;
  }, 0);
  
  console.log(valorTotal);

document.getElementById('main').innerHTML = 
    toPrint + '<br> Modelos selecionados: ' 
    + modelosSmartphones.modelo + '<br> Valor total dos modelos: '  
    + valorTotal + ' '
