async function fetchCharacterData(url) {
  const res = await fetch(url);
  res
    .json()
    .then(res => {
      res = res[0];
      console.log(res);
    })
    .catch(err => console.log(err));
}

// export const fetchCharacterSearch() {
//   fetch(`https://www.breakingbadapi.com/api/character/?name=${name}`)
//   .then(res => res.json())

// }

module.exports = {
  fetchCharacterData: fetchCharacterData
};
