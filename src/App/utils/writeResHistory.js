const writeResHistory = res => {
  const history = JSON.parse(localStorage.getItem('reqItem')) || [];
  if(!history.length){
    history.push(res);
    localStorage.setItem('reqItem',)
  }
}