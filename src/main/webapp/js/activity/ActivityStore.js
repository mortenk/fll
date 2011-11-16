Ext.namespace("no.fll.team");
no.fll.activity.ActivityStore = Ext.extend(Ext.data.Store, {
    constructor: function(config) {
		this.autoSave = false;
		this.autoLoad = true;
		this.proxy = new Ext.ux.data.DwrProxy({
	 		apiActionToHandlerMap : {
	 			read : {
	  				dwrFunction : ActivityService.getActivities
	 			},
	 			create : {
	 				dwrFunction : ActivityService.createActivity
	 			}, 
	 			update : {
	 				dwrFunction : ActivityService.updateActivity
	 			}, 
	 			destroy : {
	 				dwrFunction : ActivityService.deleteActivity
	 			}
	 		}
	    });
	    this.reader = new Ext.data.JsonReader({
			root : 'objectsToConvertToRecords',
    		fields: no.fll.activity.Activity
		});
		this.writer = new Ext.data.JsonWriter({});
		no.fll.activity.ActivityStore.superclass.constructor.call(this, config);
	}
});