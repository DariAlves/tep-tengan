// Array de usuários
const usuarios = [];

// Novos usuários
const usuario = {
  id: 1,
  nome: 'Vegeta',
  raca: 'humano',
  poder: 9000,
};

usuarios.push(usuario);

usuarios.push({
  id: 2,
  nome: 'Goku',
  raca: 'Saiyajin',
  poder: 10000,
});

usuarios.push({
  id: 3,
  nome: 'Picollo',
  raca: 'Namekuseijin',
  poder: 6000,
});

const vegeta = `O usuário ${usuarios[0].nome} é da raça ${usuarios[0].raca}.`;
const goku = `O usuário ${usuarios[1].nome} é da raça ${usuarios[1].raca}.`;

console.log(vegeta);
console.log(goku);

// for
for (let i = 0; i < usuarios.length; i++) {
  console.log(`O usuário ${usuarios[i].nome} é da raça ${usuarios[i].raca}.`);
}

console.log('\n\n');

// for...of
for (const usuario of usuarios) {
  console.log(`O usuário ${usuario.nome} é da raça ${usuario.raca}.`);
}

console.log('\n\n');

// forEach
usuarios.forEach(usuario => {
  console.log(`O usuário ${usuario.nome} é da raça ${usuario.raca}.`);
});

console.table(usuarios);

// Filter = array => array
const usuariosFiltrados = usuarios.filter(usuario => usuario.poder > 6000);

console.table(usuariosFiltrados);

// FindIndex
const poderMaior = usuarios.findIndex(usuario => usuario.poder === 7000);

console.log(`Posição do array: ${poderMaior}`);

const alterarRaca = (id, raca) => {
  const usuario = usuarios.find(usuario => usuario.id === id);

  if (usuario === undefined) {
    return `Usuário não encontrado`;
  }

  usuario.raca = raca;

  return usuario;
};

console.log(alterarRaca(1, 'Saiyajin'));

// const deletarUsuarioPeloID = id => {
//   const usuario = usuarios.filter(usuario => usuario.id !== id);

//   return usuario;
// };

// console.table(deletarUsuarioPeloID(2));

// console.table(usuarios);

const deletarUsuarioPeloID = id => {
  const usuario = usuarios.findIndex(usuario => usuario.id === id);

  if (usuario == -1) {
    return `Usuário não encontrado`;
  }

  usuarios.splice(usuario, 1);

  return `Usuário deletado com sucesso!`;
};

console.log(deletarUsuarioPeloID(1));
console.log(deletarUsuarioPeloID(1));
console.log(deletarUsuarioPeloID(1));

console.table(usuarios);
