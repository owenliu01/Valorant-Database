CREATE TABLE Player(
    Player_ID INT,
    Player_Name CHAR(20),
    PRIMARY KEY(Player_ID)
); CREATE TABLE Spent_Valorant_Points(
    Transaction_ID INT,
    Item_Name CHAR(50),
    Amount_Spent INT,
    PRIMARY KEY(Transaction_ID)
); CREATE TABLE Player_Purchased_Valorant_Points(
    Player_ID INT,
    Transaction_ID INT,
    VP_Purchase_Amount INT,
    FOREIGN KEY(Player_ID) REFERENCES Player(Player_ID) ON DELETE CASCADE,
    FOREIGN KEY(Transaction_ID) REFERENCES Spent_Valorant_Points(Transaction_ID) ON DELETE CASCADE
); CREATE TABLE Player_Selects_GameMode_Ranked(
    Ranked_Match_Number INT,
    GameMode_Name CHAR(20),
    Player_ID INT,
    Match_ID INT,
    PRIMARY KEY(Ranked_Match_Number),
    FOREIGN KEY(Player_ID) REFERENCES Player(Player_ID) ON DELETE CASCADE
); CREATE TABLE Player_Selects_GameMode_Casual(
    Casual_Match_Number INT,
    GameMode_Name CHAR(20),
    Player_ID INT,
    Match_ID INT,
    PRIMARY KEY(Casual_Match_Number),
    FOREIGN KEY(Player_ID) REFERENCES Player(Player_ID) ON DELETE CASCADE
); CREATE TABLE Generate_MatchStats(
    Match_Stats_ID INT,
    Player_Names CHAR(200),
    Avg_Player_Rank CHAR(10),
    Match_Score CHAR(10),
    Match_MVP CHAR(20),
    Avg_Combat_Score FLOAT,
    Match_Kills INT,
    GameMode_Name CHAR(20),
    PRIMARY KEY(Match_Stats_ID)
); CREATE TABLE Queue_Match(
    Match_ID INT,
    Avg_Player_Ranking CHAR(12),
    Rounds_Played INT,
    Match_Stats_ID INT,
    GameMode_Name CHAR(20),
    Casual_Match_Number INT,
    Ranked_Match_Number INT,
    PRIMARY KEY(Match_ID),
    FOREIGN KEY(Ranked_Match_Number) REFERENCES Player_Selects_GameMode_Ranked(Ranked_Match_Number) ON DELETE CASCADE,
    FOREIGN KEY(Casual_Match_Number) REFERENCES Player_Selects_GameMode_Casual(Casual_Match_Number) ON DELETE CASCADE,
    FOREIGN KEY(Match_Stats_ID) REFERENCES Generate_MatchStats(Match_Stats_ID) ON DELETE CASCADE
); CREATE TABLE Map_PlayedOn(
    Match_ID INT,
    Map_Name CHAR(20),
    Number_Sites INT,
    WinRate FLOAT,
    Date_Played DATE,
    FOREIGN KEY(Match_ID) REFERENCES Queue_Match(Match_ID) ON DELETE CASCADE
); CREATE TABLE Match_was_Penalized(
    Penalty_ID INT,
    Player_Name VARCHAR(250),
    Duration INT,
    Penalty_Type CHAR(25),
    Number_Offences INT,
    Match_ID INT,
    PRIMARY KEY(Penalty_ID),
    FOREIGN KEY(Match_ID) REFERENCES Queue_Match(Match_ID) ON DELETE CASCADE
); CREATE TABLE Picks_Agent(
    Agent_Name CHAR(20),
    Pick_Rate FLOAT,
    Agent_Role CHAR(10),
    Player_ID INT,
    FOREIGN KEY(Player_ID) REFERENCES Player(Player_ID) ON DELETE CASCADE
); CREATE TABLE Match_Contains_Agent(
    Match_ID INT,
    Agent_Names CHAR(250),
    Team_Composition CHAR(50),
    PRIMARY KEY(Match_ID),
    FOREIGN KEY(Match_ID) REFERENCES Queue_Match(Match_ID) ON DELETE CASCADE
); CREATE TABLE Display_PlayerStats(
    Stat_ID INT,
    Player_ID INT,
    Total_Kills INT,
    Total_Deaths INT,
    Total_Assists INT,
    Player_Rank CHAR(20),
    Avg_Combat_Score FLOAT,
    Avg_Damage_Per_Round FLOAT,
    Avg_Econ_Score FLOAT,
    Avg_Headshot_Accuracy FLOAT,
    Avg_Utility_Usage FLOAT,
    Avg_First_To_Die FLOAT,
    Avg_First_Bloods FLOAT,
    PRIMARY KEY(Stat_ID),
    FOREIGN KEY(Player_ID) REFERENCES Player(Player_ID) ON DELETE CASCADE
); CREATE TABLE Player_Playsin_Match(
    Player_ID INT,
    Match_ID INT,
    Match_Stats_ID INT,
    FOREIGN KEY(Player_ID) REFERENCES Player(Player_ID) ON DELETE CASCADE,
    FOREIGN KEY(Match_ID) REFERENCES Queue_Match(Match_ID) ON DELETE CASCADE,
    FOREIGN KEY(Match_Stats_ID) REFERENCES Generate_MatchStats(Match_Stats_ID) ON DELETE CASCADE
);

-------------------------- INSERTS -----------------------------
INSERT INTO Spent_Valorant_Points VALUES ("1", "Battle Pass", "20");
INSERT INTO Spent_Valorant_Points VALUES ("2", "MagePunk Spectre", "35");
INSERT INTO Spent_Valorant_Points VALUES ("3", "Gaia’s Vengeance Vandal", "35");
INSERT INTO Spent_Valorant_Points VALUES ("4", "Neptune Vandal", "35");
INSERT INTO Spent_Valorant_Points VALUES ("5", "Glitch-Pop Operator", "50");

INSERT INTO Player VALUES ("1", "Boo");
INSERT INTO Player VALUES ("2", "Goo");
INSERT INTO Player VALUES ("3", "Loo");
INSERT INTO Player VALUES ("4", "Poo");
INSERT INTO Player VALUES ("5", "Doo");

INSERT INTO Player_Purchased_Valorant_Points VALUES ("1", "1", "2050");
INSERT INTO Player_Purchased_Valorant_Points VALUES ("2", "2", "3650");
INSERT INTO Player_Purchased_Valorant_Points VALUES ("3", "3", "3650");
INSERT INTO Player_Purchased_Valorant_Points VALUES ("4", "4", "3650");
INSERT INTO Player_Purchased_Valorant_Points VALUES ("5", "5", "5350");

INSERT INTO Player_Selects_GameMode_Ranked VALUES ("1", "Ranked", "1", "1");
INSERT INTO Player_Selects_GameMode_Ranked VALUES ("2", "Ranked", "2", "1");
INSERT INTO Player_Selects_GameMode_Ranked VALUES ("3", "Ranked", "3", "1");
INSERT INTO Player_Selects_GameMode_Ranked VALUES ("4", "Ranked", "4", "1");
INSERT INTO Player_Selects_GameMode_Ranked VALUES ("5", "Ranked", "5", "1");

INSERT INTO Player_Selects_GameMode_Casual VALUES ("1","Unrated", "1", "2");
INSERT INTO Player_Selects_GameMode_Casual VALUES ("2","Unrated", "2", "2");
INSERT INTO Player_Selects_GameMode_Casual VALUES ("3","Unrated", "3", "2");
INSERT INTO Player_Selects_GameMode_Casual VALUES ("4","Unrated", "4", "2");
INSERT INTO Player_Selects_GameMode_Casual VALUES ("5","Unrated", "5", "2");

INSERT INTO Generate_MatchStats VALUES ("1", "Boo - Goo - Loo - Poo - Doo - Coo - Noo - Voo - Qoo - Zoo", "Gold 2", "12:14", "Boo", "350", "45:50","Ranked");
INSERT INTO Generate_MatchStats VALUES ("2", "Zee - Vee - Tee - Dee - Lee - See - Bee - Nee - Aee - Mee", "Bronze 2", "1:13", "Bee", "100", "12:70", "Unrated");
INSERT INTO Generate_MatchStats VALUES ("3", "Laa - Vaa - Taa - Daa - Saa - Baa - Naa - Aaa - Maa - Paa", "Immortal 1", "10:13", "Baa", "320", "56:64","Ranked");
INSERT INTO Generate_MatchStats VALUES ("4", "Bii - Vii - Lii - Tii - Dii - Sii - Nii - Zii - Aii - Cii", "Platinum 3", "13:9", "Bii", "278", "58:42","Ranked");
INSERT INTO Generate_MatchStats VALUES ("5", "Byy - Vyy - Zyy - Lyy - Dyy - Syy - Ayy - Kyy - Pyy - Qyy", "Radiant 10", "14:16", "Byy", "368", "74:85","Ranked");

INSERT INTO Queue_Match VALUES ("1", "Gold 2", "26", "1", "Ranked",NULL,"1");
INSERT INTO Queue_Match VALUES ("2", "Bronze 2", "21", "2", "Unrated","1",NULL);
INSERT INTO Queue_Match VALUES ("3", "Immortal 1", "22", "3", "Ranked",NULL,"2");
INSERT INTO Queue_Match VALUES ("4", "Platinum 3", "28", "4", "Ranked",NULL,"3");
INSERT INTO Queue_Match VALUES ("5", "Radiant 10", "22", "5", "Ranked",NULL,"4");

INSERT INTO Map_PlayedOn VALUES ("1", "Pearl", "2", "0.57", "2022-05-01");
INSERT INTO Map_PlayedOn VALUES ("2", "Ice Box", "2", "0.45", "2022-05-22");
INSERT INTO Map_PlayedOn VALUES ("3", "Bind", "2", "0.70", "2022-05-22");
INSERT INTO Map_PlayedOn VALUES ("4", "Fracture", "2", "0.10", "2022-06-01");
INSERT INTO Map_PlayedOn VALUES ("5", "Haven", "3", "0.90", "2022-06-02");

INSERT INTO Match_was_Penalized VALUES ("1", "Boo", "10", "AFK", "1", "1");
INSERT INTO Match_was_Penalized VALUES ("2", "Boo", "10", "AFK", "2", "2");
INSERT INTO Match_was_Penalized VALUES ("3", "Boo", "20", "AFK", "3", "3");
INSERT INTO Match_was_Penalized VALUES ("4", "Boo", "60", "AFK", "4", "4");
INSERT INTO Match_was_Penalized VALUES ("5", "Doo", "10", "AFK", "1", "1");

INSERT INTO Match_Contains_Agent VALUES ("1", "(Omen - Jett - Reyna - Skye - Sage) (Omen - Jett - Reyna - Skye - Sage)", "(2-1-1-1) (2-1-1-1)");
INSERT INTO Match_Contains_Agent VALUES ("2", "(Omen - Jett - Reyna - Skye - Sage) (Omen - Jett - Reyna - Skye - Astra)", "(2-1-1-1) (2-2-0-1)");
INSERT INTO Match_Contains_Agent VALUES ("3", "(Omen - Jett - Reyna - Skye - Sage) (Omen - Jett - Reyna - Raze - Sage)", "(2-1-1-1) (3-1-1-0)");
INSERT INTO Match_Contains_Agent VALUES ("4", "(Omen - Jett - Reyna - Skye - Sage) (Omen - Jett - Phoenix - Skye - Sage)", "(2-1-1-1) (2-1-1-1)");
INSERT INTO Match_Contains_Agent VALUES ("5", "(Omen - Jett - Reyna - Skye - Sage) (Omen - Raze - Reyna - Skye - Sage)", "(2-1-1-1) (2-1-1-1)");

INSERT INTO Picks_Agent VALUES ("Omen", "0.59", "Controller", "1");
INSERT INTO Picks_Agent VALUES ("Reyna", "0.7", "Duelist", "2");
INSERT INTO Picks_Agent VALUES ("Jett", "0.76", "Duelist", "3");
INSERT INTO Picks_Agent VALUES ("Skye", "0.66", "Initiator", "4");
INSERT INTO Picks_Agent VALUES ("Sage", "0.80", "Sentinel", "5");

INSERT INTO Display_PlayerStats VALUES ("1","1", "15", "15", "1", "Diamond 3", "267", "150", "0.50", "0.10", "0.22", "0.80", "0.01");
INSERT INTO Display_PlayerStats VALUES ("2","2", "200", "100", "150", "Bronze 2", "298", "300", "1.0", "0.6", "0.9", "0.10", "0.75");
INSERT INTO Display_PlayerStats VALUES ("3","3", "300", "1", "0", "Iron 1", "400", "150", "0.99", "0.45", "0.01", "0.95", "0.01");
INSERT INTO Display_PlayerStats VALUES ("4","4", "150", "135", "180", "Bronze 3", "224", "80", "0.9", "0.15", "0.88", "0.20", "0.08");
INSERT INTO Display_PlayerStats VALUES ("5","5", "250", "150", "300", "Ascendant 1", "217", "175", "0.7", "0.23", "0.91", "0.15", "0.05");

INSERT INTO Player_Playsin_Match VALUES ("1", "1", "1");
INSERT INTO Player_Playsin_Match VALUES ("2", "1", "1");
INSERT INTO Player_Playsin_Match VALUES ("3", "1", "1");
INSERT INTO Player_Playsin_Match VALUES ("4", "1", "1");
INSERT INTO Player_Playsin_Match VALUES ("5", "1", "1");