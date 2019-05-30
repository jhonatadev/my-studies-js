const notas = [2.4, 6.7, 4.5, 7.5, 8.9, 3.5, 9.0]

// Sem Callback
const notasBaixas1 = []
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas1.push(notas[i])
  }
}
console.log(notasBaixas1)

// Com Callback
const notasBaixas2 = notas.filter(function (nota) {
  return nota < 7
})
console.log(notasBaixas2)


const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3)

