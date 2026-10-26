// Keep your original data function exactly as it was
function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 },
                "Reggie Evens": { number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7 },
                "Brook Lopez": { number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15 },
                "Mason Plumlee": { number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5 },
                "Jason Terry": { number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1 }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": { number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 },
                "Bismack Biyombo": { number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10 },
                "DeSagna Diop": { number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5 },
                "Ben Gordon": { number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0 },
                "Brendan Hayword": { number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12 }
            }
        }
    };
}

// --- HELPER FUNCTIONS (Fixes the undefined 'home' bugs) ---

function getAllPlayers() {
    // Invoke gameObject() as a function to get the actual data
    const data = gameObject();
    return Object.assign({}, data.home.players, data.away.players);
}

function findTeamByTeamName(teamName) {
    const data = gameObject();
    if (data.home.teamName === teamName) return data.home;
    if (data.away.teamName === teamName) return data.away;
    return null;
}

function findPlayerByName(playerName) {
    const players = getAllPlayers();
    return players[playerName] || null;
}

// --- REQUIRED LAB EXPORTS ---

// 1. numPointsScored
export function numPointsScored(playerName) {
    const player = findPlayerByName(playerName);
    return player ? player.points : 0;
}

// 2. shoeSize
export function shoeSize(playerName) {
    const player = findPlayerByName(playerName);
    return player ? player.shoe : 0;
}

// 3. teamColors
export function teamColors(teamName) {
    const team = findTeamByTeamName(teamName);
    return team ? team.colors : [];
}

// 4. teamNames
export function teamNames() {
    const data = gameObject();
    return [data.home.teamName, data.away.teamName];
}

// 5. playerNumbers
export function playerNumbers(teamName) {
    const team = findTeamByTeamName(teamName);
    if (!team) return [];
    
    const numbers = [];
    for (const key in team.players) {
        numbers.push(team.players[key].number);
    }
    return numbers;
}

// 6. playerStats
export function playerStats(playerName) {
    const player = findPlayerByName(playerName);
    // Uses Object.assign to avoid the old Babel spread operator syntax error
    return player ? Object.assign({}, player) : null;
}

// 7. bigShoeRebounds
export function bigShoeRebounds() {
    const players = getAllPlayers();
    let biggestShoeSize = 0;
    let reboundsForBiggestShoe = 0;

    for (const name in players) {
        if (players[name].shoe > biggestShoeSize) {
            biggestShoeSize = players[name].shoe;
            reboundsForBiggestShoe = players[name].rebounds;
        }
    }
    return reboundsForBiggestShoe;
}
