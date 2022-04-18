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
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM Supplier', (err, listaA) => {
      if (err) {
        res.json(err);
      }
      else {
        res.render('Supplier_view/Supplier_Create');
      }
    });
  });
  
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

//Product for Supplier

controller.listProduct = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
        conn.query('SELECT p.product_name,p.price,p.category_name,p.subcategory_name,p.is_available from SupplierStock as ss INNER JOIN Product as p on p.product_id = ss.product_id WHERE ss.supplier_id = ?', [id], (err, listaA) => {
      if (err) {
        res.json(err);
      }
      else {
        res.render('Supplier_view/Supplier_Product_List', {
          dataID: id,
          data: listaA
        });
      }
    });
  });
};

controller.saveProduct = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO Product set ?', data, (err, Supplier) => {})
    query = connection.query('SELECT product_id FROM Product WHERE product_name = ?',data.product_name,(err, product) => {
      const query2 = connection.query('INSERT INTO SupplierStock (supplier_id, product_id) VALUES (?, ?);',[id] ,product, (err, Supplier) => {})
      res.redirect('/supplier/<%=id%>/product');
    })
    
  })
};


controller.createProduct = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM Supplier', (err, listaA) => {
      if (err) {
        res.json(err);
      }
      else {
        res.render('Supplier_view/Product_Create',{
          data: id
        });
      }
    });
  });
  
};


controller.editProduct = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM Supplier WHERE supplier_id = ?", [id], (err, rows) => {
      res.render('Supplier_view/Supplier_Edit', {
        data: rows[0]
      })
    });
  });
};

controller.updateProduct = (req, res) => {
  const { id } = req.params;
  const newSupplier = req.body;
  req.getConnection((err, conn) => {
    conn.query('UPDATE Supplier set ? where supplier_id = ?', [newSupplier, id], (err, rows) => {
      res.redirect('/supplier/product');
    });
  });
};

controller.deleteProduct = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM Supplier WHERE supplier_id = ?', [id], (err, rows) => {
      res.redirect('/supplier/product');
    });
  });
}

module.exports = controller;