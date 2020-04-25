var conn = require('../connection');

exports.index = function(req,res){
    let sql = "SELECT * FROM siswa";
    conn.query(sql, (err, results) => {
        if(err) throw err;
        
        var data = {
            status : 200,
            data : results
        }
        res.json(data);

    });
}

exports.tambah = function(req,res){
    var nisn = req.body.nisn;
    var nis = req.body.nis;
    var nama = req.body.nama;
    var id_kelas = req.body.id_kelas;
    var alamat = req.body.alamat;
    var no_tlp = req.body.no_tlp;
    var id_spp = req.body.id_spp;

    let sql = "INSERT INTO siswa (nisn,nis,password,nama,id_kelas,alamat,no_tlp,id_spp) values (?,?,?,?,?,?,?,?)";

    conn.query(sql,[nisn,nis,nis,nama,id_kelas,alamat,no_tlp,id_spp], (err,results) => {
        if(err) throw err;
        
        var data = {
            status : 200,
            hasil : "Berhasil Menambahkan Data Siswa"
        }
        res.json(data);

    });
}

exports.edit = function(req,res){
    var nama = req.body.nama;
    var id_kelas = req.body.id_kelas;
    var alamat = req.body.alamat;
    var no_tlp = req.body.no_tlp;
    var id_spp = req.body.id_spp;

    let sql = "UPDATE siswa SET nama = ? , id_kelas = ? , alamat = ? , no_tlp = ? , id_spp = ? WHERE nis = "+req.params.nis+"";

    conn.query(sql,[nama,id_kelas,alamat,no_tlp,id_spp], (err,results) => {
        if(err) throw err;
        
        var data = {
            status : 200,
            hasil : "Berhasil Edit Data Siswa"
        }
        res.json(data);

    });
}

exports.delete = function(req,res){
    let sql = "DELETE FROM siswa WHERE nis ="+req.params.nis+"";
    conn.query(sql, (err, results) => {
        if(err) throw err;
        
        var data = {
            status : 200,
            hasil : "Berhasil Mengahapus Siswa"
        }
        res.json(data);

    });
}
