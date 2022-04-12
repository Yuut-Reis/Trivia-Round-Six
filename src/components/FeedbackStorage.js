function creatLocal() {
  return localStorage.getItem('player') ? localStorage.getItem('player') : [];
}

export function playerStorage(assertions, score) {
  const storage = creatLocal();
  const bejeto = { assertions, score };

  if (typeof storage === 'object') {
    const pushStorage = JSON.stringify(storage.push(bejeto));
    return localStorage.setItem('player', pushStorage);
  }
  const parseStorage = JSON.parse(storage);
  const pushStorage = JSON.stringify(parseStorage.push(bejeto));
  localStorage.setItem('player', pushStorage);
}

export default creatLocal;
