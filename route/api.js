// var multer = require('multer');
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, process.cwd()+'/upload')
//     },
//     filename: function (req, file, cb) {
//       var fileType = '';
//       file.mimetype == 'image/gif' ? fileType = 'gif' : null;
//       file.mimetype == 'image/jpg' ? fileType = 'jpg' : null;
//       file.mimetype == 'image/jpeg' ? fileType = 'jpeg' : null;
//       cb(null, 'image-' + Date.now() + '.' + fileType)
//     }
//   })
   
// var upload = multer({ storage: storage })

module.exports = function(app) {

    //Route Siswa
    var siswa = require('../controller/siswa');
    app.route('/api/siswa').get(siswa.index);
    app.route('/api/siswa').post(siswa.tambah);
    app.route('/api/siswa/:nis').put(siswa.edit);
    app.route('/api/siswa/:nis').delete(siswa.delete);
    
    //Route Petugas
    var petugas = require('../controller/petugas')
    app.route('/api/petugas').get(petugas.index);
    app.route('/api/petugas').post(petugas.tambah);
    app.route('/api/petugas/:id_petugas').put(petugas.edit);
    app.route('/api/petugas/:id_petugas').delete(petugas.delete);

    //Route Kelas 
    var kelas = require('../controller/kelas');
    app.route('/api/kelas').get(kelas.index);
    app.route('/api/kelas').post(kelas.tambah);
    app.route('/api/kelas/:id_kelas').put(kelas.edit);
    app.route('/api/kelas/:id_kelas').delete(kelas.delete);

    //Route Spp 
    var spp = require('../controller/spp');
    app.route('/api/spp').get(spp.index);
    app.route('/api/spp').post(spp.tambah);
    app.route('/api/spp/:id_spp').put(spp.edit);
    app.route('/api/spp/:id_spp').delete(spp.delete);

    // Tambahan Untuk Upload Gambar , Harus install multer dulu
    // app.post('/upload',upload.single('file'),function(req, res, next) {
    //     if(!req.file) {
    //       res.status(500);
    //       return next(err);
    //     }
    //     res.json({ fileUrl: 'http:localhost:3000/download/' + req.file.filename });
    // })

};