var chats = [];
module.exports = {

  getChats:function(req,res){
    // TODO write getChats
    res.status(200).send(chats);
  },
  postChats:function(req,res){
    // TODO write postChats

    // {
    //   screenname,
    //   message
    // }
    var newMessage = {
    screenname: req.session.screenname,
    message: req.body.message
  }
    chats.push(newMessage);
    return res.status(201).send(newMessage);

  },
  deleteChats:function(req,res){
    // TODO write deleteChats
    chats = [];
    res.status(204).send();
    }
}
