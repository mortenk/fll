Ext.namespace("no.fll.plan");
no.fll.plan.PlanGrid = Ext.extend(no.fll.web.FllGrid, {
    constructor: function(config) {
		this.teamRenderer = function(value){
			return value.name;
		};
		this.activityRenderer = function(value){
			return value.name;
		};
		this.activityEditor = new Ext.form.ComboBox({
            typeAhead: true,
            triggerAction: 'all',
            // transform the data already specified in html
            lazyRender: true,
            listClass: 'x-combo-list-small',
            valueField: 'id',
            displayField: 'name',
            store : new no.fll.activity.ActivityStore()
        });
		this.columns = [{
			header: "Id", 
			width: 30, 
			dataIndex: 'id'
		},{
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
			sortable: true, 
			dataIndex: 'team',
			renderer: this.teamRenderer,
			hidden: true
		},{
			header: "Aktivitet", 
			width: 80, 
			sortable: true, 
	        renderer: this.activityRenderer,
	        editor: this.activityEditor,
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
		this.tbar = [{
            text: 'Skriv ut...',
            tooltip: 'Åpner rapport for utkrift',
            iconCls: 'print',
            scope: this,
            handler: function() {
        		window.open('plan.do', 'fll-plan');
            }
		}];
		no.fll.plan.PlanGrid.superclass.constructor.call(this, config);
	},
	preEditValue: function(r, field) {
		if (field == 'activity') {
			var record = r.data[field];
			var value = "";
			if (record){
				value = record.activity;
			}
		    return this.autoEncode && Ext.isString(value) ? Ext.util.Format.htmlDecode(value) : value;
		} else {
			return no.fll.plan.PlanGrid.superclass.preEditValue(r, field);
		}
	},
	postEditValue : function(value, originalValue, r, field){
		if (field == 'activity') {
			var store = this.activityEditor.store;
			var idx = store.findExact('id', value);
			var rec = store.getAt(idx);
			return rec.data;
		} else {
			return no.fll.plan.PlanGrid.superclass.postEditValue(value, originalValue, r, field);
		}
	}
});
