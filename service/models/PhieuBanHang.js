const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const phieuBanHangSchema = new Schema(
  {
    // _id: String,
    maPhieuBanHang: String,
    tenNhanVien: String,
    tenKhachHang: String,
    soDienThoai: String,
    email: String,
    diaChi: String,
    danhSachDienThoai: Array,
    tongCong: Number,
    ngayBanHang: Date
  },
  { collection: "phieu_ban" }
);

const PhieuBanHang = mongoose.model("PhieuBanHang", phieuBanHangSchema);

module.exports = {
    PhieuBanHang
};
