const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("SELECT * FROM user", (err, rows) => {
      if (err) return res.send(err);

      res.json(rows);
    });
  });
});

routes.post("/", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query("INSERT INTO user set ?", [req.body], (err, rows) => {
      if (err) return res.send(err);

      res.send("Usuario registrado");
    });
  });
});

routes.delete("/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "DELETE FROM user WHERE id = ?",
      [req.params.id],
      (err, rows) => {
        if (err) return res.send(err);

        res.send("Usuario eliminado");
      }
    );
  });
});

routes.put("/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "UPDATE user set ? WHERE id = ?",
      [req.body, req.params.id],
      (err, rows) => {
        if (err) return res.send(err);

        res.send("Usuario actualizado");
      }
    );
  });
});

module.exports = routes;
