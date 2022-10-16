function demLe() {
    let a = [-2, -1, 1, 3, 4, 8];
    let n = a.length;
    let demSoLe = 0;
    for (let i = 0; i <= n; i++) {
        if (!(a[i] % i == 0)) {
            demSoLe++;
        }   
    }
    console.log("có", demSoLe, "số lẻ");
}