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
		},{
			header: "Tidspunkt", 
			width: 80, 
			sortable: true, 
			editor: new Ext.form.TextField({
                allowBlank: false
            }),
			dataIndex: 'time'
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
        		this.store.add(this.getNextActivity());
            }
        }];
		no.fll.activity.ActivityGrid.superclass.constructor.call(this, config);
	}, 
	getNextActivity: function() {
		if (this.activity == undefined) {
			this.activity = 1;
			return new no.fll.activity.Activity({activity: 'Ringside', duration: 6, time: 'Auto'});
		} else if (this.activity == 1) {
			this.activity++;
			return new no.fll.activity.Activity({activity: 'Pit', duration: 10, time: 'Auto'});
		} else if (this.activity == 2) {
			this.activity++;
			return new no.fll.activity.Activity({activity: 'Teori', duration: 15, time: 'Auto'});
		} else if (this.activity == 3) {
			this.activity++;
			return new no.fll.activity.Activity({activity: 'Teknisk', duration: 15, time: 'Auto'});
		} else {
			return new no.fll.activity.Activity({activity: 'Aktivitet ' + this.activity++, duration: 15, time: 'Auto'});
		}
	}
});
