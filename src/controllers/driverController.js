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
        res.render('Driver_view/Driver_List', {
          data: listaA
        });
      }
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO Driver set ?', data, (err, Driver) => {
      res.redirect('/driver');
    })
  })
};


controller.create = (req, res) => {
  req.getConnection((err, conn) => {
    res.render('Driver_view/Driver_Create');
  });
};


controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM Driver WHERE driver_id = ?", [id], (err, rows) => {
      res.render('Driver_view/Driver_Edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newDriver = req.body;
  req.getConnection((err, conn) => {
    conn.query('UPDATE Driver set ? where driver_id = ?', [newDriver, id], (err, rows) => {
      res.redirect('/driver');
    });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM Driver WHERE driver_id = ?', [id], (err, rows) => {
      res.redirect('/driver');
    });
  });
}
//Entregas
controller.deliveries = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    let sql = "SELECT d.driver_name, d.driver_type,d.zona,c.business_name,c.business_type, "+
    "c.formal_address, o.order_id , o.status FROM Driver as d INNER JOIN Client as c on c.zone = d.zona "+
    "INNER JOIN OrderC as o on o.client_id = c.client_id WHERE o.status ='En despacho' AND driver_id = ?"
    conn.query(sql,[id], (err, listaA) => {
      if (err) {
        res.json(err);
      }
      else {
        res.render('Driver_view/Deliveries_List', {
          data: listaA
        });
      }
    });
  });
};

controller.deliveriesUpdate = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    let sql ="UPDATE OrderC set status = 'Completado' where order_id = ?"
    conn.query(sql, [id], (err, rows) => {
      res.redirect('/driver');
    });
  });
};
module.exports = controller;