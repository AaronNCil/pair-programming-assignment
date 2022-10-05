function vowelChecker (x){
    y = x.toLowerCase();

    if (y == "a" || y == "e" ||y ==  "i" ||y ==  "o" ||y == "u"){
        console.log("Vowel");
    } else {
        console.log("not Vowel");
    }
}

vowelChecker("A");