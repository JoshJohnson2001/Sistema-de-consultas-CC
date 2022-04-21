const { query } = require("express");
const { redirect, get } = require("express/lib/response");

const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM Vehicle', (err, listaA) => {
      if (err) {
        res.json(err);
      }
      else {
        res.render('Vehicle_view/Vehicle_List', {
          data: listaA
        });
      }
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO Vehicle set ?', data, (err, Vehicle) => {
      res.redirect('/vehicle');
    })
  })
};


controller.create = (req, res) => {
  req.getConnection((err, conn) => {
    res.render('Vehicle_view/Vehicle_Create');
  });
};


controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM Vehicle WHERE vehicle_id = ?", [id], (err, rows) => {
      res.render('Vehicle_view/Vehicle_Edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newVehicle = req.body;
  req.getConnection((err, conn) => {
    conn.query('UPDATE Vehicle set ? where vehicle_id = ?', [newVehicle, id], (err, rows) => {
      res.redirect('/vehicle');
    });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM Vehicle WHERE vehicle_id = ?', [id], (err, rows) => {
      res.redirect('/vehicle');
    });
  });
}

module.exports = controller;