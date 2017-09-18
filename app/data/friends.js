var friends = {
  friendsArray:[
    {
      "name":"Ahmed",
      "photo":"http://img.mensjournal.com/920-width/mj-618_348_andre-agassi-tenniss-greatest-bad-boys.jpg",
      "scores":[
         5,
         1,
         4,
         4,
         5,
         1,
         2,
         5,
         4,
         1
          ]
    }
  ],
  addFriend: function(friend){
    this.friendsArray.push(friend);
  }
}



module.exports = friends;
