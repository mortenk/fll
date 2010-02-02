Ext.namespace("no.fll.plan");
no.fll.plan.PlanCreateForm = Ext.extend(Ext.form.FormPanel, {
    constructor: function(config) {

		config = config || {};
        this.bodyStyle = 'padding:5px 5px 0';
        this.width = 350;
        this.defaults = {width: 50};
        this.defaultType = 'textfield';
        this.labelAlign = 'left';
        this.labelWidth = 120;
        this.frame = true;
        this.items = [{
        	xtype: 'numberfield',
            fieldLabel: "Tid i pit før kjøring",
            name: 'pitminutes',
            value: 10,
            allowBlank: false,
            allowDecimals: false,
            allowNegative: false
        }];
        this.buttons = [{
        		text: 'Opprett plan',
	            scope: this,
	            handler: function() {
	        		this.fireEvent('create-plan', this.getForm().getValues().pitminutes);
	            }
	        }];
        no.fll.plan.PlanCreateForm.superclass.constructor.call(this, config);
	}
});

