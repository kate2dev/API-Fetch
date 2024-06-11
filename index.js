// let p = new Promise((resolve, reject) => {
//     let a = 1 + 2
//     if (a == 2) {
//         resolve('sucess')
//     } else {
//         reject('failed')
//     }
// }
// )

// p.then((message) => {
//     onslotchange.log('This is in the then' + message)
// }).catch((message) => {
//     console.log('This ia in th catch' + message)
// })

const form = document.getElementById("form");

const fetchPokemon = async () => {
  const pokemonName = document.getElementById("input").value;

  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => res.sprites.front_default)
    .catch((err) => console.log("err", err));

  const img = document.createElement("img");
  img.src = data;
  document.body.appendChild(img);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchPokemon();
});
