angular.module('userProfiles')
  .service('mainService', function(){
    var data =
    [{
    "id": 0,
    "first_name": "george",
    "last_name": "bluth",
    "avatar": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/16/1614439685fe08adf47741ab0d1b8725bea9b503_medium.jpg"
    },
    {
    "id": 1,
    "first_name": "lucille",
    "last_name": "bluth",
    "avatar": "https://66.media.tumblr.com/avatar_77862ddc7bbf_128.png"
    },
    {
    "id": 2,
    "first_name": "oscar",
    "last_name": "bluth",
    "avatar": "http://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/84/844600c7a009b63f0a3c002a94d1b49cccc18344_medium.jpg"
  }];

    this.getUsers = function(){
      return data;
    };

    this.toggleFavorite = function(userIndex){
      data[userIndex].isFavorite = !data[userIndex].isFavorite;
    }
  })
