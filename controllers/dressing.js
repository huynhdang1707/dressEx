// Mặc áo
macAo = (soAo) => {
    document.getElementById(
      "layoutAo"
    ).innerHTML = `<img src="../assets/images/clothes/topcloth${soAo}.png">`;
  };
  
  // Mặc Quần
  macQuan = (soQuan) => {
    document.getElementById(
      "layoutQuan"
    ).innerHTML = `<img src="../assets/images/clothes/botcloth${soQuan}.png">`;
  };
  
  // Mặc Giày
  macGiay = (soGiay) => {
    document.getElementById(
      "layoutGiay"
    ).innerHTML = `<img src="../assets/images/shoes/shoes${soGiay}.png">`;
  };
  
  //Mặc Túi
  macTui = (soTui) => {
    document.getElementById(
      "layoutTui"
    ).innerHTML = `<img src="../assets/images/handbags/handbag${soTui}.png">`;
  };
  
  //Mặc Dây chuyền
  macDay = (soDay) => {
    document.getElementById(
      "layoutDay"
    ).innerHTML = `<img src="../assets/images/necklaces/necklace${soDay}.png">`;
  };
  
  //Mặc Tóc
  macToc = (soToc) => {
    document.getElementById(
      "layoutToc"
    ).innerHTML = `<img src="../assets/images/hairstyle/hairstyle${soToc}.png">`;
  };
  
  //Nền
  macNen = (soNen) => {
    document.getElementById(
      "layoutNen"
    ).innerHTML = `<img src="../assets/images/background/background${soNen}.jpg">`;
  };
  
  showList = (kind) => {
    let idAo = document.getElementById("idAo");
    let idQuan = document.getElementById("idQuan");
    let idGiayDep = document.getElementById("idGiayDep");
    let idTui = document.getElementById("idTui");
    let idDay = document.getElementById("idDay");
    let idToc = document.getElementById("idToc");
    let idNen = document.getElementById("idNen");
  
    idAo.style.display = "none";
    idQuan.style.display = "none";
    idGiayDep.style.display = "none";
    idTui.style.display = "none";
    idDay.style.display = "none";
    idToc.style.display = "none";
    idNen.style.display = "none";
  
    if (kind == 1) {
      idAo.style.display = "block";
    } else if (kind == 2) {
      idQuan.style.display = "block";
    } else if (kind == 3) {
      idGiayDep.style.display = "block";
    } else if (kind == 4) {
      idTui.style.display = "block";
    } else if (kind == 5) {
      idDay.style.display = "block";
    } else if (kind == 6) {
      idToc.style.display = "block";
    } else if (kind == 7) {
      idNen.style.display = "block";
    }
  };
  