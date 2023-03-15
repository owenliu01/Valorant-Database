import { useState } from 'react';
import './App.css';
import Axios from 'axios'

function App() {
  //Table
  const [field, setField] = useState("");
  const [constraint, setConstraint] = useState("");
  const [tableList, setTableList] = useState([]);
  const [selectList, setSelectList] = useState([]);
  const [tableName, setTableName] = useState("");
  const [tableJoin, setTableJoin] = useState([]);
  const [tableAggregate, setTableAggregate] = useState([]);
  const [tableNestedAggregate, setTableNestedAggregate] = useState([]);
  const [tableDivision, setTableDivision] = useState([]);

  //Player
  const [playerID, setPlayerID] = useState(0);
  const [playerName, setPlayerName] = useState("");
  const [playerList, setPlayerList] = useState([]);
  //Update PlayerName
  const [newPlayerName, setNewPlayerName] = useState("");


  //SpentVP 
  const [transactionID, setTransaction_ID] = useState(0);
  const [itemName, setItemName] = useState("");
  const [amountSpent, setAmountSpent] = useState(0);
  const [purchaseAmount, setPurchaseAmount] = useState(0);
  const [spentVPList, setSpentVPList] = useState([]);
  //Update SpentVP
  const [newAmountSpent, setNewAmountSpent] = useState(0);
  const [newItemName, setNewItemName] = useState("");


  //Select Ranked
  const [rankedMatchNumber, setRankedMatchNumber] = useState(0);
  const [gameModeName, setGamemodeName] = useState("");
  const [matchID, setMatchID] = useState(0);
  const [selectRankedList, setSelectRankedList] = useState([]);

  //Select Casual
  const [casualMatchNumber, setCasualMatchNumber] = useState(0);
  const [selectCasualList, setSelectCasualList] = useState([]);

  //QueueMatch
  const [avgPlayerRank, setAvgPlayerRank] = useState("");
  const [roundsPlayed, setRoundsPlayed] = useState(0);
  const [matchStatsID, setMatchStatID] = useState(0);
  const [queueMatchList, setQueueMatchList] = useState([]);
  //update
  const [newRoundsPlayed, setNewRoundsPlayed] = useState(0);

  //MapPlayedOn
  const [mapName, setMapName] = useState("");
  const [numSites, setNumSites] = useState(0);
  const [winRate, setWinRate] = useState(0);
  const [datePlayed, setDatePlayed] = useState("");
  const [mapPlayedOnList, setMapPlayedOnList] = useState([]);

  //wasPenalized
  const [penaltyID, setPenaltyID] = useState(0);
  const [duration, setDuration] = useState(0);
  const [penaltyType, setPenaltyType] = useState("");
  const [numOffences, setNumOffences] = useState(0);
  const [wasPenalizedList, setWasPenalizedList] = useState([]);

  //ContainsAgent
  const [agentName, setAgentName] = useState("");
  const [teamComposition, setTeamComposition] = useState("");
  const [containsAgentList, setContainsAgentList] = useState([]);

  //PicksAgent
  const [pickRate, setPickRate] = useState(0);
  const [agentRole, setAgentRole] = useState("");
  const [picksAgentList, setPicksAgentList] = useState([]);

  //DisplayPlayerStats
  const [statID, setStatID] = useState(0);
  const [totalKills, setTotalKills] = useState(0);
  const [totalDeaths, setTotalDeaths] = useState(0);
  const [totalAssists, setTotalAssists] = useState(0);
  const [playerRank, setPlayerRank] = useState("");
  const [avgCombatScore, setAvgCombatScore] = useState(0);
  const [avgDmgPerRound, setAvgDmgPerRound] = useState(0);
  const [avgEconScore, setAvgEconScore] = useState(0);
  const [avgHSAccuracy, setAvgHSAccuracy] = useState(0);
  const [avgUtilityUsage, setAvgUtilityUsage] = useState(0);
  const [avgFirstToDie, setAvgFirstToDie] = useState(0);
  const [avgFirstBloods, setAvgFirstBloods] = useState(0);
  const [displayPlayerStatsList, setDisplayPlayerStatsList] = useState([]);

  //GenerateMatchStats
  const [playerNames, setPlayerNames] = useState("");
  const [matchScore, setMatchScore] = useState("");
  const [matchMVP, setMatchMVP] = useState("");
  const [matchKills, setMatchKills] = useState(0);
  const [generateMatchStatsList, setGenerateMatchStatList] = useState([]);

  const [avgMatchKills, setAvgMatchKills] = useState([]);

  // Player Table Insertion
  const addPlayer = () => {
    Axios.post("http://localhost:4999/insertPlayer", {
      playerID: playerID,
      playerName: playerName,
      // tableName: tableName,
    }).then(() => {
      console.log("Successfully Added Player");
    });
  };

  // SpentVP Table Insertion

  const addSpentVP = () => {
    Axios.post("http://localhost:4999/insertSpentVP", {
      transactionID: transactionID,
      itemName: itemName,
      amountSpent: amountSpent,
    }).then(() => {
      console.log("successfully added SpentVP");
    });
  };

  //Player Purchased Valorant Points Insertion

  const addPurchasedVP = () => {
    Axios.post("http://localhost:4999/insertPurchasedVP", {
      playerID: playerID,
      transactionID: transactionID,
      vpPurchaseAmount: purchaseAmount,
    }).then(() => {
      console.log("successfully added PurchasedVP");
    });
  };

  //Player_Selects_GameMode_Ranked
  const addSelectRanked = () => {
    Axios.post("http://localhost:4999/insertSelectRanked", {
      rankedMatchNumber: rankedMatchNumber,
      gameModeName: gameModeName,
      playerID: playerID,
      matchID: matchID,
    }).then(() => {
      console.log("Successfully added SelectRanked");
    });
  };

  //Player_Selects_GameMode_Casual
  const addSelectedCasual = () => {
    Axios.post("http://localhost:4999/insertSelectCasual", {
      casualMatchNumber: casualMatchNumber,
      gameModeName: gameModeName,
      playerID: playerID,
      matchID: matchID,
    }).then(() => {
      console.log("successfully added SelectCasual");
    });
  };

  //Casual Queue Match
  const addCasualQueueMatch = () => {
    Axios.post("http://localhost:4999/insertCasualQueueMatch", {
      matchID: matchID,
      avgPlayerRank: avgPlayerRank,
      roundsPlayed: roundsPlayed,
      matchStatsID: matchStatsID,
      gameModeName: gameModeName,
      casualMatchNumber: casualMatchNumber,
      rankedMatchNumber: rankedMatchNumber,
    }).then(() => {
      console.log("Successfully added CasualQueueMatch");
    });
  };

  //Queue Match
  const addRankedQueueMatch = () => {
    Axios.post("http://localhost:4999/insertRankedQueueMatch", {
      matchID: matchID,
      avgPlayerRank: avgPlayerRank,
      roundsPlayed: roundsPlayed,
      matchStatsID: matchStatsID,
      gameModeName: gameModeName,
      casualMatchNumber: casualMatchNumber,
      rankedMatchNumber: rankedMatchNumber,
    }).then(() => {
      console.log("Successfully added RankedQueueMatch");
    });
  };




  //Map_PlayedOn
  const addMapPlayedOn = () => {
    Axios.post("http://localhost:4999/insertMapPlayedOn", {
      matchID: matchID,
      mapName: mapName,
      numSites: numSites,
      winRate: winRate,
      datePlayed: datePlayed,
    }).then(() => {
      console.log("successfully added MapPlayedOn");
    });
  };

  //Match_was_Penalized
  const addMatchWasPenalized = () => {
    Axios.post("http://localhost:4999/insertMatchWasPenalized", {
      penaltyID: penaltyID,
      playerName: playerName,
      duration: duration,
      penaltyType: penaltyType,
      numOffences: numOffences,
      matchID: matchID,
    }).then(() => {
      console.log("successfully added MatchWasPenalized");
    });
  };

  //Match_Contains_Agent
  const addMatchContainsAgent = () => {
    Axios.post("http://localhost:4999/insertContainsAgent", {
      matchID: matchID,
      agentName: agentName,
      teamComposition: teamComposition,
    }).then(() => {
      console.log("Successfully added ContainsAgent");
    });
  };

  //Picks_Agent
  const addPicksAgent = () => {
    Axios.post("http://localhost:4999/insertPicksAgent", {
      agentName: agentName,
      pickRate: pickRate,
      agentRole: agentRole,
      playerID: playerID
    }).then(() => {
      console.log("successfully added PicksAgent");
    });
  };

  //Display_PlayerStats
  const addDisplayPlayerStats = () => {
    Axios.post("http://localhost:4999/insertDisplayPlayerStats", {
      statID: statID,
      playerID: playerID,
      totalKills: totalKills,
      totalDeaths: totalDeaths,
      totalAssists: totalAssists,
      playerRank: playerRank,
      avgCombatScore: avgCombatScore,
      avgDmgPerRound: avgDmgPerRound,
      avgEconScore: avgEconScore,
      avgHSAccuracy: avgHSAccuracy,
      avgUtilityUsage: avgUtilityUsage,
      avgFirstToDie: avgFirstToDie,
      avgFirstBloods: avgFirstBloods,
    }).then(() => {
      console.log("successfully added DisplayPlayerStats");
    });
  };

  //Generate_MatchStats
  const addGenerateMatchStats = () => {
    Axios.post("http://localhost:4999/insertMatchStats", {
      matchStatsID: matchStatsID,
      playerNames: playerNames,
      avgPlayerRank: avgPlayerRank,
      matchScore: matchScore,
      matchMVP: matchMVP,
      avgCombatScore: avgCombatScore,
      matchKills: matchKills,
      gameModeName: gameModeName,
    }).then(() => {
      console.log("successfully added GenerateMatchStats");
    });
  };

  //Player_Playsin_Match
  const addPlayerPlaysinMatch = () => {
    Axios.post("http://localhost:4999/insertPlaysinMatch", {
      playerID: playerID,
      matchID: matchID,
      matchStatsID: matchStatsID,
    }).then(() => {
      console.log("successfully added PlaysinMatch");
    });
  };

  //--------------UPDATE-------------------
  //Player table
  const updatePlayerName = (Player_ID) => {
    Axios.put("http://localhost:4999/updatePlayerName", {
      playerName: newPlayerName,
      playerID: playerID,
    }).then(() => {
      setPlayerList(playerList.map((val) => {
        return val.Player_ID == playerID ? { playerID: val.Player_ID, playerName: newPlayerName } : val
      }));
      console.log("successfully updated PlayerName");
    });
  };

  //Spent_Valorant_Points
  const updateSpentVP = (Transaction_ID) => {
    Axios.put("http://localhost:4999/updateSpentVP", {
      transactionID: transactionID,
      itemName: newItemName,
      amountSpent: newAmountSpent,
    }).then(() => {
      setSpentVPList(spentVPList.map((val) => {
        return val.Transaction_ID == transactionID ? { transactionID: val.Transaction_ID, itemName: newItemName, amountSpent: newAmountSpent } : val
      }));
      console.log("Successfully updated Spent VP");
    });
  };

  //Queue_Match
  const updateQueueMatch = (Match_ID) => {
    Axios.put("http://localhost:4999/updateQueueMatch", {
      matchID: matchID,
      roundsPlayed: newRoundsPlayed,
    }).then(() => {
      setQueueMatchList(queueMatchList.map((val) => {
        return val.Match_ID == matchID ? { matchID: val.Match_ID, roundsPlayed: newRoundsPlayed } : val
      }));
      console.log("successfully updated Rounds Played");
    });
  };


  // -----------  DELETE -------------
  const deletePlayer = (playerID) => {
    Axios.delete(`http://localhost:4999/deletePlayer/${playerID}`).then((res) => {
      setPlayerList(playerList.filter((val) => {
        return val.playerID == playerID;
      }))
    });
  };

  const deleteQueueMatch = (matchID) => {
    Axios.delete(`http://localhost:4999/deleteMatch/${matchID}`).then((res) => {
      setQueueMatchList(queueMatchList.filter((val) => {
        return val.matchID == matchID;
      }))
    });
  };

  // ------ PROJECTION ------

  const showTable = () => {
    Axios.post("http://localhost:4999/showTable", {
      tableName: tableName,
      field: field,
    }).then((response) => {
      setTableList(response.data);
      console.log(response.data);
      console.log("Showing Table");
    });
  };

  //---------SELECTION------------
  const selectTable = () => {
    Axios.post("http://localhost:4999/selectTable", {
      tableName: tableName,
      field: field,
      constraint: constraint,
    }).then((response) => {
      setSelectList(response.data);
      console.log(response);
      console.log("Showing Table");
    });
  };

  //JOIN QUERY
  const getJoin = () => {
    Axios.get("http://localhost:4999/getJoin", {
    }).then((response) => {
      setTableJoin(response.data);
      console.log(response);
    });
  }

  //Aggregation Query
  const getAggregate = () => {
    Axios.get("http://localhost:4999/getAggregate", {
    }).then((response) => {
      setTableAggregate(response.data);
      console.log(response.data);
    });
  }

  //Nested Aggregation Query
  const getNestedAggregate = () => {
    Axios.get("http://localhost:4999/getNestedAggregate", {
    }).then((response) => {
      setTableNestedAggregate(response.data);
      console.log(response.data);
    });
  }

  //Division Query
  const getDivision = () => {
    Axios.get("http://localhost:4999/getDivision", {
    }).then((response) => {
      setTableDivision(response.data);
      console.log(response.data);
    });
  }

  return (
    <div className="App" >
      <div className="player">
        <label>Player_ID:</label>
        <input
          type="number"
          onChange={(event) => {
            setPlayerID(event.target.value);
          }}
        />
        <label>Player Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setPlayerName(event.target.value);
          }}
        />
        <button onClick={addPlayer}>Add Player</button>
      </div>
      <div className="showTable">
        <label>Table Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setTableName(event.target.value);
          }}
        />
        <label> Field </label>
        <input
          type="text"
          onChange={(event) => {
            setField(event.target.value);
          }}
        />
        <button onClick={showTable}>Show</button>
        {tableList.map((val, key) => {
          return (
            <div className="projectField">
              <h3>Val is :
                {val.player_id} {val.player_name}
                {val.match_id} {val.avg_player_ranking} {val.rounds_played} {val.match_stats_id} {val.gamemode_name} {val.casual_match_number} {val.ranked_match_number}
                {val.transaction_id} {val.item_name} {val.amount_spent}
                {val.vp_purchase_amount}
                {val.map_name} {val.number_sites} {val.winrate} {val.date_played}
                {val.player_names} {val.avg_player_rank} {val.match_score} {val.match_mvp} {val.avg_combat_score} {val.match_kills}
                {val.agent_names} {val.team_composition}
                {val.agent_name} {val.pick_rate} {val.agent_role}
                {val.stat_id}{val.total_kills}{val.total_deaths}{val.total_assists}{val.player_rank}{val.avg_damage_per_round}{val.avg_econ_score}{val.avg_utility_usage}{val.avg_first_to_die}{val.first_bloods}
                {val.penalty_id} {val.duration} {val.penalty_type} {val.number_offences}

              </h3>
            </div>
          );
        })}
      </div>

      <div className="selectTable">
        <label>Table Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setTableName(event.target.value);
          }}
        />
        <label>Field:</label>
        <input
          type="text"
          onChange={(event) => {
            setField(event.target.value);
          }}
        />
        <label>Constraint:</label>
        <input
          type="text"
          onChange={(event) => {
            setConstraint(event.target.value);
          }}
        />
        <button onClick={selectTable}>Select</button>
        {selectList.map((val, key) => {
          return (
            <div className="projectConstraint">
              <h3>Selecting {field} with condition {constraint}:
                {val.player_id} {val.player_name}
                {val.match_id} {val.avg_player_ranking} {val.rounds_played} {val.match_stats_id} {val.gamemode_name} {val.casual_match_number} {val.ranked_match_number}
                {val.transaction_id} {val.item_name} {val.amount_spent}
                {val.vp_purchase_amount}
                {val.map_name} {val.number_sites} {val.winrate} {val.date_played}
                {val.player_names} {val.avg_player_rank} {val.match_score} {val.match_mvp} {val.avg_combat_score} {val.match_kills}
                {val.agent_names} {val.team_composition}
                {val.agent_name} {val.pick_rate} {val.agent_role}
                {val.stat_id}{val.total_kills}{val.total_deaths}{val.total_assists}{val.player_rank}{val.avg_damage_per_round}{val.avg_econ_score}{val.avg_utility_usage}{val.avg_first_to_die}{val.first_bloods}
                {val.penalty_id} {val.duration} {val.penalty_type} {val.number_offences}</h3>
            </div>
          );
        })}
      </div>

      <div className="playerPurchasedVP">
        <label>Player ID:</label>
        <input
          type="number"
          onChange={(event) => {
            setPlayerID(event.target.value);
          }}
        />
        <label>Transaction ID:</label>
        <input
          type="number"
          onChange={(event) => {
            setTransaction_ID(event.target.value);
          }}
        />
        <label>Valorant Point Purchase Amount:</label>
        <input
          type="number"
          onChange={(event) => {
            setPurchaseAmount(event.target.value);
          }}
        />
        <button onClick={addPurchasedVP}>Add PlayerPurchasedVP</button>
      </div>

      <div className="spentVP">
        <label>Transaction ID:</label>
        <input
          type="number"
          onChange={(event) => {
            setTransaction_ID(event.target.value);
          }}
        />
        <label>Item Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setItemName(event.target.value);
          }}
        />
        <label>Amount Spent:</label>
        <input
          type="number"
          onChange={(event) => {
            setAmountSpent(event.target.value);
          }}
        />
        <button onClick={addSpentVP}>Add SpentVP</button>
      </div>

      <div className="selectsRanked">
        <label>Player ID:</label>
        <input
          type="number"
          onChange={(event) => {
            setPlayerID(event.target.value);
          }}
        />
        <label>Gamemode Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setGamemodeName(event.target.value);
          }}
        />
        <label>Ranked Match #:</label>
        <input
          type="number"
          onChange={(event) => {
            setRankedMatchNumber(event.target.value);
          }}
        />
        <label>Match ID:</label>
        <input
          type="number"
          onChange={(event) => {
            setMatchID(event.target.value);
          }}
        />
        <button onClick={addSelectRanked}>Add Ranked Match</button>
      </div>

      <div className="selectsCasual">
        <label>Player ID:</label>
        <input
          type="number"
          onChange={(event) => {
            setPlayerID(event.target.value);
          }}
        />
        <label>Gamemode Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setGamemodeName(event.target.value);
          }}
        />
        <label>Casual Match #:</label>
        <input
          type="number"
          onChange={(event) => {
            setCasualMatchNumber(event.target.value);
          }}
        />
        <label>Match ID:</label>
        <input
          type="number"
          onChange={(event) => {
            setMatchID(event.target.value);
          }}
        />
        <button onClick={addSelectedCasual}>Add Casual Match</button>
      </div>

      <div className="queueMatch">
        <label>Match ID:</label>
        <input
          type="number"
          onChange={(event) => {
            setMatchID(event.target.value);
          }}
        />
        <label>Avg Player Ranking:</label>
        <input
          type="text"
          onChange={(event) => {
            setAvgPlayerRank(event.target.value);
          }}
        />
        <label>Rounds Played:</label>
        <input
          type="number"
          onChange={(event) => {
            setRoundsPlayed(event.target.value);
          }}
        />
        <label>Match Stat ID:</label>
        <input
          type="number"
          onChange={(event) => {
            setMatchStatID(event.target.value);
          }}
        />
        <label>Gamemode Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setGamemodeName(event.target.value);
          }}
        />
        <label>Casual Match #:</label>
        <input
          type="number"
          onChange={(event) => {
            setCasualMatchNumber(event.target.value);
          }}
        />
        <label>Ranked Match #:</label>
        <input
          type="number"
          onChange={(event) => {
            setRankedMatchNumber(event.target.value);
          }}
        />
        <button onClick={addCasualQueueMatch}>Add Casual Queued Match</button>
        <button onClick={addRankedQueueMatch}>Add Ranked Queued Match</button>
      </div>

      <div className="mapPlayedOn">
        <label>Match ID:</label>
        <input
          type="number"
          onChange={(event) => {
            setMatchID(event.target.value);
          }}
        />
        <label>Map Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setMapName(event.target.value);
          }}
        />
        <label># of sites:</label>
        <input
          type="number"
          onChange={(event) => {
            setNumSites(event.target.value);
          }}
        />
        <label>Win Rate:</label>
        <input
          type="number"
          onChange={(event) => {
            setWinRate(event.target.value);
          }}
        />

        <label>Date Played:</label>
        <input
          type="text"
          onChange={(event) => {
            setDatePlayed(event.target.value);
          }}
        />
        <button onClick={addMapPlayedOn}>Add Map Played On</button>
      </div>

      <div className="matchWasPenalized">
        <label>Penalty ID:</label>
        <input
          type="number"
          onChange={(event) => {
            setPenaltyID(event.target.value);
          }}
        />
        <label>Player Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setPlayerName(event.target.value);
          }}
        />
        <label>Duration:</label>
        <input
          type="number"
          onChange={(event) => {
            setDuration(event.target.value);
          }}
        />
        <label>Penalty Type:</label>
        <input
          type="text"
          onChange={(event) => {
            setPenaltyType(event.target.value);
          }}
        />
        <label>Number of Offences:</label>
        <input
          type="number"
          onChange={(event) => {
            setNumOffences(event.target.value);
          }}
        />
        <label>Match ID:</label>
        <input
          type="number"
          onChange={(event) => {
            setMatchID(event.target.value);
          }}
        />
        <button onClick={addMatchWasPenalized}>Add Penalized Match</button>
      </div>

      <div className="matchContainsAgent">
        <label>Match ID:</label>
        <input
          type="number"
          onChange={(event) => {
            setMatchID(event.target.value);
          }}
        />
        <label>Agent Names:</label>
        <input
          type="text"
          onChange={(event) => {
            setAgentName(event.target.value);
          }}
        />
        <label>Team Composition</label>
        <input
          type="text"
          onChange={(event) => {
            setTeamComposition(event.target.value);
          }}
        />
        <button onClick={addMatchContainsAgent}>Add Match Contains Agent</button>
      </div>

      <div className="picksAgent">
        <label>Agent Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setAgentName(event.target.value);
          }}
        />
        <label>Pick Rate:</label>
        <input
          type="number"
          onChange={(event) => {
            setPickRate(event.target.value);
          }}
        />
        <label>Agent Role</label>
        <input
          type="text"
          onChange={(event) => {
            setAgentRole(event.target.value);
          }}
        />
        <label>Player ID</label>
        <input
          type="number"
          onChange={(event) => {
            setPlayerID(event.target.value);
          }}
        />
        <button onClick={addPicksAgent}>Add Picked Agent</button>
      </div>


      <div className="playerStats">
        <label>Stat ID:</label>
        <input
          type="number"
          onChange={(event) => {
            setStatID(event.target.value);
          }}
        />
        <label>Player ID:</label>
        <input
          type="number"
          onChange={(event) => {
            setPlayerID(event.target.value);
          }}
        />
        <label>Total Kills:</label>
        <input
          type="number"
          onChange={(event) => {
            setTotalKills(event.target.value);
          }}
        />
        <label>Total Deaths:</label>
        <input
          type="number"
          onChange={(event) => {
            setTotalDeaths(event.target.value);
          }}
        />
        <label>Total Assists:</label>
        <input
          type="number"
          onChange={(event) => {
            setTotalAssists(event.target.value);
          }}
        />
        <label>Player Rank:</label>
        <input
          type="text"
          onChange={(event) => {
            setPlayerRank(event.target.value);
          }}
        />
        <label>Avg Combat Score:</label>
        <input
          type="number"
          onChange={(event) => {
            setAvgCombatScore(event.target.value);
          }}
        />
        <label>Avg Damage Per Round:</label>
        <input
          type="number"
          onChange={(event) => {
            setAvgDmgPerRound(event.target.value);
          }}
        />
        <label>Avg Econ Score:</label>
        <input
          type="number"
          onChange={(event) => {
            setAvgEconScore(event.target.value);
          }}
        />
        <label>Avg Headshot Accuracy:</label>
        <input
          type="number"
          onChange={(event) => {
            setAvgHSAccuracy(event.target.value);
          }}
        />
        <label>Avg Utility Usage:</label>
        <input
          type="number"
          onChange={(event) => {
            setAvgUtilityUsage(event.target.value);
          }}
        />
        <label>Avg First to Die %:</label>
        <input
          type="number"
          onChange={(event) => {
            setAvgFirstToDie(event.target.value);
          }}
        />
        <label>Avg First Bloods:</label>
        <input
          type="number"
          onChange={(event) => {
            setAvgFirstBloods(event.target.value);
          }}
        />
        <button onClick={addDisplayPlayerStats}>Add Player Stats</button>
      </div>

      <div className="generateMatchStats">
        <label>Match Stat ID:</label>
        <input
          type="number"
          onChange={(event) => {
            setMatchStatID(event.target.value);
          }}
        />
        <label>Player Names:</label>
        <input
          type="text"
          onChange={(event) => {
            setPlayerNames(event.target.value);
          }}
        />
        <label>Avg Player Rank:</label>
        <input
          type="text"
          onChange={(event) => {
            setAvgPlayerRank(event.target.value);
          }}
        />
        <label>Match Score:</label>
        <input
          type="text"
          onChange={(event) => {
            setMatchScore(event.target.value);
          }}
        />
        <label>Match MVP:</label>
        <input
          type="text"
          onChange={(event) => {
            setMatchMVP(event.target.value);
          }}
        />
        <label>Avg Combat Score:</label>
        <input
          type="number"
          onChange={(event) => {
            setAvgCombatScore(event.target.value);
          }}
        />
        <label>Match Kills:</label>
        <input
          type="text"
          onChange={(event) => {
            setMatchKills(event.target.value);
          }}
        />
        <label>Gamemode Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setGamemodeName(event.target.value);
          }}
        />
        <button onClick={addGenerateMatchStats}>Add Generated Match stats</button>
      </div>

      <div className="playsInMatch">
        <label>Player ID:</label>
        <input
          type="number"
          onChange={(event) => {
            setPlayerID(event.target.value);
          }}
        />
        <label>Match ID:</label>
        <input
          type="number"
          onChange={(event) => {
            setMatchID(event.target.value);
          }}
        />
        <label>Match Stat ID:</label>
        <input
          type="number"
          onChange={(event) => {
            setMatchStatID(event.target.value);
          }}
        />
        <button onClick={addPlayerPlaysinMatch}>Add Player Plays in Match</button>
      </div>
      <div className="updatePlayerName">
        <label>Player ID:</label>
        <input
          type="number"
          onChange={(event) => {
            setPlayerID(event.target.value);
          }}
        />
        <label>Player Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setNewPlayerName(event.target.value);
          }}
        />
        <button onClick={updatePlayerName}>Update Player Name</button>
      </div>

      <div className="updateSpentVP">
        <label>Transaction ID:</label>
        <input
          type="number"
          onChange={(event) => {
            setTransaction_ID(event.target.value);
          }}
        />
        <label>Amount Spent:</label>
        <input
          type="number"
          onChange={(event) => {
            setNewAmountSpent(event.target.value);
          }}
        />
        <label>Item Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setNewItemName(event.target.value);
          }}
        />
        <button onClick={updateSpentVP}>Update Item Name and Amount Spent</button>
      </div>

      <div className="updateQueueMatch">
        <label>Match ID:</label>
        <input
          type="number"
          onChange={(event) => {
            setMatchID(event.target.value);
          }}
        />
        <label>Rounds Played:</label>
        <input
          type="number"
          onChange={(event) => {
            setNewRoundsPlayed(event.target.value);
          }}
        />
        <button onClick={updateQueueMatch}>Update Rounds Played</button>
      </div>

      <div className="deletePlayer">
        <input type="number"
          onChange={(event) => {
            setPlayerID(event.target.value);
          }}
        />
        <button
          onClick={() => {

            deletePlayer(playerID);
          }}>Delete Player</button>
      </div>
      <div className="deleteQueueMatch">
        <input type="number"
          onChange={(event) => {
            setMatchID(event.target.value);
          }}
        />
        <button
          onClick={() => {
            deleteQueueMatch(matchID);
          }}>Delete Queue Match</button>
      </div>
      <div className="JoinPlayerDisplayStats">
        <button onClick={getJoin}>Players kills greater 200</button>
        {tableJoin.map((val, key) => {
          return (
            <div className="joinPlayerStats">
              <h3> Player ID: {val.player_id} Total Kills: {val.total_kills} Player Name: {val.player_name}</h3>
            </div>
          );
        })}
      </div>


      <div className="AggregateMapPlayedOn">
        <button onClick={getAggregate}>Average Kills from matches</button>
        {tableAggregate.map((val, key) => {
          return (
            <div className="aggregateMapPlayedOn">
              <h3>Average match kills: {val.avgMatchKills}</h3>
              <h3></h3>
            </div>
          );
        })}
      </div>


      <div className="NestedAggregatePenalty">
        <button onClick={getNestedAggregate}>Player's with max penalty duration greater than the average penalty duration</button>
        {tableNestedAggregate.map((val, key) => {
          return (
            <div className="nestedAggregate">
              <h3>Player Name: {val.player_name} Duration: {val.maxDuration} Count: {val.numberCount}</h3>
            </div>
          );
        })}
      </div>

      <div className="DivisionPlayerMVP">
        <button onClick={getDivision}>All Player's who received Match MVP's</button>
        {tableDivision.map((val, key) => {
          return (
            <div className="divisionPlayerMVP">
              <h3>{val.player_name}</h3>
            </div>
          );
        })}
      </div>

    </div>
  );
}
export default App;