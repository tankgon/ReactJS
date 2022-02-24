function kiem_tra_snt(n){
    let flag = true;
    for(let i = 2; i < n - 1; i++){
        if(n % i == 0){
            flag = false
        }
    }

    if(flag == true){
        console.log(n + ": " + "la snt");
    }else{
        console.log(n + ": " +"khong phai la snt");
    }
}
kiem_tra_snt(1);
kiem_tra_snt(4);

