var dssv = [];

/* them sinh vien*/
function themSinhVien() {
  /**
   * Lấy dữ liệu từ user
   */
  var maSV = document.querySelector("#maSinhVien").value;
  var tenSV = document.querySelector("#tenSinhVien").value;
  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;
  var mathScore = document.querySelector("#mathScore").value * 1;
  var literatureScore = document.querySelector("#literatureScore").value * 1;
  var sinhVien = {
    maSV: maSV,
    tenSV: tenSV,
    email: email,
    password: password,
    mathScore: mathScore,
    literatureScore: literatureScore,
    dtb() {
      return (this.mathScore + this.literatureScore) / 2;
    },
  };
  /**
   * Đẩy data
   */
  dssv.push(sinhVien);
  /**
   * show dữ liệu
   */
  showContentTable(dssv);
}

/** remove a student */
function removeSV(id) {
  var vitri = dssv.findIndex(function (item) {
    return item.maSV == id;
  });
  dssv.splice(vitri, 1);
  showContentTable(dssv);
}
