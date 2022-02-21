// Removing duplicates from an Array

var arr = ["One", "One", "Two", "Three"];
  
function removeDuplicates(arr) {
    var unique = [];
    arr.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    return unique;
}
//


console.log(removeDuplicates(arr));
