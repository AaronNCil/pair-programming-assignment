function gdc_two_numbers(x,y){
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
  console.log(gdc_two_numbers(78,126));
  console.log(gdc_two_numbers(336, 360));