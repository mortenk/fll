var ActivityService = {};
ActivityService.dummyData = {
	objectsToConvertToRecords: [ 
		{id: 1, activity: 'Teori', duration: '15'},
		{id: 2, activity: 'Teknisk', duration: '15'},
		{id: 3, activity: 'Presentasjon', duration: '15'}
	], 
	success: true
};
ActivityService.id = 4;
ActivityService.getActivities = function(callback) {
	callback.callback(ActivityService.dummyData);
};

ActivityService.createActivity = function(obj, callback) {
	for (var i in obj) {
		obj[i].id = ActivityService.id++;
	}
	ActivityService.dummyData.objectsToConvertToRecords = ActivityService.dummyData.objectsToConvertToRecords.concat(obj);
	callback.callback({objectsToConvertToRecords: obj, success: true});
};
ActivityService.updateActivity = function(oldObj, newObj, callback) {
	for (o in newObj) {
		for (d in ActivityService.dummyData.objectsToConvertToRecords) {
			if (newObj[o].id == ActivityService.dummyData.objectsToConvertToRecords[d].id) {
				ActivityService.dummyData.objectsToConvertToRecords[d].activity = newObj[o].activity;
				ActivityService.dummyData.objectsToConvertToRecords[d].duration = newObj[o].duration;
			}
		}
	}
	callback.callback({objectsToConvertToRecords: newObj, success: true});
};
ActivityService.deleteActivity = function(obj, callback) {
	ActivityService.dummyData.objectsToConvertToRecords = [];
	callback.callback({objectsToConvertToRecords: obj, success: true});
};