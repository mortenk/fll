Ext.namespace("no.fll.plan");
no.fll.plan.PlanCreateForm = Ext.extend(Ext.form.FormPanel, {
    constructor: function(config) {

		config = config || {};
        this.bodyStyle = 'padding:5px 5px 0';
        this.width = 350;
        this.defaults = {width: 80};
        this.defaultType = 'textfield';
        this.labelAlign = 'left';
        this.labelWidth = 120;
        this.frame = true;
        this.items = [{
        	xtype: 'timefield',
        	fieldLabel: 'Starttid',
        	name: 'startTime',
        	format: 'H:i',
        	value: '09:00'
        },{
        	xtype: 'timefield',
        	fieldLabel: 'Sluttid',
        	name: 'endTime',
        	format: 'H:i',
        	value: '14:00'
        },{
        	xtype: 'spinnerfield',
            fieldLabel: "Tid i pit før kjøring",
            name: 'pitTime',
        	minValue: 1,
        	maxValue: 59,
            value: 10,
            allowBlank: false,
            allowDecimals: false,
            allowNegative: false
        }];
        this.buttons = [{
        		text: 'Opprett plan',
	            scope: this,
	            handler: function() {
	        		this.fireEvent('create-plan', this.getForm().getValues().startTime, this.getForm().getValues().endTime, this.getForm().getValues().pitTime);
	            }
	        }];
        no.fll.plan.PlanCreateForm.superclass.constructor.call(this, config);
	}
});

