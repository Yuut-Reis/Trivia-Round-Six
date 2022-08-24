function playerStorage(name, img, score) {
  const bejeto = { name, img, score };

  if (localStorage.player) {
    const itemLocal = localStorage.getItem('player');
    let parseLocal = JSON.parse(itemLocal);
    parseLocal.forEach((element) => {
      if (element.name === bejeto.name) {
        parseLocal = itemLocal;
      } else {
        const newLocal = [...parseLocal, itemLocal];
        const stringLocal = JSON.stringify(newLocal);
        return localStorage.setItem('player', stringLocal);
      }
    });
  }
  const stringLocal = JSON.stringify([bejeto]);
  console.log(bejeto);
  localStorage.setItem('player', stringLocal);
}

export default playerStorage;
