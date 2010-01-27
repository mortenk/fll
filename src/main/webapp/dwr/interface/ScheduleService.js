var ScheduleService = {};
ScheduleService.dummyData = [
	{kl: '09.00', team1: 'Lag 1', team2: 'Lag 2'},
	{kl: '09.06', team1: 'Lag 3', team2: 'Lag 4'}
];
ScheduleService.createSchedule = function(startTime, teams, callback) {
	callback.callback(ScheduleService.dummyData);
};