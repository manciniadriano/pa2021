function loadJson(url) {
    return fetch(url)
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      });
  }
  
  loadJson('no-such-user.json')
    .catch(alert); // Error: 404


    async function loadJson(url) { // (1) La funzione loadJson diventa async.
        let response = await fetch(url); // (2) Tutti i .then interni sono sostituiti con await.
      
        if (response.status == 200) {
          let json = await response.json(); // (3) Possiamo ritornare response.json() invece di aspettarlo (awaiting for it)
          return json;
        }
      
        throw new Error(response.status);
      }
      
      loadJson('no-such-user.json')
        .catch(alert); // Error: 404 (4) L’errore sollevato da loadJson è gestito da .catch. Non possiamo usare await loadJson(…) qui, perchè non siamo in una funzione async