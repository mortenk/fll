Ext.namespace("Ext.ux");
/**
 * An implementation of Ext.data.DataProxy that uses DWR to make a remote call.
 *
 * Data returned from the remote call will be coverted to a block of Ext.data.Records
 * containing the following elements:
 * {
 *  success : boolean,
 *  records : [Ext.data.Record, ..],
 *  totalRecords : number
 * }
 *
 * Note that we expect that containing Store is configured with a Ext.data.JsonReader instance, this instance will
 * be called (JsonReader.readRecords) in order to transform the result in a block of Ext.data.Records.
 *
 * The remote method is expected to return a collection of objects in one of the following forms:
 * a)
 * [{propertyname:value, propertyname:value ..}, {propertyname:value, propertyname:value ..}, ..]
 *
 * b)
 * {
 *   results: 2,
 *   rows: [{propertyname:value, propertyname:value ..}, {propertyname:value, propertyname:value ..}, ..]
 * }
 *
 *
 * Based on http://extjs.com/forum/showthread.php?t=23884
 * @class Ext.ux.DWRProxy
 * @extends Ext.data.DataProxy
 * @author kai@systemfabrikken.no
 * @constructor
 * @param {Object} config A configuration object.
 */
Ext.ux.DWRProxy = Ext.extend(Ext.data.DataProxy, {

    constructor: function(dwrFunction, populateParametersCallbackHandler) {
        this.dwrFunction = dwrFunction;
        this.populateParametersCallbackHandler = populateParametersCallbackHandler;
        Ext.ux.DWRProxy.superclass.constructor.call(this);
    },

    /**
     * @cfg {Function} dwrFunction The DWR function for this proxy to call during load.
     * Must be set before calling load.
     */
    dwrFunction: null,

    /**
     * Load data from the configured "dwrFunction",
     * read the data object into a block of Ext.data.Records using the passed {@link Ext.data.DataReader} implementation,
     * and process that block using the passed callback.
     * @param {Object} params An object containing properties which are to be used for the request to the remote server.
     * Params is an Object, but the "DWR function" needs to be called with arguments in order.
     * To ensure that one's arguments are passed to their DWR function correctly, a user must either:
     * 1. make shure that the load(..) methods params argument contains the arguments expected by the dwrFunction OR
     * 2. override the prepareRemoteInvocationArgs(..) method and return an array containing the arguments expected by the dwrFunction
     *
     * @param {Ext.data.DataReader} reader The Reader object which converts the data object into a block of Ext.data.Records.
     * @param {Function} callback The function into which to pass the block of Ext.data.Records.
     * The function must be passed <ul>
     * <li>The Record block object</li>
     * <li>The "arg" argument from the load function</li>
     * <li>A boolean success indicator</li>
     * </ul>
     * @param {Object} scope The scope in which to call the callback
     * @param {Object} arg An optional argument which is passed to the callback as its second parameter.
     */
    load: function(params, reader, loadCallback, scope, arg) {
        // call beforeload event, return is event was vetoed
        if (this.fireEvent("beforeload", this, params) === false){
            loadCallback.call(scope || this, null, arg, false);
            return;
        }

        // the arguments that will be passed to the dwrFunction
        var dwrFunctionArgs = this.prepareRemoteInvocationArgs(this, params);
        dwrFunctionArgs.push(this.prepareDwrRemoteCallOptions(reader, loadCallback, scope, arg));

        // cant call dwrFunction directly since all arguments are stuffed into a single array
        this.dwrFunction.apply(null, dwrFunctionArgs); //p¿rv med null
    },

    /**
     * Builds and returns an Array containing arguments to be passed as argumments to the remote method.
     * @param {Object} dataProxy The DWRProxy instance excuting the remote call.
     * @param {Object} params An object containing properties which are to be used for the request to the remote server.
     * @return {Array} arguments to be passed as argumments to the remote method
     */
    prepareRemoteInvocationArgs: function(dataProxy, params) {
        var invocationArgs = [];
        if (this.populateParametersCallbackHandler != null)
            invocationArgs = this.populateParametersCallbackHandler();
        return invocationArgs;
    },

    /**
     * Builds and returns a Hash containing the DWR call options, responsible for defining callback and error handlers.
     * See http://directwebremoting.org/dwr/browser/engine for a complete list of call options.
     * @return {Hash} options to be used when executing the DWR remote call
     */
    prepareDwrRemoteCallOptions: function(reader, loadCallback, scope, arg) {
        var dataProxy = this;
        return{
            callback: function(response) {
                // call readRecords verses read because read will attempt to decode the JSON,
                // but as this point DWR has already decoded the JSON.
                var records = reader.readRecords(response);
                dataProxy.fireEvent("load", dataProxy, response, loadCallback);
                loadCallback.call(scope, records, arg, true);
            },
            exceptionHandler: function(message, exception) {
                // the event is supposed to pass the response, but since DWR doesn't provide that to us, we pass the message.
                dataProxy.fireEvent("loadexception", dataProxy, message, loadCallback, exception);
                loadCallback.call(scope, null, arg, false);
            }
        };
    }
});

