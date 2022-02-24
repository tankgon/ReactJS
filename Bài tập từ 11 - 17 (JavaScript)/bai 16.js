const getID = (str) =>{
    str = str.split("/");
    for (let i = 0; i < str.length; i++) {
      if (i == 3 ) {     
          console.log(str[i].split(',').join().replaceAll('.',''));
      }
    }
}
getID("https://www.facebook.com/tung.nguyenthac.1/")