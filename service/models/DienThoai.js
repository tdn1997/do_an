const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dienThoaiSchema = new Schema({
    // _id: String,
    maDienThoai: String,
    tenDienThoai: String,
    loaiDienThoai: String,
    nhaSanXuat: String,
    giaNhap: Number,
    giaBan: Number
}, {collection: "dien_thoai"});

const DienThoai = mongoose.model("DienThoai", dienThoaiSchema);

module.exports = {
    DienThoai
};
