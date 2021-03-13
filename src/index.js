module.exports = function toReadable (number) {
let result = '';    
  let arr = String(number).split('');
  let one = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  let two = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
if (number == 0) {return 'zero'}   
    
if (arr.length == 3) { 
    result = `${one[Number(arr[0])]} hundred `;
    arr.shift()}
if (arr.length == 2) { 
    if (Number(arr[0]) >= 2 ) {
        result = result + `${two[Number(arr[0])]} `;
        arr.shift();
        } else {
            if (Number(arr[0]) == 1 ) {
                result = result + `${one[Number(arr.join(''))]}`;
            } else {arr.shift()};    
        }
    }
if (arr.length == 1) { 
    
    result = result + `${one[Number(arr[0])]}`;
  }


return result.trim();      
}
