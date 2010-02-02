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
		 			}
		 		}
            }),
            autoLoad: true,
        	reader: new Ext.data.JsonReader({
        		root : 'objectsToConvertToRecords',
        		successProperty: 'success', 
        		fields: no.fll.Schedule,
        		idProperty: 'id'
        	})
        });
		no.fll.ScheduleGrid.superclass.constructor.call(this, config);
	}
});
