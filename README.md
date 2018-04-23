# COJ
Collaborative Online Judgement

# Client (Angular)

  Client is an online judgement system, much like Leetcode enhanced with a Google Document like feature.
  Multiple users can edit on the same problem and see each others' editing. Users who come late will be synchronized to the up-to-date content on loading.

# ServerI (Node.js)

  This is the server that interacts with clients, handling RESTful API requests from client.
  Server I also passes user submitted code to Server II, which is the code executor.

  Server stores each problem's last editing code for an hour, after which the code will be deleted.

# ServerII -- Code Executor (Python Flask)

  This server execute user code. User submitted code is executed on Docker image, protecting server from affected by malicious code.

# Database -- Mongodb Cloud(mlab.com), Redis

   Problem and user database are stored on mlab's cloud database. User editing contents for each problem are stored on server I's Redis database for a period of an hour.


# TODO list

  Bug: after a user switches language, other users in the same room are not reflected of the change.

  Bug: after switching language, buffered content disappears.

  Bug: GoBack does not trigger user disconnection event. Multiple users thus are created from same tab (goback->enter->goback->enter)

  New model: user system, replace socket id with user name
