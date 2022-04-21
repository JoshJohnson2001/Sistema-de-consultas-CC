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
    let query1 = "INSERT INTO OrderC ( client_id, status, fecha) VALUES ( ?,'NULL', current_date ())";

    const query = conn.query(query1, [id])

    conn.query('SELECT * FROM Product', (err, listaA) => {
      if (err) {
        res.json(err);
      }
      else {
        
        res.render('client_view/Client_Order', {
          data: listaA,
          data_ID : id
        });
      }
    });
  });
};



controller.addProduct = (req, res) => {
  /*
  const { id } = req.params;
  const data = req.body;
  req.getConnection((err, connection) => {
    conn.query('select quantity from BusinessStock as b where b.product_id = ?',data.product_id, (err, listaA) => {
      if (listaA.quantity>=data.quantity) {
        let sql = "select max(order_id) into @order_id from OrderC"
        let sql1 ="INSERT INTO OrderDetail (order_id, product_id, quantity) VALUES (?,?,?)"
		    let sql2 ="update BusinessStock set quantity = ? where product_id = ?"
        let sql3 ="update OrderC set status = 'En despacho' where order_id = ?"
        conn.query(sql,data.product_id, (err, order_id)=> {

        })
      }
      else {
        
      }
    });
  })


  
  req.getConnection((err, connection) => {
    let sql = 'CALL c_orderClient(?,?,?)'
    let product_id = parseInt(data.product_id)
    let quantity = parseInt(data.quantity)
    let id_client = parseInt(data.id)
    const query = connection.query(sql, data.product_id ,data.quantity ,id)
  })*/
}









module.exports = controller;