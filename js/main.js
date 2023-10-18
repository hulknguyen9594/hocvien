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

/**sua sinh vien */
function editSV(id) {
  var vitri = dssv.findIndex(function (item) {
    return item.maSV == id;
  });
  document.querySelector("#maSinhVien").readOnly = true;
  document.querySelector("#maSinhVien").value = dssv[vitri].maSV;
  document.querySelector("#tenSinhVien").value = dssv[vitri].tenSV;
  document.querySelector("#email").value = dssv[vitri].email;
  document.querySelector("#password").value = dssv[vitri].password;
  document.querySelector("#mathScore").value = dssv[vitri].mathScore;
  document.querySelector("#literatureScore").value =
    dssv[vitri].literatureScore;
}

/**cap nhat sinh vien */
function capNhat() {
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
  var vitri = dssv.findIndex(function (item) {
    return item.maSV == maSV;
  });
  dssv.splice(vitri, 1, sinhVien);

  showContentTable(dssv);
}

/**reset */
function reset() {
  document.querySelector("#maSinhVien").value = "";
  document.querySelector("#tenSinhVien").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#password").value = "";
  document.querySelector("#mathScore").value = "";
  document.querySelector("#literatureScore").value = "";
}

/**tim ma sinh vien */
function timMaSV() {
  var timMa = document.querySelector("#timmasinhvien").value * 1;
  console.log(timMa);
  var vitri = dssv.findIndex(function (item) {
    return item.maSV == timMa;
  });
  var newdssv = [];
  newdssv.push(dssv[vitri]);
  showContentTable(newdssv);
}
