Ext.namespace("no.fll");
no.fll.ScheduleGrid = Ext.extend(Ext.grid.EditorGridPanel, {
    constructor: function(config) {
		this.columns = [
			    {header: "Kl", width: 80, dataIndex: 'kl'},
			    {header: "Lag 1", width: 80, dataIndex: 'team1'},
			    {header: "Lag 2", width: 80, dataIndex: 'team2'}
		    ];
        this.store = new Ext.data.Store({
        	autoSave: false,
            proxy: new Ext.ux.data.DwrProxy({
				// Defined by Ext.data.DataProxy
		 		apiActionToHandlerMap : {
		 			read : {
		  				dwrFunction : ScheduleService.getSchedule
		 			},
		 			create : {
		  				dwrFunction : ScheduleService.createSchedule
		 			}
		 		}
            }),
            autoLoad: true,
        	reader: new Ext.data.JsonReader({
        		root : 'objectsToConvertToRecords',
        		successProperty: 'success', 
        		fields: no.fll.Schedule,
        		idProperty: 'kl'
        	}),
            writer: new Ext.data.JsonWriter({})
        });
        this.tbar = [{
            text: 'Lagre',
            tooltip: 'Lagrer kjøreplan',
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
        }];
		no.fll.ScheduleGrid.superclass.constructor.call(this, config);
	}
});
