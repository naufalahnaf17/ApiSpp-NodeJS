var conn = require('../connection');

exports.index = function(req,res){
    let sql = "SELECT * FROM petugas";
    conn.query(sql,(err,results) => {
        if(err) throw err;

        var data = {
            status : 200,
            data : results
        }
        res.json(data);

    });
}

exports.tambah = function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    var nama_petugas = req.body.nama_petugas;

    let sql = "INSERT INTO petugas (username,password,nama_petugas) values (?,?,?)";

    conn.query(sql,[username,password,nama_petugas], (err,results) => {
        if(err) throw err;
        
        var data = {
            status : 200,
            hasil : "Berhasil Menambahkan Data Petugas"
        }
        res.json(data);

    });
}

exports.edit = function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    var nama_petugas = req.body.nama_petugas;

    let sql = "UPDATE petugas SET username = ? , password = ? , nama_petugas = ? WHERE id_petugas = "+req.params.id_petugas+"";

    conn.query(sql,[username,password,nama_petugas], (err,results) => {
        if(err) throw err;
        
        var data = {
            status : 200,
            hasil : "Berhasil Edit Data Petugas"
        }
        res.json(data);

    });
}

exports.delete = function(req,res){
    let sql = "DELETE FROM petugas WHERE id_petugas ="+req.params.id_petugas+"";
    conn.query(sql, (err, results) => {
        if(err) throw err;
        
        var data = {
            status : 200,
            hasil : "Berhasil Mengahapus Petugas"
        }
        res.json(data);

    });
}