function ham_goi(n){
    function ham_nguoc(n){ 
        n = n.toString()
        return n.split("").reverse().join("");
    }
    function doi_so(n){ 
        let flag =0;
        if (ham_nguoc(n) == n) flag = 1;
        return flag;
    }
          
    let check = doi_so(n);
      
    if( check == 1 ) console.log(n + " la so doi xung");
    else console.log(n + " khong phai la la so doi xung");
}
ham_goi(1221211111111)