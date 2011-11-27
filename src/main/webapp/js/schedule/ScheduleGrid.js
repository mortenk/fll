Ext.namespace("no.fll.schedule");
no.fll.schedule.ScheduleGrid = Ext.extend(no.fll.web.FllGrid, {
    constructor: function(config) {
		this.teamRenderer = function(value){
			if (value) {
				return value.name;
			} else {
				return "";
			}
		};
		this.timeEditor = new Ext.form.TextField({
            allowBlank: false
        });
		this.teamEditor = new Ext.form.ComboBox({
            typeAhead: true,
            triggerAction: 'all',
            // transform the data already specified in html
            lazyRender: true,
            listClass: 'x-combo-list-small',
            valueField: 'id',
            displayField: 'name',
            store : new no.fll.team.TeamStore()
        });
		this.columns = [
			    {header: "Id", width: 30, dataIndex: 'id'},
			    {header: "Kl", width: 80, dataIndex: 'time', editor: this.timeEditor},
			    {header: "Lag 1", width: 80, dataIndex: 'team1', editor: this.teamEditor, renderer: this.teamRenderer},
			    {header: "Lag 2", width: 80, dataIndex: 'team2', editor: this.teamEditor, renderer: this.teamRenderer}
		    ];
        this.store = new Ext.data.Store({
            autoLoad: true,
        	autoSave: false,
        	sortInfo: {
        	    field: 'time',
        	    direction: 'ASC'
        	},
        	proxy: new Ext.ux.data.DwrProxy({
		 		apiActionToHandlerMap : {
		 			read : {
		  				dwrFunction : ScheduleService.getSchedule
		 			},
		 			create : {
		  				dwrFunction : ScheduleService.createSchedule
		 			},
		 			update : {
		  				dwrFunction : ScheduleService.updateSchedule
		 			},
		 			destroy : {
		  				dwrFunction : ScheduleService.deleteSchedule
		 			}
		 		}
            }),
        	reader: new Ext.data.JsonReader({
        		root : 'objectsToConvertToRecords',
        		fields: no.fll.schedule.Schedule
        	}),
            writer: new Ext.data.JsonWriter({})
        });
		this.tbar = [{
            text: 'Skriv ut...',
            tooltip: 'Åpner rapport for utkrift',
            iconCls: 'print',
            scope: this,
            handler: function() {
        		window.open('schedule.do', 'fll-schedule');
            }
		}];
		no.fll.schedule.ScheduleGrid.superclass.constructor.call(this, config);
	},
	preEditValue: function(r, field) {
		if (field == 'team1' || field == 'team2') {
			var record = r.data[field];
			var value = "";
			if (record){
				value = record.name;
			}
		    return this.autoEncode && Ext.isString(value) ? Ext.util.Format.htmlDecode(value) : value;
		} else {
			return no.fll.schedule.ScheduleGrid.superclass.preEditValue(r, field);
		}
	},
	postEditValue : function(value, originalValue, r, field){
		if (field == 'team1' || field == 'team2') {
			var store = this.teamEditor.store;
			var idx = store.findExact('id', value);
			var rec = store.getAt(idx);
			return rec.data;
		} else {
			return no.fll.schedule.ScheduleGrid.superclass.postEditValue(value, originalValue, r, field);
		}
	}
});
