const superHerois = [
  {
    id: 1,
    nome: 'Peter Parker',
    identidade: 'Spiderman',
    editora: 'Marvel',
  },
  {
    id: 2,
    nome: 'Bruce Banner',
    identidade: 'Hulk',
    editora: 'DC',
  },
  {
    id: 3,
    nome: 'Barry Allen',
    identidade: 'Flash',
    editora: 'DC',
  },
];

// const novoSuperHeroi = {
//   id: 4,
//   nome: 'Bruce Wayne',
//   identidade: 'Batman',
//   editora: 'DC',
// };

// ! Adicionar um novo super herói
// const adicionarNovoSuperHeroi = superheroi => {
//   superHerois.push(superheroi);

//   return 'Novo super herói adicionado';
// };

// console.log(adicionarNovoSuperHeroi(novoSuperHeroi));

// ! Adicionar um novo super herói 2
const adicionarNovoSuperHeroi = (id, nome, identidade, editora) => {
  const superHeroi = {
    id,
    nome,
    identidade,
    editora,
  };

  superHerois.push(superHeroi);

  return superHeroi;
};

adicionarNovoSuperHeroi(4, 'Bruce Wayne', 'Batman', 'DC');

// console.table(superHerois);

// ! Buscar um super herói pelo id
// const buscarSuperHeroiID = id => {
//   const superHeroi = superHerois.find(superheroi => superheroi.id === id);

//   return !superHeroi ? 'Super herói não encontrado' : superHeroi;
//   // if (!superHeroi) {
//   //   return 'Super herói não encontrado';
//   // }

//   // return superHeroi;
// };

// ! Buscar o índice de um super herói pelo id
// const buscarIndiceSuperHeroiID = id => {
//   const indiceSuperHeroi = superHerois.findIndex(
//     superheroi => superheroi.id === id
//   );

//   return indiceSuperHeroi < 0
//     ? 'Id do super herói não encontrado'
//     : `O índice do super herói buscado é ${indiceSuperHeroi}`;
// };

// ! Alterar informação do super herói, buscando pelo id
const alterarEditoraSuperHeroi = (id, editora) => {
  const superHeroi = superHerois.find(superheroi => superheroi.id === id);

  superHeroi.editora = editora;

  return superHeroi;
};

alterarEditoraSuperHeroi(2, 'Marvel');

console.table(superHerois);

// console.log(buscarIndiceSuperHeroiID(5));
