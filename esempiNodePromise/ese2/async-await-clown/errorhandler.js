function yayOrNay() {
    return new Promise((resolve, reject) => {
      const val = Math.round(Math.random() * 1); // 0 or 1, at random
  
      val ? resolve('Lucky!!') : reject('Nope 😠');
    });
  }
  
  async function msg() {
    try {
      const msg = await yayOrNay();
      console.log(msg);
    } catch(err) {
      console.log(err);
    }
  }
  
  msg(); // Lucky!!
  msg(); // Lucky!!
  msg(); // Lucky!!
  msg(); // Nope 😠
  msg(); // Lucky!!
  msg(); // Nope 😠
  msg(); // Nope 😠
  msg(); // Nope 😠
  msg(); // Nope 😠
  msg(); // Lucky!!

  async function msg() {
    try {
      const msg = await yayOrNay();
      console.log(msg);
    } catch(err) {
      console.log(err);
    }
  }
  
  async function msg() {
    const msg = await yayOrNay();
    console.log(msg);
  }
  
  msg().catch(x => console.log(x));