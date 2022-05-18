let validator = {
    set(obj, prop, value) {
      if (prop === 'age') {
        if (!Number.isInteger(value)) {
          throw new TypeError('The age is not an integer');
        }
        if (value > 200) {
          throw new RangeError('The age seems invalid');
        }
      }
  
      // The default behavior to store the value
      obj[prop] = value;
  
      // Indicate success
      return true;
    }
  };
  
  const person = new Proxy({}, validator);
  
  person.age = 100;
  console.log(person.age); // 100
  person.age = 'young';    // Throws an exception
  person.age = 300;        // Throws an exception