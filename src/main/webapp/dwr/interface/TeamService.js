var TeamService = {};
TeamService.dummyData = {
	objectsToConvertToRecords: [ 
		{id: 1, name: 'Lag 1'},
		{id: 2, name: 'Lag 2'},
		{id: 3, name: 'Lag 3'},
		{id: 4, name: 'Lag 4'},
		{id: 5, name: 'Lag 5'},
		{id: 6, name: 'Lag 6'},
		{id: 7, name: 'Lag 7'}
	], 
	success: true
};
TeamService.getTeams = function(callback) {
	callback.callback(TeamService.dummyData);
};
TeamService.createTeam = function(obj, callback) {
	callback.callback({objectsToConvertToRecords: obj, success: true});
};
TeamService.updateTeam = function(obj, callback) {
	callback.callback(TeamService.dummyData);
};
TeamService.deleteTeam = function(obj, callback) {
	callback.callback(TeamService.dummyData);
};