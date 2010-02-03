var ScheduleService = {};
ScheduleService.dummyData = {
	objectsToConvertToRecords: [ 
		{id: 1, time: '09.00', team1: 'Lag 1', team2: 'Lag 2'},
		{id: 2, time: '09.06', team1: 'Lag 3', team2: 'Lag 4'}
	], 
	success: true
};
ScheduleService.generateSchedule = function(startTime, duration, teams, callback) {
	callback(ScheduleService.dummyData);
};
ScheduleService.getSchedule = function(callback) {
	callback.callback(ScheduleService.dummyData);
};
ScheduleService.createSchedule = function(obj, callback) {
	callback.callback(ScheduleService.dummyData);
};
ScheduleService.deleteSchedule = function(obj, callback) {
	callback.callback(ScheduleService.dummyData);
};