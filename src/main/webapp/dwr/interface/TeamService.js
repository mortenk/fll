var TeamService = {};
TeamService.dummyData = {
	objectsToConvertToRecords: [ 
		{id: 1, number: 1, name: 'Lag 1'},
		{id: 2, number: 2, name: 'Lag 2'},
		{id: 3, number: 3, name: 'Lag 3'},
		{id: 4, number: 4, name: 'Lag 4'},
		{id: 5, number: 5, name: 'Lag 5'},
		{id: 6, number: 6, name: 'Lag 6'},
		{id: 7, number: 7, name: 'Lag 7'}
	], 
	success: true
};
TeamService.id = 8;
TeamService.getTeams = function(callback) {
	callback.callback(TeamService.dummyData);
};
TeamService.createTeam = function(obj, callback) {
	for (var i in obj) {
		obj[i].id = TeamService.id++;
	}
	TeamService.dummyData.objectsToConvertToRecords = TeamService.dummyData.objectsToConvertToRecords.concat(obj);
	callback.callback({objectsToConvertToRecords: obj, success: true});
};
TeamService.updateTeam = function(oldObj, newObj, callback) {
	for (o in newObj) {
		for (d in TeamService.dummyData.objectsToConvertToRecords) {
			if (newObj[o].id == TeamService.dummyData.objectsToConvertToRecords[d].id) {
				TeamService.dummyData.objectsToConvertToRecords[d].number = newObj[o].number;
				TeamService.dummyData.objectsToConvertToRecords[d].name = newObj[o].name;
			}
		}
	}
	callback.callback({objectsToConvertToRecords: newObj, success: true});
};
TeamService.deleteTeam = function(obj, callback) {
	TeamService.dummyData.objectsToConvertToRecords = [];
	callback.callback({objectsToConvertToRecords: obj, success: true});
};