Ext.namespace("no.fll.team");
no.fll.team.TeamGrid = Ext.extend(no.fll.web.FllGrid, {
    constructor: function(config) {
		this.columns = [{
			header: "Id", 
			width: 30, 
			sortable: true, 
			dataIndex: 'id'
		},{
			header: "Nummer", 
			width: 50, 
			sortable: true, 
			editor: new Ext.form.NumberField({
                allowBlank: false,
                allowDecimals: false,
                allowNegative: false
            }),
			dataIndex: 'number'
		},{
			header: "Navn", 
			width: 120, 
			sortable: true, 
			editor: new Ext.form.TextField({
                allowBlank: false
            }),
			dataIndex: 'name'
		}];
        this.store = new no.fll.team.TeamStore();
        this.tbar = [{
            text: 'Ny',
            tooltip: 'Nytt lag',
            iconCls: 'new',
            scope: this,
            handler: function() {
        		var number = this.getNextNumber();
        		var name = "Lag " + number;
        		this.store.add(new no.fll.team.Team({number: number, name: name}));
            }
        }];
		no.fll.team.TeamGrid.superclass.constructor.call(this, config);
	},
	getNextNumber: function() {
		var number = 1;
		while (this.store.findExact('number', number) != -1)
			number++;
		return number;
	}
});
