var conn = require('../connection');

exports.index = function(req,res){
    let sql = "SELECT * FROM spp";
    conn.query(sql , (err,results) => {
        if(err) throw err;

        var data = {
            status : 200,
            data : results
        }

        res.json(data);

    });
}

exports.tambah = function(req,res){
    var id_spp = req.body.id_spp;
    var tahun = req.body.tahun;
    var nominal = req.body.nominal;

    let sql = "INSERT INTO spp (id_spp,tahun,nominal) VALUES (?,?,?)";
    conn.query(sql,[id_spp,tahun,nominal] , (err,results) => {
        if(err) throw err;

        var data = {
            status : 200,
            hasil : "Berhasil Tambah Data SPP"
        }

        res.json(data);

    });
}

exports.edit = function(req,res){
    var tahun = req.body.tahun;
    var nominal = req.body.nominal;

    let sql = "UPDATE spp SET tahun = ? , nominal = ? WHERE id_spp = "+req.params.id_spp+"";
    conn.query(sql,[tahun,nominal] , (err,results) => {
        if(err) throw err;

        var data = {
            status : 200,
            hasil : "Berhasil Edit Data SPP"
        }

        res.json(data);

    });
}

exports.delete = function(req,res){
    let sql = "DELETE FROM spp WHERE id_spp = "+req.params.id_spp+"";
    conn.query(sql , (err,results) => {
        if(err) throw err;

        var data = {
            status : 200,
            hasil : "Berhasil Menghapus Data", 
        }

        res.json(data);

    });
}