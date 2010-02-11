var ScheduleService = {};
ScheduleService.dummyData = {
	objectsToConvertToRecords: [ 
		{id: 1, time: '09.00', team1: {id: 1, name: 'Lag 1'}, team2: {id: 2, name: 'Lag 2'}},
		{id: 2, time: '09.06', team1: {id: 3, name: 'Lag 3'}, team2: {id: 4, name: 'Lag 4'}}
	], 
	success: true
};
ScheduleService.generateSchedule = function(startTime, duration, callback) {
	callback(ScheduleService.dummyData);
};
ScheduleService.getSchedule = function(callback) {
	callback.callback(ScheduleService.dummyData);
};
ScheduleService.createSchedule = function(obj, callback) {
	callback.callback(ScheduleService.dummyData);
};
ScheduleService.updateSchedule = function(obj, callback) {
	callback.callback(ScheduleService.dummyData);
};
ScheduleService.deleteSchedule = function(obj, callback) {
	callback.callback(ScheduleService.dummyData);
};