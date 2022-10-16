function tichUocSoChan() {
    let a = Number(prompt("Nhập số nguyên dương"));
    let tich = 1;
    for (let i = 1; i <= a; i++) {
        if (a % i == 0) {
            if (i % 2 == 0) {
            tich++;
            tich * i;
            }
        }
    }
    console.log(tich);
}
tichUocSoChan();