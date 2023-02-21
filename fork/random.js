/* function numrandom(cant) {
    const numeros = [];
    for (let i = 0; i < cant; i++) {
      numeros[i] = Math.floor(Math.random() * 1000) + 1;
    }
    let numvisitas = numeros.reduce((valorAnterior, valorActual) => {
      return (valorAnterior[valorActual] ? ++valorAnterior[valorActual] : (valorAnterior[valorActual] = 1), valorAnterior);
    }, {})
    return numvisitas;
  }

  process.on('exit', () => {
    console.log('hilo terminado: ' + process.pid)
})

  process.on("message", (msg) => {
      console.log(msg)
    if (msg.result == "start") {
      console.log(msg.result);
      process.send(numrandom(msg.cant));
      process.exit();
    }
  });
  
  process.send("listo")
   */

  function numrandom(cant) {
    const numeros = [];
    for (let i = 0; i < cant; i++) {
      numeros[i] = Math.floor(Math.random() * 1000) + 1;
    }
    let numvisitas = numeros.reduce((valorAnterior, valorActual) => {
      return (valorAnterior[valorActual] ? ++valorAnterior[valorActual] : (valorAnterior[valorActual] = 1), valorAnterior);
    }, {})
    return numvisitas;
  }

  process.on("exit", ()=> console.log('hilo terminado: ' + process.pid));
  
  process.on("message", (mensaje) => {
      console.log(mensaje)
    if (mensaje.msg == "start") {
      console.log(mensaje.msg);
      process.send(numrandom(mensaje.cantidad));
      process.exit();
    }
  });
  
  process.send("listo")
  