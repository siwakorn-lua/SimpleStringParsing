function longestWord(paragraph){
    var words = paragraph.split(/[@$!%*?&#^_+.;:,?0-9 ]/);
    var longestWord = "";
    words.forEach(word => {
        if(word.length > longestWord.length && word.match("^[a-zA-Z]")){
            longestWord = word;
        }
    });
    return longestWord;
}

function extractNumbers(paragraph){
    var numbers = paragraph.split(/[@$!%*?&#^_+.;:,?a-zA-Z -]/);
    var output = [];
    numbers.forEach(number => {
        if(number.match(/[0-9]/)){
            output.push(number);
        }
    })
    return output;
}

function longestWordButtonClick(){
    var paragraph = document.getElementById("input1").value;
    var output = longestWord(paragraph);
    document.getElementById("output1").innerHTML = output;
}

function extractNumberButtonClick(){
    var paragraph = document.getElementById("input2").value;
    var output = extractNumbers(paragraph);
    document.getElementById("output2").innerHTML = output;
}