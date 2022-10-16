function tongAm() {
    let a = [-2, -1, 1, 3, 4, 8];
    let n = a.length;
    let tong = 0;
    for (let i = 0; i <= n; i++) {
        if (a[i] < 0) {
            tong += a[i];
        }
    }
    console.log(tong);
}
tongAm();