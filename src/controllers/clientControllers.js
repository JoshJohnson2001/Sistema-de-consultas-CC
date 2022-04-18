const { redirect } = require("express/lib/response");

const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM Client', (err, listaA) => {
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

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO Client set ?', data, (err, Client) => {
      console.log(Client)
      res.redirect('/client');
    })
  })
};


controller.create = (req, res) => {
  req.getConnection((err, conn) => {
    res.render('client_view/Client_Create');
  });
};


controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM Client WHERE client_id = ?", [id], (err, rows) => {
      res.render('client_view/Client_Edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newclient = req.body;
  req.getConnection((err, conn) => {
    conn.query('UPDATE Client set ? where client_id = ?', [newclient, id], (err, rows) => {
      res.redirect('/client');
    });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM Client WHERE client_id = ?', [id], (err, rows) => {
      res.redirect('/client');
    });
  });
}

module.exports = controller;