minhaLista = [1, 2, 3, 4, 5];

console.log(`A primeira variavel eh: ${minhaLista[0]}`);
for (i = 0; i < minhaLista.length; i++) {
  console.log(`O valor do elemento ${i} da minha lista eh ${minhaLista[i]}`);
}

const pokemon = {
  nome: 'cyndaquil',
  stamina: 30,
  defesa: 14,
  ataque: 18,
  habilidade: 'lava burst',
};

console.log('Meu objeto pokemon possui: ');
console.log(`nome: ${pokemon.nome}`);
console.log(`stamina: ${pokemon.stamina}`);
console.log(`defesa: ${pokemon.defesa}`);
console.log(`ataque: ${pokemon.ataque}`);
console.log(`habilidade: ${pokemon.habilidade}`);

let v1 = 4;
let v2 = 15;

console.log(`v1 + v2: ${v1 + v2}`);
console.log(`v1 - v2: ${v1 - v2}`);
console.log(`v1 * v2: ${v1 * v2}`);
console.log(`v1 / v2: ${v1 / v2}`);
console.log(`v1 % v2: ${v1 % v2}`);
console.log(`v1 ** v2: ${v1 ** v2}`);

console.log(`v1 > v2: ${v1 > v2}`);
console.log(`v1 < v2: ${v1 < v2}`);
console.log(`v1 === v2: ${v1 === v2}`);
