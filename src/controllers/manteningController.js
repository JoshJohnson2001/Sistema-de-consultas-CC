const { query } = require("express");
const { redirect, get } = require("express/lib/response");

const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM MaintenanceLog', (err, listaA) => {
      if (err) {
        res.json(err);
      }
      else {
        res.render('MaintenanceLog_view/MaintenanceLog_List', {
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
    const query = connection.query('INSERT INTO MaintenanceLog set ?', data, (err, MaintenanceLog) => {
      console.log(MaintenanceLog)
      res.redirect('/mantening');
    })
  })
};


controller.create = (req, res) => {
  req.getConnection((err, conn) => {
    res.render('MaintenanceLog_view/MaintenanceLog_Create');
  });
};


controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM MaintenanceLog WHERE maintenance_id = ?", [id], (err, rows) => {
      res.render('MaintenanceLog_view/MaintenanceLog_Edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newMaintenanceLog = req.body;
  req.getConnection((err, conn) => {
    conn.query('UPDATE MaintenanceLog set ? where maintenance_id = ?', [newMaintenanceLog, id], (err, rows) => {
      res.redirect('/mantening');
    });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM MaintenanceLog WHERE maintenance_id = ?', [id], (err, rows) => {
      res.redirect('/mantening');
    });
  });
}

module.exports = controller;