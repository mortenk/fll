Ext.namespace("no.fll.schedule");
no.fll.schedule.ScheduleCreateForm = Ext.extend(Ext.form.FormPanel, {
    constructor: function(config) {

		config = config || {};
        this.bodyStyle = 'padding:5px 5px 0';
        this.width = 350;
        this.defaults = {width: 130};
        this.defaultType = 'textfield';
        this.labelAlign = 'left';
        this.labelWidth = 80;
        this.frame = true;
        this.items = [{
        	xtype: 'numberfield',
            fieldLabel: "Antall lag",
            name: 'teams',
            value: 16,
            allowBlank: false,
            allowDecimals: false,
            allowNegative: false
        },{
        	xtype: 'numberfield',
        	fieldLabel: 'Rundetid',
        	name: 'duration',
            value: 6,
            allowBlank: false,
            allowDecimals: false,
            allowNegative: false
        },{
        	xtype: 'timefield',
        	fieldLabel: 'Starttid',
        	name: 'starttime',
        	format: 'H:i',
        	value: '09:00'
        }];
        this.buttons = [{
        		text: 'Opprett',
	            scope: this,
	            handler: function() {
	        		this.fireEvent('create-schedule', this.getForm().getValues().starttime, this.getForm().getValues().duration, this.getForm().getValues().teams);
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

