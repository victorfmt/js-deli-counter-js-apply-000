var katzDeliLine = [];

function takeANumber(katzDeliLine) {
      var number = [];
      katzDeliLine.push(number)
      return "Welcome, you are number " + (katzDeliLine.indexOf(number) + 1) + "."
}
function nowServing(katzDeliLine) {
  if(katzDeliLine.length >= 1) {
    var sentence = `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.splice(0,1);
    return sentence;
  } else {
    return 'There is nobody waiting to be served!';
  }
}
function currentLine(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "The line is currently empty.";
  } else {
    var line = []
    katzDeliLine.forEach(function(name,index) {
        var num = index + 1;
         line.push(` ${num}. ${name}`);
       })
       return "The line is currently:" + line;
  }
}