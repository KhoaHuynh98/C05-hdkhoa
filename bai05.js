function demUocSo() {
    let a = Number(prompt("Nhập số nguyên dương"));
    let dem = 0;
    for (let i = 1; i <= a; i++) {
        if (a % i == 0) {
        dem++;
        }
    }
    console.log("có", dem, "ước số");
}
demUocSo();