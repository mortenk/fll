var PlanService = {};
PlanService.dummyData = {
	objectsToConvertToRecords: [ 
		{id: 1, kl: '09.00', team: 'Lag 1', activity: 'Pit'},
		{id: 2, kl: '09.06', team: 'Lag 1', activity: 'Ring'},
		{id: 3, kl: '09.20', team: 'Lag 1', activity: 'Teori'},
		{id: 4, kl: '10.00', team: 'Lag 1', activity: 'Teknisk'},
		{id: 5, kl: '09.06', team: 'Lag 2', activity: 'Pit'},
		{id: 6, kl: '09.12', team: 'Lag 2', activity: 'Ring'},
		{id: 7, kl: '10.20', team: 'Lag 2', activity: 'Teori'},
		{id: 8, kl: '11.00', team: 'Lag 2', activity: 'Teknisk'}
	], 
	success: true
};
PlanService.generatePlan = function(startTime, duration, teams, callback) {
	callback(PlanService.dummyData);
};
PlanService.getPlan = function(callback) {
	callback.callback(PlanService.dummyData);
};
PlanService.createPlan = function(obj, callback) {
	callback.callback(PlanService.dummyData);
};
PlanService.updatePlan = function(obj, callback) {
	callback.callback(PlanService.dummyData);
};
PlanService.deletePlan = function(obj, callback) {
	callback.callback(PlanService.dummyData);
};