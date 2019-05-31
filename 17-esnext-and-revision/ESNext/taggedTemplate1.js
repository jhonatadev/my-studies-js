/// tagged templates = processa o template dentro de uma função
function tag(partes, ...valores) {
  console.log(partes)
  console.log(valores)
  return 'Outra string'
}

const aluno = 'Jeovana'
const situacao = 'Aprovada'
console.log(tag `${aluno} está ${situacao}`)