Ext.namespace("no.fll.schedule");
no.fll.schedule.ScheduleGrid = Ext.extend(Ext.grid.EditorGridPanel, {
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
		 			},
		 			destroy : {
		  				dwrFunction : ScheduleService.deleteSchedule
		 			}
		 		}
            }),
            autoLoad: true,
        	reader: new Ext.data.JsonReader({
        		root : 'objectsToConvertToRecords',
        		successProperty: 'success', 
        		fields: no.fll.schedule.Schedule,
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
        },{
            text: 'Slett',
            tooltip: 'Sletter hele kjøreplanen',
            iconCls: 'delete',
            scope: this,
            handler: function() {
        		this.store.removeAll();
            }
        }];
		no.fll.schedule.ScheduleGrid.superclass.constructor.call(this, config);
	}
});
