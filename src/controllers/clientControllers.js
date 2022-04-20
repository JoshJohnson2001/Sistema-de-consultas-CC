const { query } = require("express");
const { redirect, get } = require("express/lib/response");

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


/*
Order Client
*/

controller.listOrder = (req, res) => {
  req.getConnection((err, conn) => {
    let queryS = "select o.order_id, c.business_name,c.business_representative, o.client_id, p.product_name, p.price, od.quantity "+
    "from OrderC as o inner join OrderDetail as od on o.order_id = od.order_id "+
    "inner join Client as c on c.client_id = o.client_id inner join Product as p on p.product_id = od.product_id"
    conn.query(queryS, (err, listaA) => {
      if (err) {
        res.json(err);
      }
      else {
        res.render('client_view/Client_List_Order', {
          data: listaA
        });
      }
    });
  });
};


controller.listClient = (req, res) => {
  
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM Client', (err, listaA) => {
      if (err) {
        res.json(err);
      }
      else {
        res.render('client_view/Client_OrderList', {
          data: listaA
        });
      }
    });
  });
};

controller.listProduct = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM Product', (err, listaA) => {
      if (err) {
        res.json(err);
      }
      else {
        
        res.render('client_view/Client_Order', {
          data: listaA
        });
      }
    });
  });
};













module.exports = controller;