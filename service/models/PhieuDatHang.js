const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const phieuDatHangSchema = new Schema(
  {
    // _id: String,
    maPhieuDatHang: String,
    tenKhachHang: String,
    soDienThoai: String,
    email: String,
    diaChi: String,
    danhSachDienThoai: Array,
    tongCong: Number,
    ngayDatHang: Date,
    daGiaoHang: Boolean
  },
  { collection: "phieu_dat" }
);

const PhieuDatHang = mongoose.model("PhieuDatHang", phieuDatHangSchema);

module.exports = {
  PhieuDatHang
};
