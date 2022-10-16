function timAmDauTien() {
    let a = [-2, -1, 1, 3, 4, 8];
    let n = a.length;
    for ( let i = 1; i < n; i++) {
        if (a[i] < 0)
            return i;
    }       
    return -1;

}
if (timAmDauTien(a[i]) == i) {
    console.log("vị trí âm đầu tiên là", i);
} else
    console.log("Không có số âm");
timAmDauTien();