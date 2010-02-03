Ext.namespace("no.fll.team");
no.fll.team.TeamGrid = Ext.extend(Ext.grid.EditorGridPanel, {
    constructor: function(config) {
		this.autoWidth = true;
		this.autoHeight = true;	
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
        this.store = new Ext.data.Store({
        	autoSave: false,
            autoLoad: true,
            proxy: new Ext.ux.data.DwrProxy({
    	 		apiActionToHandlerMap : {
    	 			read : {
    	  				dwrFunction : TeamService.getTeams
    	 			},
    	 			create : {
    	 				dwrFunction : TeamService.createTeam
    	 			}, 
    	 			update : {
    	 				dwrFunction : TeamService.updateTeam
    	 			}, 
    	 			destroy : {
    	 				dwrFunction : TeamService.deleteTeam
    	 			}
    	 		}
            }),
        	reader: new Ext.data.JsonReader({
        		root : 'objectsToConvertToRecords',
        		fields: no.fll.team.Team
        	}),
            writer: new Ext.data.JsonWriter({})
        });
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
        },{
            text: 'Lagre',
            tooltip: 'Lagrer alle lag',
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
            tooltip: 'Sletter alle lag',
            iconCls: 'delete',
            scope: this,
            handler: function() {
        		this.store.removeAll();
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
