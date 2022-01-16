/* eslint-disable */
/*Proudly generated by GenDocu.com*/
// package: winery
// file: example/wineries/winery.proto

import * as jspb from "google-protobuf";

export class ListAllWineriesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAllWineriesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAllWineriesRequest): ListAllWineriesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAllWineriesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAllWineriesRequest;
  static deserializeBinaryFromReader(message: ListAllWineriesRequest, reader: jspb.BinaryReader): ListAllWineriesRequest;
}

export namespace ListAllWineriesRequest {
  export type AsObject = {
  }
}

export class GetWineryByIdRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWineryByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWineryByIdRequest): GetWineryByIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetWineryByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWineryByIdRequest;
  static deserializeBinaryFromReader(message: GetWineryByIdRequest, reader: jspb.BinaryReader): GetWineryByIdRequest;
}

export namespace GetWineryByIdRequest {
  export type AsObject = {
    id: string,
  }
}

export class Winery extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getAppelation(): string;
  setAppelation(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Winery.AsObject;
  static toObject(includeInstance: boolean, msg: Winery): Winery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Winery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Winery;
  static deserializeBinaryFromReader(message: Winery, reader: jspb.BinaryReader): Winery;
}

export namespace Winery {
  export type AsObject = {
    id: string,
    name: string,
    appelation: string,
  }
}
