Ext.namespace("no.fll.team");
no.fll.team.TeamGrid = Ext.extend(no.fll.web.FllGrid, {
    constructor: function(config) {
		this.columns = [{
			header: "Id", 
			width: 30, 
			sortable: true, 
			editor: new Ext.form.NumberField({
                allowBlank: false,
                allowDecimals: false,
                allowNegative: false
            }),
			dataIndex: 'id'
		},{
			header: "Navn", 
			width: 80, 
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
        		var id = this.getNextId();
        		var name = "Lag " + id;
        		this.store.add(new no.fll.team.Team({id: id, name: name}));
            }
        }];
		no.fll.team.TeamGrid.superclass.constructor.call(this, config);
	},
	getNextId: function() {
		var id = 1;
		while (this.store.findExact('id', id) != -1)
			id++;
		return id;
	}
});
