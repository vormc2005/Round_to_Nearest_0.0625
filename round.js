


const decimalRound = (input)=>{
    //let view = this;
    let output;
    if (!input) return 0;
    //let trimmedInput = input.trim();
    //input = trim(input);
    output = roundToNearestValue(input, 0.0625);    
    //return output.toFixed(4);
   // console.log(output.toFixed(4))
   document.getElementById("roundOutput").innerHTML =
   `Your rounded value is: ${output}`;
}

const roundToNearestValue =(decimal, roundValue)=>{
    return Math.round(decimal/roundValue)*roundValue
}

let input = prompt("Please type a decimal", "")
let parsedInput = parseFloat(input.trim());
decimalRound(parsedInput)



// , decimalRound: function(input) {
//     var view = this;
//     var output;
//     if (!input) return 0;
//     input = $.trim(input);
//     output = view.roundToNearestValue(input, 0.0625);
    
    
    
//     return output.toFixed(4);
//     }
    
//     , roundToNearestValue: function (decimal, roundValue) {
//     return Math.round(decimal / roundValue) * roundValue;
//     }