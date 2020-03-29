const getUsers = () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => console.log(json));
};

export default getUsers;
