const team = {
  _players: [
    {
    firstName: 'vishal',
    lastName: 'Menariya',
    age: 18
    },
    {
    firstName: 'suraj',
    lastName: 'Menariya',
    age: 21
    },
    {
    firstName: 'priyanka',
    lastName: 'Menariya',
    age: 24
    }  
  ],
  _games: [
    {
      opponent: 'priyanka',
      teamPoints: 8,
      opponentPoints: 2
    },
    {
      opponent: 'vishal',
      teamPoints: 10,
      opponentPoints: 5
    },
    {
      opponent: 'suraj',
      teamPoints: 8,
      opponentPoints: 2
    }
  ],
  get players() {
    if(this._players) {
      return this._players;
    }
  },
  get games() {
    if(this._games) {
      return this._games;
    }
  },
  addPlayer(newFirstName, newLastName, newAge) {
    const player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this._players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this._games.push(game);
  }
}

team.addPlayer('Bugs', 'Bunny', 75)
console.log(team.players)
team.addGame('Titans', 100, 98);
console.log(team.games);