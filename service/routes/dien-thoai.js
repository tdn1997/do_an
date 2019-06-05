var express = require("express");
var router = express.Router();
const { DienThoai } = require("../models/DienThoai");

/* GET home page. */
router.get("/", function(req, res, next) {
  DienThoai.find()
    .then(result => {
      res.send(result);
    })
    .catch(error => {
      res.send(error);
    });
});

router.get("/:maDienThoai", function(req, res, next) {
  DienThoai.findOne({ maDienThoai: req.params.maDienThoai })
    .then(result => {
      res.send(result);
    })
    .catch(error => {
      res.send(error);
    });
});

router.post("/", function(req, res, next) {
  let thongTinDienThoaiMoi = {
    maDienThoai: req.body.maDienThoai,
    tenDienThoai: req.body.tenDienThoai,
    loaiDienThoai : req.body.loaiDienThoai,
    nhaSanXuat: req.body.nhaSanXuat,
    giaNhap: req.body.giaNhap,
    giaBan: req.body.giaBan
  };
  let DienThoaiMoi = new DienThoai(thongTinDienThoaiMoi);
  DienThoaiMoi.save()
    .then(result => {
      res.send(result);
    })
    .catch(error => {
      res.send(error);
    });
});

router.put("/", function(req, res, next) {
  DienThoai.findOne({ maDienThoai: req.body.maDienThoai })
    .then(result => {      
      result.loaiDienThoai = req.body.loaiDienThoai;
      result.tenDienThoai = req.body.tenDienThoai;
      result.nhaSanXuat = req.body.nhaSanXuat;
      result.giaNhap = req.body.giaNhap;
      result.giaBan = req.body.giaBan;

      result
        .save()
        .then(result => {
          res.send(result);
        })
        .catch(error => {
          res.send(error);
        });
    })
    .catch(error => {
      res.send(error);
    });
});

router.delete("/", function(req, res, next) {
  DienThoai.findOneAndRemove({ maDienThoai: req.body.maDienThoai })
    .then(result => {
      res.send(`Xóa thảnh công Sản phẩm: ${result}`);
    })
    .catch(error => {
      res.send(error);
    });
});

module.exports = router;
