Ext.namespace("no.fll");
no.fll.ScheduleGrid = Ext.extend(Ext.grid.EditorGridPanel, {
    constructor: function(starttime, duration, teams, config) {
		this.width = 350;
		this.autoHeight = true;	
		this.columns = [
			    {header: "Kl", width: 80, dataIndex: 'kl'},
			    {header: "Lag 1", width: 80, dataIndex: 'team1'},
			    {header: "Lag 2", width: 80, dataIndex: 'team2'}
		    ];
        this.store = new Ext.data.Store({
            proxy: new Ext.ux.DWRProxy(ScheduleService.createSchedule, function() {
                return [starttime, duration, teams];
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
        this.buttons = [{
        	text: 'Neste', 
            scope: this,
            handler: function() {
                this.fireEvent('next');
            }
        }];
		no.fll.ScheduleGrid.superclass.constructor.call(this, config);
	}
});
