/**
 * @fileoverview gRPC-Web generated client stub for winecellar
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.winecellar = require('./winecellar_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.winecellar.WinecellarServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.winecellar.WinecellarServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.winecellar.ListAllWinecellarRequest,
 *   !proto.winecellar.Winecellar>}
 */
const methodDescriptor_WinecellarService_ListAll = new grpc.web.MethodDescriptor(
  '/winecellar.WinecellarService/ListAll',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.winecellar.ListAllWinecellarRequest,
  proto.winecellar.Winecellar,
  /**
   * @param {!proto.winecellar.ListAllWinecellarRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.winecellar.Winecellar.deserializeBinary
);


/**
 * @param {!proto.winecellar.ListAllWinecellarRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.winecellar.Winecellar>}
 *     The XHR Node Readable Stream
 */
proto.winecellar.WinecellarServiceClient.prototype.listAll =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/winecellar.WinecellarService/ListAll',
      request,
      metadata || {},
      methodDescriptor_WinecellarService_ListAll);
};


/**
 * @param {!proto.winecellar.ListAllWinecellarRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.winecellar.Winecellar>}
 *     The XHR Node Readable Stream
 */
proto.winecellar.WinecellarServicePromiseClient.prototype.listAll =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/winecellar.WinecellarService/ListAll',
      request,
      metadata || {},
      methodDescriptor_WinecellarService_ListAll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.winecellar.LoadWinecellarStockRequest,
 *   !proto.winecellar.WinecellarStock>}
 */
const methodDescriptor_WinecellarService_LoadStock = new grpc.web.MethodDescriptor(
  '/winecellar.WinecellarService/LoadStock',
  grpc.web.MethodType.UNARY,
  proto.winecellar.LoadWinecellarStockRequest,
  proto.winecellar.WinecellarStock,
  /**
   * @param {!proto.winecellar.LoadWinecellarStockRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.winecellar.WinecellarStock.deserializeBinary
);


/**
 * @param {!proto.winecellar.LoadWinecellarStockRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.winecellar.WinecellarStock)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.winecellar.WinecellarStock>|undefined}
 *     The XHR Node Readable Stream
 */
proto.winecellar.WinecellarServiceClient.prototype.loadStock =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/winecellar.WinecellarService/LoadStock',
      request,
      metadata || {},
      methodDescriptor_WinecellarService_LoadStock,
      callback);
};


/**
 * @param {!proto.winecellar.LoadWinecellarStockRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.winecellar.WinecellarStock>}
 *     Promise that resolves to the response
 */
proto.winecellar.WinecellarServicePromiseClient.prototype.loadStock =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/winecellar.WinecellarService/LoadStock',
      request,
      metadata || {},
      methodDescriptor_WinecellarService_LoadStock);
};


module.exports = proto.winecellar;

