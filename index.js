function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string) {
      return string.toLowerCase()
  }
  function logShout(string) {
      console.log(shout(string))
  }
function logWhisper(string) {
    console.log(whisper(string))
}

function sayHiToHeadphonedRoommate(inputString) {
    
    /*
    switch(inputString){
        case "hello":
            return "I can't hear you!";
            break;
        case "HELLO":
            return "YES INDEED!";
            break;
        case "Let's have dinner together!":
            return "I would love to!";
            break;
        default:
            return null;
    }
    */

    if(inputString == "hello") {
        return "I can't hear you!";
    } else if (inputString == "HELLO") {
        return "YES INDEED!";
    } else if (inputString == "Let's have dinner together!") {
        return "I would love to!";
    }
        
}