Ext.namespace("no.fll");
no.fll.ScheduleGrid = Ext.extend(Ext.grid.EditorGridPanel, {
    constructor: function(starttime, duration, teams, config) {
		this.title = "Plan";
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
		  				dwrFunction : ScheduleService.createSchedule,
		 				// Define a custom function that passes the paging parameters to DWR.
		 				getDwrArgsFunction : function(request) {
            				return [starttime, duration, teams];
		 				},
		 				// The scope is set to "this" so that this store's paging parameter names can be accessed.
		 				getDwrArgsScope : this
		 			}
		 		}
            }),
            autoLoad: true,
            reader: new Ext.data.JsonReader({
            	id: 'kl'
            }, [
                {name: 'kl'},
                {name: 'team1'},
                {name: 'team2'}
            ])
        });
		no.fll.ScheduleGrid.superclass.constructor.call(this, config);
	}
});
