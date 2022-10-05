function oddEven(arr1){
    let even = [];
    let odd = [];

   for (i = 0; i < arr1.length; i++){
        if (arr1[i] % 2 == 0){
            even[i] = arr1[i]
        } else {
            odd[i] = arr1[i]
        }
   }

   console.log(`Even Numbers: ${even}`);
   console.log(`Even Numbers: ${odd}`);
  
}

console.log(oddEven([2, 4, 7, 11, 15, 16]));
