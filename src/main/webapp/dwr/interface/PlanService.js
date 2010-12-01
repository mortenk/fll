var PlanService = {};
PlanService.dummyData = {
	objectsToConvertToRecords: [ 
		{id: 1, time: '09.00', team: {id: 1, number: 1, name: 'Lag 1'}, activity: 'Pit'},
		{id: 2, time: '09.06', team: {id: 1, number: 1, name: 'Lag 1'}, activity: 'Ring'},
		{id: 3, time: '09.20', team: {id: 1, number: 1, name: 'Lag 1'}, activity: 'Teori'},
		{id: 4, time: '10.00', team: {id: 1, number: 1, name: 'Lag 1'}, activity: 'Teknisk'},
		{id: 5, time: '09.06', team: {id: 2, number: 2, name: 'Lag 2'}, activity: 'Pit'},
		{id: 6, time: '09.12', team: {id: 2, number: 2, name: 'Lag 2'}, activity: 'Ring'},
		{id: 7, time: '10.20', team: {id: 2, number: 2, name: 'Lag 2'}, activity: 'Teori'},
		{id: 8, time: '11.00', team: {id: 2, number: 2, name: 'Lag 2'}, activity: 'Teknisk'}
	], 
	success: true
};
PlanService.generatePlan = function(startTime, endTime, pitTime, callback) {
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