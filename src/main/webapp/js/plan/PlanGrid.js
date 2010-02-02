Ext.namespace("no.fll.plan");
no.fll.plan.PlanGrid = Ext.extend(Ext.grid.EditorGridPanel, {
    constructor: function(config) {
		this.columns = [{
			header: "Kl", 
			width: 80, 
			sortable: true, 
			editor: new Ext.form.TextField({
	            allowBlank: false
	        }),
			dataIndex: 'kl'
		},{
			header: "Lag", 
			width: 80, 
			dataIndex: 'team', 
			hidden: true
		},{
			header: "Aktivitet", 
			width: 80, 
			sortable: true, 
			editor: new Ext.form.TextField({
	            allowBlank: false
	        }),
			dataIndex: 'activity'
		}];
        this.store = new Ext.data.GroupingStore({
        	groupField: 'team',
            autoLoad: true,
        	autoSave: false,
            proxy: new Ext.ux.data.DwrProxy({
		 		apiActionToHandlerMap : {
		 			read : {
		  				dwrFunction : PlanService.getPlan
		 			},
		 			create : {
		  				dwrFunction : PlanService.createPlan
		 			},
		 			update : {
		  				dwrFunction : PlanService.updatePlan
		 			},
		 			destroy : {
		  				dwrFunction : PlanService.deletePlan
		 			}
		 		}
            }),
        	reader: new Ext.data.JsonReader({
        		root : 'objectsToConvertToRecords',
        		fields: no.fll.plan.Plan
        	}),
            writer: new Ext.data.JsonWriter({})
        });
        this.view = new Ext.grid.GroupingView({
        });
        this.tbar = [{
            text: 'Lagre',
            tooltip: 'Lagrer plan',
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
            tooltip: 'Sletter hele planen',
            iconCls: 'delete',
            scope: this,
            handler: function() {
        		this.store.removeAll();
            }
        }];
		no.fll.plan.PlanGrid.superclass.constructor.call(this, config);
	}
});
