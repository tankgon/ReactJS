function snt(n){
    let flag = true
    for(let i = 2; i < n - 1; i++){
        if(n % i == 0) flag = false
    }

    if(flag == true) console.log(n)
}

function in_snt (n) {
    for(let i = 1; i <= n; i++){
        snt(i);
    }
}

in_snt(10);