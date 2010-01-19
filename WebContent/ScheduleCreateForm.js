Ext.namespace("no.fll");
no.fll.ScheduleCreateForm = Ext.extend(Ext.form.FormPanel, {
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
                fieldLabel: "Antall lag",
                name: 'teams',
                width:190
        }];
        this.buttons = [{
        		text: 'Opprett',
	            scope: this,
	            handler: function() {
	        		this.fireEvent('create-schedule', this.getForm().getValues().teams);
	            }
	        },{
	            text: 'Clear',
	            scope: this,
	            handler: function() {
	        		this.fireEvent('clear', this.getForm());
	            }
	        }];
        no.fll.ScheduleCreateForm.superclass.constructor.call(this, config);
	}
});

