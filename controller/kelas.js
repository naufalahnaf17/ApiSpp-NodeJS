var conn = require('../connection');

exports.index = function(req,res){
    let sql = "SELECT * FROM kelas";
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
    var nama_kelas = req.body.nama_kelas;
    var kompetensi_keahlian = req.body.kompetensi_keahlian;

    let sql = "INSERT INTO kelas (nama_kelas,kompetensi_keahlian) VALUES (?,?)";
    conn.query(sql,[nama_kelas,kompetensi_keahlian] , (err,results) => {
        if(err) throw err;
        
        var data = {
            status : 200,
            hasil : "Berhasil Menambahkan Data Kelas"
        }

        res.json(data);

    });
}

exports.edit = function(req,res){
    var nama_kelas = req.body.nama_kelas;
    var kompetensi_keahlian = req.body.kompetensi_keahlian;

    let sql = "UPDATE kelas SET nama_kelas = ? , kompetensi_keahlian = ? WHERE id_kelas = "+req.params.id_kelas+"";
    conn.query(sql,[nama_kelas,kompetensi_keahlian] , (err,results) => {
        if(err) throw err;
        
        var data = {
            status : 200,
            hasil : "Berhasil Edit Data Kelas"
        }

        res.json(data);

    });
}

exports.delete = function(req,res){
    let sql = "DELETE FROM kelas WHERE id_kelas = "+req.params.id_kelas+"";
    conn.query(sql,(err,results) => {
        if(err) throw err;
        
        var data = {
            status : 200,
            hasil : "Berhasil Menghapus Data"
        }

        res.json(data);

    });
}