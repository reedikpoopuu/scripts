let size = 9;
for (let i = 0; i < size; i++) {
    let word = "";
    for (let j = 0; j < size; j++) {
        if (i%2 == 0 && j%2 == 0) {
            word += "#";
        } if (i%2 == 0 && j%2 != 0) {
            word += " ";
        } if (i%2 != 0 && j%2 == 0){
            word += " ";
        } if (i%2 != 0 && j%2 != 0) {
            word += "#"; 
        }
    }
    console.log(word);
}