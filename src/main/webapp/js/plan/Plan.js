Ext.namespace("no.fll.plan");
no.fll.plan.Plan = Ext.data.Record.create([
	{name: 'id'}, 
	{name: 'time'}, 
	{name: 'team', sortType: function(value) {return value.id}},
	{name: 'activity', record: no.fll.activity.Activity}
], 'id');