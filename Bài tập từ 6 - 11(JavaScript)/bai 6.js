function in_tong_binh_phuong(n){
    let sum =0;
    for(let i = 1; i<=n;i++){
        sum += Math.pow(i, 2);
    }
    console.log(sum);
}
in_tong_binh_phuong(3)