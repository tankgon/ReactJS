function kiem_tra_snt (n){
    if(n<2) console.log("No");
    else {
        for(let i = 2; i <= n-1; i++){
            if (n % i==0){
                console.log("No");
                break;
            }
            else console.log("yes");
        }
    }
}

function in_so_n (n){
    for(let i = 0; i<=n;i++){
        console.log("i");
    }
}

function in_so_le_n (n){
    for(let i = 0; i<=n;i++){
        if (i % 2 != 0)
        console.log("i");
    }
}

function in_so_chan_n (n){
    for(let i = 0; i<=n;i++){
        if (i % 2 == 0)
        console.log("i");
    }
}

function in_tong_n (n){
    const sum;
    for(let i = 0; i<=n;i++){
        return sum+i;
    }
    console.log("i");
}