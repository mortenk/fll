Ext.namespace("no.fll.schedule");
no.fll.schedule.ScheduleGrid = Ext.extend(Ext.grid.EditorGridPanel, {
    constructor: function(config) {
		this.columns = [
			    {header: "Id", width: 30, dataIndex: 'id'},
			    {header: "Kl", width: 80, dataIndex: 'time'},
			    {header: "Lag 1 id", width: 80, dataIndex: 'team1.id'},
			    {header: "Lag 2 id", width: 80, dataIndex: 'team2.id'},
			    {header: "Lag 1 navn", width: 80, dataIndex: 'team1.name'},
			    {header: "Lag 2 navn", width: 80, dataIndex: 'team2.name'}
		    ];
        this.store = new Ext.data.Store({
            autoLoad: true,
        	autoSave: false,
        	sortInfo: {
        	    field: 'time',
        	    direction: 'ASC'
        	},
        	proxy: new Ext.ux.data.DwrProxy({
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
        	reader: new Ext.data.JsonReader({
        		root : 'objectsToConvertToRecords',
        		fields: no.fll.schedule.Schedule
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
