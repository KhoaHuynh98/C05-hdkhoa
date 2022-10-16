function laSoNguyenTo(a[i]) {
    let dem = 0;
    for (let i = 1; i <= a[i]; i++) {
        if (a[i] % i == 0) {
            dem++;
        }
    } 
    if (dem == 2)
        return true;
        return false;
}
function lietKeSoNguyenTo(a) {
    let a = [-2, -1, 1, 3, 4, 8];
    for (let i = 0; i < a.length; i++) {
        if (laSoNguyenTo(a[i]) == true)
            console.log(a[i]);
    }
}
lietKeSoNguyenTo();
laSoNguyenTo();