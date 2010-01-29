Ext.namespace("no.fll");
no.fll.ActivityGrid = Ext.extend(Ext.grid.EditorGridPanel, {
    constructor: function(config) {
		this.width = 350;
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
            proxy: new Ext.ux.data.DwrProxy({
				// Defined by Ext.data.DataProxy
		 		apiActionToHandlerMap : {
		 			read : {
		  				dwrFunction : ActivityService.getActivities,
		 				// Define a custom function that passes the paging parameters to DWR.
		 				getDwrArgsFunction : function(request) {
		 					return [];
		 				},
		 				// The scope is set to "this" so that this store's paging parameter names can be accessed.
		 				getDwrArgsScope : this
		 			},
		 			// These aren't needed if only doing reading.
		 			create : {
		 				// Use the default function which will set the DWR args to an array of all the objects to create.
		 				dwrFunction : ActivityService.createActivity
		 			}, 
		 			update : {
		 				dwrFunction : ActivityService.updateActivity
		 			}, 
		 			destroy : {
		 				dwrFunction : ActivityService.deleteActivity,
		 				// Define a custom function to pass a login and password, in addition to the objects to delete.
		 				getDwrArgsFunction : function(request, recordDataArray) {
		 					return [recordDataArray];
		 				},
		 				getDwrArgsScope : this
		 			}
		 		}
            }),
            autoLoad: true,
            reader: new Ext.data.JsonReader({fields: no.fll.Activity}),
            writer: new Ext.data.JsonWriter({})
        });
        this.tbar = [{
            text: 'Ny',
            tooltip: 'Ny aktivitet',
            iconCls: 'new',
            scope: this,
            handler: function() {
        		this.store.add(new no.fll.Activity({id: 4, activity: 'Tøys', duration: 15}));
            }
        },{
            text: 'Lagre',
            tooltip: 'Lagrer aktivitetsliste',
            iconCls: 'save',
            scope: this,
            handler: function() {
    			this.store.save();
        		this.store.reload();
            }
        },{
            text: 'Angre',
            tooltip: 'Tilbakestiller til siste lagring',
            iconCls: 'revert',
            scope: this,
            handler: function() {
        		this.store.reload();
            }
        }];
		no.fll.ActivityGrid.superclass.constructor.call(this, config);
	}
});
