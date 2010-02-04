Ext.namespace("no.fll.plan");
no.fll.plan.PlanGrid = Ext.extend(no.fll.web.FllGrid, {
    constructor: function(config) {
		this.columns = [{
			header: "Kl", 
			width: 80, 
			sortable: true, 
			editor: new Ext.form.TextField({
	            allowBlank: false
	        }),
			dataIndex: 'time'
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
        	sortInfo:{field: 'time', direction: "ASC"},
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
		no.fll.plan.PlanGrid.superclass.constructor.call(this, config);
	}
});
