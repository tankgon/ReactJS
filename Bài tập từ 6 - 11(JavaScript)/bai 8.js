function so_le_tao_thanh(n){
    let check = true;
    while(n > 0) {       
        if((n % 10) % 2 == 0) {
            check = false;
            break;
        }      
        n = parseInt(n/10);
    }
    if (check == true) console.log("Yes");
    else console.log("No");
}
so_le_tao_thanh(555);