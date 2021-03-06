Ext.namespace("no.fll.web");
no.fll.web.FllGrid = Ext.extend(Ext.grid.EditorGridPanel, {
    constructor: function(config) {
		this.tbar = this.tbar ? this.tbar : [];
        this.tbar.push([{
            text: 'Lagre',
            tooltip: 'Lagrer alt',
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
            text: 'Slett valgt',
            tooltip: 'Sletter valgt',
            iconCls: 'delete',
            scope: this,
            handler: function() {
            	var cell = this.selModel.getSelectedCell();
            	if (cell) {
            		this.store.removeAt(cell[0]);
            	}
            }
        },{
            text: 'Slett alt',
            tooltip: 'Sletter alt',
            iconCls: 'delete',
            scope: this,
            handler: function() {
        		this.store.removeAll();
            }
        }]);
		no.fll.web.FllGrid.superclass.constructor.call(this, config);
	}
});
