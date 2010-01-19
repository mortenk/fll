Ext.namespace("no.fll");
no.fll.ActivityGrid = Ext.extend(Ext.grid.EditorGridPanel, {
    constructor: function(teams, config) {
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
            proxy: new Ext.ux.DWRProxy(ActivityService.getActivities, function() {
                return [];
            }),
            autoLoad: true,
            reader: new Ext.data.JsonReader({
            	id: 'id'
            }, [
                {name: 'id'},
                {name: 'activity'},
                {name: 'duration'}
            ])
        });
        this.buttons = [{
        	text: 'Ny aktivitet', 
        	handler: function() {
        		this.store.add([new Ext.data.Record({id: '4', activity: 'Tøys', duration: 15})]);
        	}.createDelegate(this)
        },{
        	text: 'Neste'
        }];
		no.fll.ActivityGrid.superclass.constructor.call(this, config);
	}
});
