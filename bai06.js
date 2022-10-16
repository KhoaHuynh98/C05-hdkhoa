function laSoNguyenTo(b) {
    let dem = 0;
    for (let i = 1; i <= b; i++) {
        if (b % i == 0) {
            dem++;
        }
    } 
    if (dem == 2)
        return true;
        return false;
}
function laSNT() {
    let a = Number(prompt("Nhập số nguyên"));
    let x = laSoNguyenTo(a);
    if (x == true) {
    console.log("Là số nguyên tố");
    } else {
    console.log("Không là số nguyên tố");
    }
}
laSoNguyenTo();
laSNT();