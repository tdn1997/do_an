var express = require("express");
var router = express.Router();
const { PhieuDatHang } = require("../models/PhieuDatHang");

router.get("/", function(req, res, next) {
  PhieuDatHang.find()
    .then(result => {
      res.send(result);
    })
    .catch(error => {
      res.send(error);
    });
});

router.get("/:maPhieuDatHang", function(req, res, next) {
  let maPhieuDatHang = req.params.maPhieuDatHang;
  PhieuDatHang.findOne({ maPhieuDatHang: maPhieuDatHang })
    .then(result => {
      res.send(result);
    })
    .catch(error => {
      res.send(error);
    });
});

router.post("/", function(req, res, next) {
  let thongTinPhieuDatHangMoi = {
    maPhieuDatHang: req.body.maPhieuDatHang,
    tenKhachHang: req.body.tenKhachHang,
    soDienThoai: req.body.soDienThoai,
    email: req.body.email,
    diaChi: req.body.diaChi,
    danhSachDienThoai: req.body.dienThoaiDat,
    tongCong: req.body.tongCong,
    ngayDatHang: req.body.ngayDatHang,
    daGiaoHang: false
  };

  let PhieuDatHangMoi = new PhieuDatHang(thongTinPhieuDatHangMoi);
  PhieuDatHangMoi.save()
    .then(result => {
      res.send(result);
    })
    .catch(error => {
      res.send(error);
    });
});

router.put("/", function(req, res, next) {
  PhieuDatHang.findOne({ maPhieuDatHang: req.body.maPhieuDatHang })
    .then(result => {
      result.tenKhachHang = req.body.tenKhachHang;
      result.soDienThoai = req.body.soDienThoai;
      result.email = req.body.email;
      result.diaChi = req.body.diaChi;
      result.danhSachDienThoai = req.body.dienThoaiDat;
      result.tongCong = req.body.tongCong;
      result.ngayDatHang = req.body.ngayDatHang;
      result.daGiaoHang = req.body.daGiaoHang;

      result
        .save()
        .then(result => {
          res.send(result);
        })
        .catch(error => {
          res.send(error);
        });
    })
    .catch();
});

router.delete("/", function(req, res, next) {
  PhieuDatHang.findOneAndRemove({ maPhieuDatHang: req.body.maPhieuDatHang })
    .then(result => {
      res.send(`Xóa thành công Đơn hàng: ${result}`);
    })
    .catch(error => {
      res.send(error);
    });
});

module.exports = router;
