angular.module("myChats").service("mainSrvc", function($http){

  this.getChats = function(){
    //TODO Call server to get the chats
    return $http.get('/api/chats').then(function(response){
      return response.data;
    });
  }

  this.addChats = function(chat){
    //TODO Call server to add to chats
    $http.post('/api/chats', chat).then(function(response){
      console.log(response);
    })
  }

  this.deleteChats = function(){
    //TODO Call server to whipe all the chats
    $http.delete('/api/chats').then(function(response){
      if (response.status === 204){
        console.log('all clear');
      }
    })
  }

  this.setScreenname = function(screenname){
    $http.post('/api/screenname', {screenname: screenname})
    .then(function(response){
        console.log(response);
    });
  };

});
