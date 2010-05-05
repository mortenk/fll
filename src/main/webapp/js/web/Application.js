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
        		autoScroll:true,
                closable:false
            }, 
            items: [
                new no.fll.team.TeamGrid({title: 'Lag', closable: false}),
                new no.fll.activity.ActivityGrid({title: 'Aktiviteter', closable: false})
            ]
        });

		this.leftPanel = new Ext.Panel({
			split: true,
			title: 'FLL',
			width: '250px',
			region : "west", 
			layout: "accordion",
			layoutConfig: {
		        titleCollapse: false,
		        animate: true,
		        activeOnTop: true
		    },
		    defaults : {anchor: '95%'},
		    items : [
		        new no.fll.schedule.ScheduleController().createForm(this.mainPanel),
		        new no.fll.plan.PlanController().createForm(this.mainPanel)
		    ]
		});

        this.items = [this.leftPanel, this.mainPanel];
        
        no.fll.web.Application.superclass.constructor.call(this, config);

    }
});