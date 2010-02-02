Ext.namespace("no.fll.plan");
/**
 * Controller for FLL schedules.
 *
 * @class no.fll.ScheduleController
 * @extends Ext.Component
 * @author morten.knudsen@vps.no
 */
no.fll.plan.PlanController = Ext.extend(Ext.Component, {
    constructor: function(config) {

        this.addEvents(
            /**
             * @event create-plan
             * Fires when user clicks the create action on a the create plan form
             * @param {int} pitminutes Number of minutes in the pit before the ring
             */
            'create-plan'
        );
    },

    createPlan : function(pitminutes) {
        this.mainPanel.setActiveTab(this.grid);
        PlanService.generatePlan(pitminutes, function(plan) {
        	var records = new Array();
        	for (var i in plan) {
        		records[i] = new no.fll.plan.Plan(plan[i]);
        	}
        	this.grid.store.add(records);
        }.createDelegate(this));
        this.mainPanel.doLayout();
    },

    
    clearForm : function(form) {
        form.reset();
    },

    createForm : function(mainPanel) {
    	this.mainPanel = mainPanel;
		this.grid = new no.fll.plan.PlanGrid({title: 'Plan'});
        this.mainPanel.add(this.grid);
        var form = new no.fll.plan.PlanCreateForm({title: 'Opprett plan'});
        form.on('create-plan', this.createPlan.createDelegate(this));
        return form;
    }
});