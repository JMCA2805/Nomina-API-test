import mysql from 'mysql2';

import { host, port, username, password } from '../../Config/MySqlConfig.js';

export const AgregarHistorialB = (req, res) => {
  var conexion = mysql.createConnection({
    host: host,
    port: port,
    user: username,
    password: password,
    multipleStatements: true,
  });

  conexion.connect(function (err) {
    if (err) {
      console.error('Error de conexion: ' + err.stack);
      return;
    }
  });

  const { id_empleado, nombres, bonificacion } = req.body;

  let verify = 'SELECT * FROM nomina_database.historialbonificacion where bonificacion =' + `'${bonificacion}'`;

  let query = 'INSERT INTO nomina_database.historialbonificacion (`id_empleado`, `nombres`, `bonificacion`) VALUES ';

  query += `(${id_empleado},` + `'${nombres}',` + `'${bonificacion}')`;

  conexion.query(verify, (err, result) => {
    if (err) {
      console.log(err);
      conexion.end();
      res.sendStatus(400);
    } else {
      if (result.length == 0) {
        conexion.query(query, (err, results) => {
          if (err) {
            console.log(err);
            conexion.end();
            res.sendStatus(400);
          } else {
            console.log(results);
            conexion.end();
            res.sendStatus(200);
          }
        });
      }else {
        console.log('Ya existe la bonificacion enlazada al empleado');
        conexion.end();
        res.sendStatus(400);
      }
    }
  });
};
