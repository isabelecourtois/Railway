/* import { Router } from "express";
import { fork } from "child_process";
import path from 'path'

const random =  Router();

random.get("/randoms/:num?", (req, res) => {
    const cantidad = Number(req.query.num);
    const calculo = fork("./fork/random.js");
    calculo.on("message", result => {
        if(result == "listo") {
          calculo.send({result: "start", cantidad: cantidad});
        } else {
            res.json(JSON.stringify(result));
        }
    })   
});

export default random */

import { Router } from "express";
import { fork } from "child_process";
import path from 'path'

const random =  Router();

random.get("/randoms/:cant?", (req, res) => {
    const cantidad = Number(req.query.cant) || 1000000;
    const calculo = fork("./fork/random.js");
    calculo.on("message", msg => {
        if(msg == "listo") {
          calculo.send({msg: "start", cantidad: cantidad});
        } else {
            res.json(JSON.stringify(msg));
        }
    })   
});

export default random