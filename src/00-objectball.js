function gameObject() {
    return {
        home: {
            teamName:"Brooklyn Nets",
            colors:["Black,White"],
            players:{
                "Player1":{points: 10, assists: 5, steals:2},
                "Player2":{points: 20, assists:7, steals: 3}
            }

        },
        away: {
            teamName:"Charlotte Hornets",
            colors:["Turquoise","Purple"],
            players:{
                "player3":{points: 15, assists: 6, steals: 1},
                "player4":{points: 24, assists: 8, steals:4}
            }
        }
    };
    
}
console.log(gameObject());

function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
}
console.log(homeTeamName());

function homeTeamName(){
    return gameObject()["home"]["teamName"];
}
console.log(homeTeamName());


function goodPRactices(){
    let game = gameObject();
    for(let gameKey in game){
        debugger;
        let data = teamObj.player;
        for(let key in data){
            debugger;
        }
    }
}


function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 },
          "Reggie Evans": { number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7 },
          "Brook Lopez": { number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15 },
          "Mason Plumlee": { number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5 }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": { number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 },
          "Bismak Biyombo": { number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10 },
          "DeSagna Diop": { number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5 }
        }
      }
    };
  }
console.log(gameObject);

// Retrieving homeTeamName
function homeTeamName() {
    const obj = gameObject();
    return obj.home.teamName;

  }
  console.log(homeTeamName());

//retrieve stats for a particular player
function playerStats(playerName) {
    const obj = gameObject();
  
    for (let team in obj) {
      const players = obj[team].players;
      if (players[playerName]) {
        return players[playerName];
      }
    }
  
    return null; // Player not found
  }
  console.log(playerStats("Alan Anderson"));
  
  //find player with the highest points
  function gameObject(){ 
    return{
      home:{
        teamName: "Brooklyn Nets",
        players:{
          "Alan Anderson": { points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 },
          "Reggie Evans": { points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7 }
        }
      },
      away:{
        teamName:"Charlotte Hornets",
        players:{
          "Jeff Adrien": {points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 },
        "Bismak Biyombo": { points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10 },
        }
      }
    };
    
  }
  //defining the function mostPointsScored()
  function mostPointsScored() {
     const obj = gameObject();
      let maxPoints = 0; 
      let topPlayer = "";

       for (let team in obj) { 
        const players = obj[team].players; 
        
        for (let player in players) { 
          let playerPoints = players[player].points; 

          if (playerPoints > maxPoints) { 
            maxPoints = playerPoints; 
            topPlayer = player; 
          } 
        } 
      } 
      return topPlayer;
     }
console.log(mostPointsScored());

//retrieve colors of a given team
function teamColors(teamName) {
  const obj = gameObject();
 

  for (let team in obj) {

    if (obj[team].teamName === teamName) {
      return obj[team].colors;
    }
  }

  return null; // Team not found
}
console.log(teamColors("Brooklyn Nets"));
console.log(teamColors("Charlotte Hornets"));
console.log(teamColors("Unknown Team"));

//Identify player with the longest name
function playerWithLongestName() {
  const obj = gameObject();
  let longestName = "";

  for (let team in obj) {
    const players = obj[team].players;
    for (let player in players) {
      if (player.length > longestName.length) {
        longestName = player;
      }
    }
  }

  return longestName;
}
console.log("player with the longest name:",playerWithLongestName());

function playerWithMostSteals() { 
   const obj = gameObject();
    let maxSteals = 0;
     let topPlayer = "";
      for (let team in obj) {
        const players = obj[team].players;
         for (let player in players) {
           if (players[player].steals > maxSteals) { 
            maxSteals = players[player].steals; 
            topPlayer = player;
           } 
          } 
        } return topPlayer;
       }
//Check if the player with the longest name has the most steals
function doesLongNameStealATon() {
  const longestNamePlayer = playerWithLongestName();
  const mostStealsPlayer = playerWithMostSteals();
return longestNamePlayer=== mostStealsPlayer;
}
console.log("Player with longest name:",playerWithLongestName());
console.log("Player with the moststeals:", playerWithMostSteals());
console.log("doesLongNameStealATon?",doesLongNameStealATon());

//Calculating total points for each team
function teamWithMostPoints() {
  const obj = gameObject();
  let teamPoints = {};

  for (let team in obj){
    let totalPoints = 0;
    const players = obj[team].players;
     
    for(let player in players){
      totalPoints += players[player].points;
    }
    teamPoints[obj[team].teamName] = totalPoints;
  }
  let maxPoints = 0;
  let topTeam = "";

  for(let team in teamPoints){
    if(teamPoints[team] > maxPoints){
      maxPoints = teamPoints[team];
    topTeam = team;
  }
  }
  return topTeam;
}
console.log("Team with the most points:", teamWithMostPoints());