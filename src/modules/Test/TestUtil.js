export const loadTestData = () => {
  return fetch('http://localhost:3000/data.json')
  .then((res)=> res.json())
  .then((data) => {
    return data;
  })
}
