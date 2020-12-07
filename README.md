# CONNECTING ONLINE GAMERS

- This application is all about helping gamers find other gamers who want to play online. In it's infancy I will support
basic popular game titles on Xbox Live, but have plans to expand this application to include games from all platforms. The goal
is to help people find others who want to play a specific game, and more specifically, a game type of said game. For instance, Bobby loves Halo 3. He loves playing online custom MLG games with his friends, but he needs to find more friends. Bobby can use this application to find other gamers who are looking to play MLG customs on Halo 3 right now.

- Uses Socket.io to display real time updates as users populate game rooms with their gamertags.
- Uses Firebase to store users to display to new users who missed the real time updates.
- Uses React.js to handle client side
- Uses Express for the simple server

# CONTRIBUTING

- I am mainly looking for information about new games, primarily through the lens of Halo's online experience if possible (as this is my main gaming experience). For instance, I am not very familiar with Call of Duty. To support Call of Duty on my application I would need information about which Call of Duty titles are available to play online on Xbox Live, as well as all the appropriate "game types" that players would play together. These "game types" should be generalized if possible (No need to have a game type for team death match and free for all, just one playlist for online matchmaking would work better).

- Please supply the following to contribute a new game:
   1) An array of online playable title's for this game on Xbox Live
   2) An array of game types to play on this game

   Example:
   [Halo CE, Halo 2, Halo 3, Halo 3 ODST, Halo Reach, Halo 4, Halo 5]
   [Ranked Online Matchmaking, Social Online Matchmaking, Custom Games, MLG Customs, Campaign]