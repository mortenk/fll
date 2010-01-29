var ActivityService = {};
ActivityService.dummyData = [
        	{id: 1, activity: 'Teori', duration: '15'},
        	{id: 2, activity: 'Teknisk', duration: '15'},
        	{id: 3, activity: 'Presentasjon', duration: '15'}
        ];
ActivityService.getActivities = function(callback) {
	callback.callback(ActivityService.dummyData);
};
ActivityService.createActivity = function(obj, callback) {
	ActivityService.dummyData = ActivityService.dummyData.concat(obj);
	callback.callback(ActivityService.dummyData);
};
ActivityService.updateActivity = function(oldObj, newObj, callback) {
	for (o in newObj) {
		for (d in ActivityService.dummyData) {
			if (newObj[o].id == ActivityService.dummyData[d].id) {
				ActivityService.dummyData[d].activity = newObj[o].activity;
				ActivityService.dummyData[d].duration = newObj[o].duration;
			}
		}
	}
	callback.callback();
};
ActivityService.deleteActivity = function(obj, callback) {
	callback.callback();
};