// operador ... rest(juntar) / spread(espalhar)
// usar rest parâmetro de função

// usar spread com objeto 

const funcionario = { nome: 'Jeovana', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

// usar spread com array
const grupoA = ['Jeovana', 'Jhonata', 'Gabriel']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela'] 
console.log(grupoFinal)