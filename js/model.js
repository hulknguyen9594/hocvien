function taoSV(maSV, tenSV, email, password, mathScore, literatureScore) {
  this.maSV = maSV;
  this.tenSV = tenSV;
  this.email = email;
  this.password = password;
  this.mathScore = mathScore;
  this.literatureScore = literatureScore;
  this.dtb = function () {
    return (this.mathScore + this.literatureScore) / 2;
  };
}
