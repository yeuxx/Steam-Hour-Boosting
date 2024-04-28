 var steamClientFactory = require('./steamClient.js');
    var configsArray = [];
    var config;
    var botArray = [];
    
   
	config = {};
    config.username = 'steam_username';
    config.password = 'steam_password';
    config.sharedSecret = '';
     config.games = [730] // game id 
    configsArray.push(config);
 
	
	
    console.log('Number of configurations set up: ' + configsArray.length);
     
    for	(index = 0; index < configsArray.length; index++) {
    	var config = configsArray[index];
		
		var bot = steamClientFactory.buildBot(config);
		bot.doLogin();
		botArray.push(bot);
    }
     
    console.log('Running ' + botArray.length + ' bots.');
