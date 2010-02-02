Ext.namespace("no.fll.schedule");
no.fll.schedule.ScheduleCreateForm = Ext.extend(Ext.form.FormPanel, {
    constructor: function(config) {

		config = config || {};
        this.title = 'Opprett kjøreplan';
        this.bodyStyle = 'padding:5px 5px 0';
        this.width = 350;
        this.defaults = {width: 230};
        this.defaultType = 'textfield';
        this.labelAlign = 'left';
        this.frame = true;
        this.items = [{
        	xtype: 'numberfield',
            fieldLabel: "Antall lag",
            name: 'teams',
            value: 16,
            width: 190,
            allowBlank: false,
            allowDecimals: false,
            allowNegative: false
        },{
        	xtype: 'numberfield',
        	fieldLabel: 'Rundetid',
        	name: 'duration',
            value: 6,
            width: 190,
            allowBlank: false,
            allowDecimals: false,
            allowNegative: false
        },{
        	xtype: 'timefield',
        	fieldLabel: 'Starttid',
        	name: 'starttime',
        	format: 'H:i',
        	value: '09:00',
            width: 190
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

