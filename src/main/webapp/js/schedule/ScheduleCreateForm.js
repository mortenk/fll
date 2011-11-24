Ext.namespace("no.fll.schedule");
no.fll.schedule.ScheduleCreateForm = Ext.extend(Ext.form.FormPanel, {
    constructor: function(config) {

		config = config || {};
        this.bodyStyle = 'padding:5px 5px 0';
        this.defaults = {anchor: '95%'};
        this.labelAlign = 'left';
        this.labelWidth = 80;
        this.frame = true;
        this.items = [{
        	xtype: 'timefield',
        	fieldLabel: 'Starttid',
        	name: 'starttime',
        	format: 'H:i',
        	value: '10:00'
        },{
        	xtype: 'spinnerfield',
        	fieldLabel: 'Rundetid',
        	name: 'duration',
        	minValue: 1,
        	maxValue: 59,
        	value: 6,
            allowBlank: false,
            allowDecimals: false,
            allowNegative: false
        }];
        this.buttons = [{
        		text: 'Opprett',
	            scope: this,
	            handler: function() {
	        		this.fireEvent('create-schedule', this.getForm().getValues().starttime, this.getForm().getValues().duration);
	            }
	        },{
	            text: 'Tilbakestill',
	            scope: this,
	            handler: function() {
	        		this.fireEvent('clear', this.getForm());
	            }
	        }];
        no.fll.schedule.ScheduleCreateForm.superclass.constructor.call(this, config);
	}
});

