function tongUocSo() {
    let a = Number(prompt("Nhập số nguyên dương"));
    let tong = 0;
    for (let i = 1; i <= a; i++) {
        if (a % i == 0) {
        tong += i;
        }
    console.log(tong);
    }
}
tongUocSo();