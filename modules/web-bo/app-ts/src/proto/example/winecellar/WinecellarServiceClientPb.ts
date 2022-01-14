/**
 * @fileoverview gRPC-Web generated client stub for winecellar
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as example_winecellar_winecellar_pb from '../../example/winecellar/winecellar_pb';


export class WinecellarServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoListAll = new grpcWeb.MethodDescriptor(
    '/winecellar.WinecellarService/ListAll',
    grpcWeb.MethodType.SERVER_STREAMING,
    example_winecellar_winecellar_pb.ListAllWinecellarRequest,
    example_winecellar_winecellar_pb.Winecellar,
    (request: example_winecellar_winecellar_pb.ListAllWinecellarRequest) => {
      return request.serializeBinary();
    },
    example_winecellar_winecellar_pb.Winecellar.deserializeBinary
  );

  listAll(
    request: example_winecellar_winecellar_pb.ListAllWinecellarRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/winecellar.WinecellarService/ListAll',
      request,
      metadata || {},
      this.methodInfoListAll);
  }

  methodInfoLoadStock = new grpcWeb.MethodDescriptor(
    '/winecellar.WinecellarService/LoadStock',
    grpcWeb.MethodType.UNARY,
    example_winecellar_winecellar_pb.LoadWinecellarStockRequest,
    example_winecellar_winecellar_pb.WinecellarStock,
    (request: example_winecellar_winecellar_pb.LoadWinecellarStockRequest) => {
      return request.serializeBinary();
    },
    example_winecellar_winecellar_pb.WinecellarStock.deserializeBinary
  );

  loadStock(
    request: example_winecellar_winecellar_pb.LoadWinecellarStockRequest,
    metadata: grpcWeb.Metadata | null): Promise<example_winecellar_winecellar_pb.WinecellarStock>;

  loadStock(
    request: example_winecellar_winecellar_pb.LoadWinecellarStockRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: example_winecellar_winecellar_pb.WinecellarStock) => void): grpcWeb.ClientReadableStream<example_winecellar_winecellar_pb.WinecellarStock>;

  loadStock(
    request: example_winecellar_winecellar_pb.LoadWinecellarStockRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: example_winecellar_winecellar_pb.WinecellarStock) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/winecellar.WinecellarService/LoadStock',
        request,
        metadata || {},
        this.methodInfoLoadStock,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/winecellar.WinecellarService/LoadStock',
    request,
    metadata || {},
    this.methodInfoLoadStock);
  }

}

