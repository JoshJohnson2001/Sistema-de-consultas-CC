const { query } = require("express");
const { redirect, get } = require("express/lib/response");
const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
      conn.query('SELECT * FROM Driver', (err, listaA) => {
        if (err) {
          res.json(err);
        }
        else {
          res.render('client_view/Client_List', {
            data: listaA
          });
        }
      });
    });
  };

module.exports = controller;