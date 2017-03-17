function dwarfRollCall(dwarves) {
  var dwarveLineUp = "";
  for (var i = 0; i < dwarves.length; i++) {
    dwarveLineUp += (i+1).toString() + ". " + dwarves[i] + " ";
  }
  return dwarveLineUp;
}

function summonCaptainPlanet(planeteerCalls){
  var planteerYell = [];
  for (var i = 0; i < planeteerCalls.length; i++) {
   planteerYell.push(planeteerCalls[i].toUpperCase() + "!");
  }
  return planteerYell;
}

function longPlaneteerCalls(words) {
  var findLong = false;
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      findLong = true;
    }
  }
  return findLong;
}

function findTheCheese (foods) {
  var fancyCheese = ["cheddar", "gouda", "camembert"];
    for (var i = 0; i < foods.length; i++) {
      for (var j = 0; j < fancyCheese.length; j++){
        if (fancyCheese[j] === foods[i]) {
          return foods[i];
        }
      }
    }
    return "no cheese!";
}
