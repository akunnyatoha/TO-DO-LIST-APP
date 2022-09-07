const router = require('express').Router();
const mysql = require('../connection/dbConn');

router.get('/', (req, res) => {
    const sqlQuery = "SELECT * FROM tasks";
    try {
        mysql.query(sqlQuery, (err, results) => {
            if(err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(results);
            }
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', (req, res) => {
    const sqlQuery = "INSERT INTO tasks VALUES(?,?,?)";
    const values = ['', req.body.name, false];
    try {
        mysql.query(sqlQuery, values, (err, results) => {
            if(err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(results);
            }
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', (req, res) => {
    const sqlQuery = "DELETE FROM tasks WHERE id = ?"
    const idTask = req.params.id;

    try {
        mysql.query(sqlQuery, idTask, (err, results) => {
            if(err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(results);
            }
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', (req, res) => {
    const sqlQuery = "UPDATE tasks SET status = ? WHERE id = ?"
    const values = [true, req.params.id];

    try {
        mysql.query(sqlQuery, values, (err, results) => {
            if(err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(results);
            }
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;