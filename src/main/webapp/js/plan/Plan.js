Ext.namespace("no.fll.plan");
no.fll.plan.Plan = Ext.data.Record.create([
	{name: 'id'}, 
	{name: 'time'}, 
	{name: 'team'},
	{name: 'activity'}
], 'id');