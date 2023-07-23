document.addEventListener("DOMContentLoaded", function () {
  const btnGenerate = document.getElementById("btn-generate");
  btnGenerate.addEventListener("click", function () {
    const sinp = parseInt(document.getElementById("sinp").value);
    const linp = parseInt(document.getElementById("linp").value);
    const uinp = parseInt(document.getElementById("uinp").value);
    const ninp = parseInt(document.getElementById("ninp").value);

    const result = passGenerate(sinp, linp, uinp, ninp);
    document.getElementById("output").textContent = result;
  });

  function passGenerate(sinp, linp, uinp, ninp) {
    const sschar = [];
    const lowerchar = [];
    const upperchar = [];
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    for (let i = 32; i < 127; i++) {
      if ((33 <= i && i <= 47) || (58 <= i && i <= 64) || (91 <= i && i <= 96) || (123 <= i && i <= 126)) {
        sschar.push(i);
      } else if (97 <= i && i <= 122) {
        lowerchar.push(String.fromCharCode(i));
      } else if (65 <= i && i <= 90) {
        upperchar.push(String.fromCharCode(i));
      }
    }

    const chooser = ["sp", "lc", "uc", "nu"];

    if (sinp === 0) {
      chooser.splice(chooser.indexOf("sp"), 1);
    }
    if (linp === 0) {
      chooser.splice(chooser.indexOf("lc"), 1);
    }
    if (uinp === 0) {
      chooser.splice(chooser.indexOf("uc"), 1);
    }
    if (ninp === 0) {
      chooser.splice(chooser.indexOf("nu"), 1);
    }

    let result = "";

    while (chooser.length !== 0) {
      if (sinp === 0 && chooser.includes("sp")) {
        chooser.splice(chooser.indexOf("sp"), 1);
      }
      if (linp === 0 && chooser.includes("lc")) {
        chooser.splice(chooser.indexOf("lc"), 1);
      }
      if (uinp === 0 && chooser.includes("uc")) {
        chooser.splice(chooser.indexOf("uc"), 1);
      }
      if (ninp === 0 && chooser.includes("nu")) {
        chooser.splice(chooser.indexOf("nu"), 1);
      }
      if (chooser.length === 0) {
        break;
      }

      const pick = Math.floor(Math.random() * chooser.length);

      if (chooser[pick] === "sp") {
        const ran = Math.floor(Math.random() * (sschar.length - 8) + 8);
        result += String.fromCharCode(sschar[ran]);
        sinp--;
      } else if (chooser[pick] === "lc") {
        const ran = Math.floor(Math.random() * lowerchar.length);
        result += lowerchar[ran];
        linp--;
      } else if (chooser[pick] === "uc") {
        const ran = Math.floor(Math.random() * upperchar.length);
        result += upperchar[ran];
        uinp--;
      } else {
        const ran = Math.floor(Math.random() * numbers.length);
        result += numbers[ran];
        ninp--;
      }
    }

    return result;
  }
});
