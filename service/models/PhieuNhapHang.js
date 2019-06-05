const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const phieuNhapHangSchema = new Schema(
  {
    maPhieuNhapHang: String,
    tenNhanVien: String,
    danhSachDienThoai: Array,
    tongCong: Number,
    ngayNhapHang: Date
  },
  { collection: "phieu_nhap" }
);

const PhieuNhapHang = mongoose.model("PhieuNhapHang", phieuNhapHangSchema);

module.exports = {
    PhieuNhapHang
};
