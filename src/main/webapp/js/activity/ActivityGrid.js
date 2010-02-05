Ext.namespace("no.fll.activity");
no.fll.activity.ActivityGrid = Ext.extend(no.fll.web.FllGrid, {
    constructor: function(config) {
		this.autoWidth = true;
		this.autoHeight = true;	
		this.columns = [{
			header: "Id", 
			width: 30, 
			sortable: true, 
			dataIndex: 'id'
		},{
			header: "Aktivitet", 
			width: 80, 
			sortable: true, 
			editor: new Ext.form.TextField({
                allowBlank: false
            }),
			dataIndex: 'activity'
		},{
			header: "Lengde", 
			width: 80, 
			sortable: true, 
			editor: new Ext.form.NumberField({
                allowBlank: false,
                allowDecimals: false,
                allowNegative: false
            }),
			dataIndex: 'duration'
		}];
        this.store = new Ext.data.Store({
        	autoSave: false,
            autoLoad: true,
            proxy: new Ext.ux.data.DwrProxy({
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
            }),
        	reader: new Ext.data.JsonReader({
        		root : 'objectsToConvertToRecords',
        		fields: no.fll.activity.Activity
        	}),
            writer: new Ext.data.JsonWriter({})
        });
        this.tbar = [{
            text: 'Ny',
            tooltip: 'Ny aktivitet',
            iconCls: 'new',
            scope: this,
            handler: function() {
        		this.store.add(new no.fll.activity.Activity({activity: this.getNextActivityName(), duration: 15}));
            }
        }];
		no.fll.activity.ActivityGrid.superclass.constructor.call(this, config);
	}, 
	getNextActivityName: function() {
		if (this.activity == undefined) {
			this.activity = 1;
			return 'Ringside';
		} else if (this.activity == 1) {
			this.activity++;
			return 'Teori';
		} else if (this.activity == 2) {
			this.activity++;
			return 'Teknisk';
		} else {
			return 'Aktivitet ' + this.activity++;
		}
	}
});
