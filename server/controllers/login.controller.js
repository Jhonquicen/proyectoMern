const Usuario = require("../models/user.model");
const jwt = require('jsonwebtoken');
const secret_key = "Esta es mi llave secreta"; //Debe ser la misma a lo largo de toda nuestra app

const bcrypt = require('bcrypt');


module.exports.login = (req, res) => {
    Usuario.findOne({email: req.body.email})
        .then(user => {
            if(user === null) {
                res.json({error: true, message: "El correo electrónico es incorrecto."});
            } else {
                bcrypt.compare(req.body.password, user.password)
                    .then(passwordValid => {
                        if(passwordValid) {
                            const payload = {
                                _id: user._id
                            }

                            const myJWT = jwt.sign(payload, secret_key);

                            res
                                .cookie("usertoken", myJWT, secret_key, {
                                    httpOnly: true
                                })
                                .json({error: false, message: "Inicio de sesión correcto"})

                        } else {
                            res.json({error: true, message: "La contraseña es incorrecta."});
                        }
                    })
            }
        })
}

module.exports.logout = (req, res) => {
    res.clearCookie('usertoken');
    res.json({message: "Salimos de sesión!"});
}