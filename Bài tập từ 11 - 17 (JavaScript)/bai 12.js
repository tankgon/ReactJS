const remote=(string) =>{
    var sum = "";
    remotestring = string.split(" ");
    for(let i = 0; i < remotestring.length; i++)
    sum += remotestring[i];
    console.log(sum);
};
remote("a     b             ")





