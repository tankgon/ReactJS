const toNomalName = (name) => {
    name = name.toLowerCase();
    for (let i = 0; i < name.length; i++) {
      if (i == 0 || name.charAt(i - 1) == " ") {     
        name = name.slice(0, i) + name.charAt(i).toUpperCase() + name.slice(i + 1);
      }
    }
    console.log(name);
};
toNomalName ('phuc tHanh')