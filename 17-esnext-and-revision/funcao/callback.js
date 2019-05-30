const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprir)
fabricantes.forEach(fabricante => console.log(fabricante))