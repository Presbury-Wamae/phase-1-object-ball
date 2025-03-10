function gameObject(){
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            playerName: {
            
            "Alan Anderson":{
              number: 0,
              shoe: 16,
              points: 22,
              rebounds: 12,
              assists: 12,
              steals: 3, 
              blocks: 1,
              slamDunks: 1, 
            },

            "Reggie Evans":{
              number: 30,
              shoe: 14,
              points: 12,
              rebounds: 12,
              assists: 12,
              steals: 12, 
              blocks: 12,
              slamDunks: 7, 
            }, 
            
            "Brook Lopez":{
              number: 11,
              shoe: 17,
              points: 17,
              rebounds: 19,
              assists: 10,
              steals: 3, 
              blocks: 1,
              slamDunks: 15, 
            }, 
            
            "Mason Plumlee":{
              number: 1,
              shoe: 19,
              points: 26,
              rebounds: 12,
              assists: 6,
              steals: 3, 
              blocks: 8,
              slamDunks: 5, 
            },
            
            "Jason Terry":{
              number: 31,
              shoe: 15,
              points: 19,
              rebounds: 2,
              assists: 2,
              steals: 4, 
              blocks: 11,
              slamDunks: 1, 
            }, 
        }
    },
away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            playerName: {
            
            "Jeff Adrien":{
              number: 4,
              shoe: 18,
              points: 10,
              rebounds: 1,
              assists: 1,
              steals: 2, 
              blocks: 7,
              slamDunks: 2, 
            },

            "Bismak Biyombo":{
              number: 0,
              shoe: 16,
              points: 12,
              rebounds: 4,
              assists: 7,
              steals: 7, 
              blocks: 15,
              slamDunks: 10, 
            }, 
            
            "DeSagna Diop":{
              number: 2,
              shoe: 14,
              points: 24,
              rebounds: 12,
              assists: 12,
              steals: 4, 
              blocks: 15,
              slamDunks: 5, 
            }, 
            
            "Ben Gordon":{
              number: 8,
              shoe: 15,
              points: 33,
              rebounds: 3,
              assists: 2,
              steals: 1, 
              blocks: 1,
              slamDunks: 0, 
            },
            
            "Brendan Haywood":{
              number: 33,
              shoe: 15,
              points: 6,
              rebounds: 12,
              assists: 12,
              steals: 22, 
              blocks: 5,
              slamDunks: 12, 
            } 
            }
        }
    }
}
const game = gameObject();

console.log(game.away.teamName);
console.log(game.away.playerName["Brendan Haywood"].rebounds);
console.log(game.away.playerName["DeSagna Diop"].steals);

function numPointsScored(playerName) {
    const game = gameObject();
    
    if (game.home.playerName[playerName]) {
        return game.home.playerName[playerName].points;
    }

    if (game.away.playerName[playerName]) {
        return game.away.playerName[playerName].points;
    }

    return "Player not found";
}
console.log(numPointsScored("Presbury Wamae"));


function shoeSize(playerName){
    const game = gameObject();
    
    if (game.home.playerName[playerName]) {
        return game.home.playerName[playerName].shoe;
    }
    if (game.away.playerName[playerName]) {
        return game.away.playerName[playerName].shoe;
    }

    return "Player  not found";
}
console.log(shoeSize('Presbury Wamae'));


function teamColors(teamName){
    const game = gameObject();

    if (game.home.teamName === teamName) {
        return game.home.colors;
    }

    if (game.away.teamName === teamName) {
        return game.away.colors;
    }
    return "Team not found";
}
console.log(teamColors("Charlotte Hornets"));


function teamNames(){
    const game = gameObject();

    return [game.home.teamName, game.away.teamName];
}
console.log(teamNames());

function playerNumbers(teamName){
    const game = gameObject();
    let teamPlayers;
    if (game.home.teamName === teamName) {
        teamPlayers = game.home.playerName;
    } else if (game.away.teamName === teamName) {
        teamPlayers = game.away.playerName;
    } else {
        return "Team not found";
    }
    return Object.values(teamPlayers).map(player => player.number);
}
console.log(playerNumbers("Charlotte Hornets"));

function playerStats(playerName){
    const game = gameObject();
    
    if (game.home.playerName[playerName]) {
        return game.home.playerName[playerName];
    }

    if (game.away.playerName[playerName]) {
        return game.away.playerName[playerName];
    } 

    return "Player not found";
}
console.log(playerStats("Reggie Evans"));


function bigShoeRebounds(){
    const game = gameObject();
    let largestShoe = 0;
    let playerWithLargestShoe = null;

    for (const player in game.home.playerName) {
        if (game.home.playerName[player].shoe > largestShoe) {
          largestShoe = game.home.playerName[player].shoe;
          playerWithLargestShoe = game.home.playerName[player];
        }
      }

      for (const player in game.away.playerName) {
        if (game.away.playerName[player].shoe > largestShoe) {
          largestShoe = game.away.playerName[player].shoe;
          playerWithLargestShoe = game.away.playerName[player];
        }
      }

      return playerWithLargestShoe ? playerWithLargestShoe.rebounds : "Player not found";
}
console.log(bigShoeRebounds());

function mostPointsScored(){
    const game = gameObject();
    let topScorer = { name: null, points: 0 };

    for (let player in game.home.playerName) {
        if (game.home.playerName[player].points > topScorer.points) {
          topScorer = { name: player, points: game.home.playerName[player].points };
        }
      }

      for (let player in game.away.playerName) {
        if (game.away.playerName[player].points > topScorer.points) {
          topScorer = { name: player, points: game.away.playerName[player].points };
        }
      }
      return topScorer.name;
    
}
console.log(mostPointsScored());

function winningTeam(){
    const game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;
    
    for (let player in game.home.playerName) {
      homePoints += game.home.playerName[player].points;
    }
    
    for (let player in game.away.playerName) {
      awayPoints += game.away.playerName[player].points;
    }
    
    if (homePoints > awayPoints) {
      return game.home.teamName;
    } else if (awayPoints > homePoints) {
      return game.away.teamName;
    } else {
      return "It's a tie!";
    }
  
}
console.log(winningTeam());

function playerWithLongestName(){
    const game = gameObject();
    let longestName = "";
  
    for (const player in game.home.playerName) {
      if (player.length > longestName.length) {
        longestName = player;
      }
    }
    
    for (const player in game.away.playerName) {
      if (player.length > longestName.length) {
        longestName = player;
      }
    }
    
    return longestName;
}
console.log(playerWithLongestName());

function playerWithLongestName(){
        const game = gameObject();
        let longestName = "";
        
        for (const player in game.home.playerName) {
          if (player.length > longestName.length) {
            longestName = player;
          }
        }
        
        for (const player in game.away.playerName) {
          if (player.length > longestName.length) {
            longestName = player;
          }
        }
        
        return longestName;
}

function doesLongNameStealATon() {
    const game = gameObject();
    
    const longestNamePlayer = playerWithLongestName();
    
    let longNameSteals = 0;
    if (game.home.playerName[longestNamePlayer]) {
      longNameSteals = game.home.playerName[longestNamePlayer].steals;
    } else if (game.away.playerName[longestNamePlayer]) {
      longNameSteals = game.away.playerName[longestNamePlayer].steals;
    }
    
    let maxSteals = 0;
    for (let team in game) {
      for (let player in game[team].playerName) {
        const steals = game[team].playerName[player].steals;
        if (steals > maxSteals) {
          maxSteals = steals;
        }
      }
    }
    return longNameSteals === maxSteals;
}
console.log(doesLongNameStealATon());