var ActivityService = {};
ActivityService.dummyData = [
        	{id: '1', activity: 'Teori', duration: '15'},
        	{id: '2', activity: 'Teknisk', duration: '15'},
        	{id: '3', activity: 'Presentasjon', duration: '15'}
        ];
ActivityService.getActivities = function(callback) {
	callback.callback(ActivityService.dummyData);
};