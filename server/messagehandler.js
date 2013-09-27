var messages = require('../common/messages.js');

var MessageHandler = function() {

   var self = this;
   self.databaseProxy = undefined;
   self.messageBroker = undefined;

   self.receive = function(from, data) {
      console.log(data);

      if (data.name) {
         switch (data.name) {
            case 'AUTH_REQ':
               console.log("client requested authentication:", data.username, data.password);
               //TODO: kysy k�ytt�j�nimi ja salasana tietokannasta
               var resp = messages.message.AUTH_RESP.new();
               resp.response = "OK";
               self.send(from, resp);
               break;

            case 'CHAT_SYNC':
               var msg = messages.message.CHAT_SYNC.new();
               msg.username = data.username;
               msg.text = data.text;
               self.broadcast(data);
               break;

            case 'PONG':
               console.log("received pong");
               break;

            default:
               console.log("Default branch reached: ", data);
               break;
         }
      }
   },

   self.broadcast = function(data) {
      if (self.messageBroker) {
         self.messageBroker.broadcast(data);
      }
   },

   self.send = function(to, data) {
      if (self.messageBroker) {
         self.messageBroker.send(to, data);
      }
   },

   self.attachBroker = function(msgBroker) {
      self.messageBroker = msgBroker;
      console.log("MessageHandler: MessageBroker attached");
   },
   
   self.attachDatabaseProxy = function(dbproxy) {
      self.databaseProxy = dbproxy;
   }
}

module.exports = MessageHandler;