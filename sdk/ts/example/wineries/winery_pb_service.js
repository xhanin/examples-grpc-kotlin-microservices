/* eslint-disable */
/*Proudly generated by GenDocu.com*/
// package: winery
// file: example/wineries/winery.proto

var example_wineries_winery_pb = require("../../example/wineries/winery_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var WineryService = (function () {
  function WineryService() {}
  WineryService.serviceName = "winery.WineryService";
  return WineryService;
}());

WineryService.ListAll = {
  methodName: "ListAll",
  service: WineryService,
  requestStream: false,
  responseStream: true,
  requestType: example_wineries_winery_pb.ListAllWineriesRequest,
  responseType: example_wineries_winery_pb.Winery
};

WineryService.GetById = {
  methodName: "GetById",
  service: WineryService,
  requestStream: false,
  responseStream: false,
  requestType: example_wineries_winery_pb.GetWineryByIdRequest,
  responseType: example_wineries_winery_pb.Winery
};

exports.WineryService = WineryService;

function WineryServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

WineryServiceClient.prototype.listAll = function listAll(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(WineryService.ListAll, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

WineryServiceClient.prototype.getById = function getById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WineryService.GetById, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.WineryServiceClient = WineryServiceClient;

