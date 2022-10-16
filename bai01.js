function lietKeUocSo() {
    let a = Number(prompt("Nhập số nguyên dương"));
    for (let i = 1; i <= a; i++) {
        if (a % i == 0) {
        console.log(i);
        }
    }
}
lietKeUocSo();