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
        this.store = new no.fll.activity.ActivityStore();
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
			return new no.fll.activity.Activity({activity: 'Robotkamper', duration: 6, time: 'Auto'});
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
