const { redirect } = require("express/lib/response");

const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM Supplier', (err, listaA) => {
      if (err) {
        res.json(err);
      }
      else {
        res.render('Supplier_view/Supplier_List', {
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
    const query = connection.query('INSERT INTO Supplier set ?', data, (err, Supplier) => {
      console.log(Supplier)
      res.redirect('/supplier');
    })
  })
};


controller.create = (req, res) => {
  res.render('Supplier_view/Supplier_Create');
};


controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM Supplier WHERE supplier_id = ?", [id], (err, rows) => {
      res.render('Supplier_view/Supplier_Edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newSupplier = req.body;
  req.getConnection((err, conn) => {
    conn.query('UPDATE Supplier set ? where supplier_id = ?', [newSupplier, id], (err, rows) => {
      res.redirect('/supplier');
    });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM Supplier WHERE supplier_id = ?', [id], (err, rows) => {
      res.redirect('/supplier');
    });
  });
}

module.exports = controller;