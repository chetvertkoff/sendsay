export const writeResHistory = (req, isErr) => {
  const fullReq = {...req, isErr};
  const history = JSON.parse(localStorage.getItem('reqItems')) || [];

  if(history?.length >= 15) return false;

  history.push(fullReq);

  const uniqueArr = [...new Set(history.map(el=>JSON.stringify(el)))];
  const parseHistory = uniqueArr.map(el=>JSON.parse(el));

  localStorage.setItem('reqItems', JSON.stringify(parseHistory));
  return parseHistory;
}