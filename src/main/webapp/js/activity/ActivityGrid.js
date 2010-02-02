Ext.namespace("no.fll.activity");
no.fll.activity.ActivityGrid = Ext.extend(Ext.grid.EditorGridPanel, {
    constructor: function(config) {
		this.autoWidth = true;
		this.autoHeight = true;	
		this.columns = [{
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
        		this.store.add(new no.fll.activity.Activity({activity: 'Tøys', duration: 15}));
            }
        },{
            text: 'Lagre',
            tooltip: 'Lagrer aktivitetsliste',
            iconCls: 'save',
            scope: this,
            handler: function() {
    			this.store.save();
            }
        },{
            text: 'Angre',
            tooltip: 'Tilbakestiller til siste lagring',
            iconCls: 'revert',
            scope: this,
            handler: function() {
        		this.store.reload();
            }
        },{
            text: 'Slett',
            tooltip: 'Sletter alle aktiviteter',
            iconCls: 'delete',
            scope: this,
            handler: function() {
        		this.store.removeAll();
            }
        }];
		no.fll.activity.ActivityGrid.superclass.constructor.call(this, config);
	}
});
