Ext.namespace("no.fll.web");

no.fll.web.Application = Ext.extend(Ext.Panel, {
	constructor: function(config) {
		config = config || {};

		this.layout = "border";

        this.mainPanel = new Ext.TabPanel({
            region : "center",
            layoutOnTabChange: true,
            enableTabScroll:true,
            activeTab:0,
            defaults: {
                closable:false
            }, 
            items: new no.fll.activity.ActivityGrid({title: 'Aktiviteter', closable: false})
        });

		this.leftPanel = new Ext.Panel({
			title: 'FLL',
			width: '205px',
			region : "west", 
			layout: "accordion",
			layoutConfig: {
		        titleCollapse: false,
		        animate: true,
		        activeOnTop: true
		    },
		    items : new no.fll.schedule.ScheduleController().createForm(this.mainPanel)
		});

        this.items = [this.leftPanel, this.mainPanel];
        
        no.fll.web.Application.superclass.constructor.call(this, config);

    }
});