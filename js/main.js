var dssv = [];

var local = localStorage.getItem("dssv_local");
if (local != null) {
  var dssv_local = JSON.parse(local);
  dssv = dssv_local.map(function (item) {
    return new taoSV(
      item.maSV,
      item.tenSV,
      item.email,
      item.password,
      item.mathScore,
      item.literatureScore
    );
  });
  showContentTable(dssv);
}

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
  var sinhVien = new taoSV(
    maSV,
    tenSV,
    email,
    password,
    mathScore,
    literatureScore
  );
  /**
   * Đẩy data
   */
  dssv.push(sinhVien);
  /**add data vao local storage */
  localStorage.setItem("dssv_local", JSON.stringify(dssv));
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
