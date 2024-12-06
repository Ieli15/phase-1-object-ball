function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 12
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismack Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 22,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 1,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Kemba Walker": {
            number: 33,
            shoe: 12,
            points: 10,
            rebounds: 4,
            assists: 4,
            steals: 1,
            blocks: 1,
            slamDunks: 2
          }
        }
      }
    };
  }
  console.log(gameObject());

  // numPointsScored
  function numPointsScored(playerName) {
    const game = gameObject();
    for (let team of ['home', 'away']) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].points;
      }
    }
    return null; 
  }
  
  //shoeSize
  function shoeSize(playerName) {
    const game = gameObject();
    for (let team of ['home', 'away']) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].shoe;
      }
    }
    return null; 
  }
  //teamColors
  function teamColors(teamName) {
    const game = gameObject();
    for (let team of ['home', 'away']) {
      if (game[team].teamName === teamName) {
        return game[team].colors;
      }
    }
    return null; 
  }
  //teamNames
  function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
//playerNumbers
function playerNumbers(teamName) {
  const game = gameObject();
  let numbers = [];
    for (let team of ['home', 'away']) {
    if (game[team].teamName === teamName) {
      
      for (let player in game[team].players) {
        numbers.push(game[team].players[player].number);
      }
      return numbers;
    }
  }
  return null; 
}
//playerStats
function playerStats(playerName) {
  const game = gameObject();
  for (let team of ['home', 'away']) {
    if (game[team].players[playerName]) {
      return game[team].players[playerName];
    }
  }
  return null; 
}

// bigShoeRebounds
function bigShoeRebounds() {
  const game = gameObject();
  let largestShoeSize = 0;
  let playerWithLargestShoe = null;
  
  
  for (let team of ['home', 'away']) {
    for (let player in game[team].players) {
      const shoeSize = game[team].players[player].shoe;
      if (shoeSize > largestShoeSize) {
        largestShoeSize = shoeSize;
        playerWithLargestShoe = player;
      }
    }
  }
  
  if (playerWithLargestShoe) {
    return game.home.players[playerWithLargestShoe]?.rebounds || game.away.players[playerWithLargestShoe]?.rebounds;
  }
  return null; 
}

  
  
  