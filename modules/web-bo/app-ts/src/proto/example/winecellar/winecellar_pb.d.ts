import * as jspb from 'google-protobuf'

export class ListAllWinecellarRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAllWinecellarRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAllWinecellarRequest): ListAllWinecellarRequest.AsObject;
  static serializeBinaryToWriter(message: ListAllWinecellarRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAllWinecellarRequest;
  static deserializeBinaryFromReader(message: ListAllWinecellarRequest, reader: jspb.BinaryReader): ListAllWinecellarRequest;
}

export namespace ListAllWinecellarRequest {
  export type AsObject = {
  }
}

export class LoadWinecellarStockRequest extends jspb.Message {
  getWinecellarid(): string;
  setWinecellarid(value: string): LoadWinecellarStockRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoadWinecellarStockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoadWinecellarStockRequest): LoadWinecellarStockRequest.AsObject;
  static serializeBinaryToWriter(message: LoadWinecellarStockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoadWinecellarStockRequest;
  static deserializeBinaryFromReader(message: LoadWinecellarStockRequest, reader: jspb.BinaryReader): LoadWinecellarStockRequest;
}

export namespace LoadWinecellarStockRequest {
  export type AsObject = {
    winecellarid: string,
  }
}

export class Winecellar extends jspb.Message {
  getId(): string;
  setId(value: string): Winecellar;

  getOwner(): string;
  setOwner(value: string): Winecellar;

  getName(): string;
  setName(value: string): Winecellar;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Winecellar.AsObject;
  static toObject(includeInstance: boolean, msg: Winecellar): Winecellar.AsObject;
  static serializeBinaryToWriter(message: Winecellar, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Winecellar;
  static deserializeBinaryFromReader(message: Winecellar, reader: jspb.BinaryReader): Winecellar;
}

export namespace Winecellar {
  export type AsObject = {
    id: string,
    owner: string,
    name: string,
  }
}

export class WinecellarStock extends jspb.Message {
  getWinecellarid(): string;
  setWinecellarid(value: string): WinecellarStock;

  getItemsList(): Array<WinecellarStockItem>;
  setItemsList(value: Array<WinecellarStockItem>): WinecellarStock;
  clearItemsList(): WinecellarStock;
  addItems(value?: WinecellarStockItem, index?: number): WinecellarStockItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WinecellarStock.AsObject;
  static toObject(includeInstance: boolean, msg: WinecellarStock): WinecellarStock.AsObject;
  static serializeBinaryToWriter(message: WinecellarStock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WinecellarStock;
  static deserializeBinaryFromReader(message: WinecellarStock, reader: jspb.BinaryReader): WinecellarStock;
}

export namespace WinecellarStock {
  export type AsObject = {
    winecellarid: string,
    itemsList: Array<WinecellarStockItem.AsObject>,
  }
}

export class WinecellarStockItem extends jspb.Message {
  getWineryref(): WineryRef | undefined;
  setWineryref(value?: WineryRef): WinecellarStockItem;
  hasWineryref(): boolean;
  clearWineryref(): WinecellarStockItem;

  getQuantity(): number;
  setQuantity(value: number): WinecellarStockItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WinecellarStockItem.AsObject;
  static toObject(includeInstance: boolean, msg: WinecellarStockItem): WinecellarStockItem.AsObject;
  static serializeBinaryToWriter(message: WinecellarStockItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WinecellarStockItem;
  static deserializeBinaryFromReader(message: WinecellarStockItem, reader: jspb.BinaryReader): WinecellarStockItem;
}

export namespace WinecellarStockItem {
  export type AsObject = {
    wineryref?: WineryRef.AsObject,
    quantity: number,
  }
}

export class WineryRef extends jspb.Message {
  getId(): string;
  setId(value: string): WineryRef;

  getName(): string;
  setName(value: string): WineryRef;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WineryRef.AsObject;
  static toObject(includeInstance: boolean, msg: WineryRef): WineryRef.AsObject;
  static serializeBinaryToWriter(message: WineryRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WineryRef;
  static deserializeBinaryFromReader(message: WineryRef, reader: jspb.BinaryReader): WineryRef;
}

export namespace WineryRef {
  export type AsObject = {
    id: string,
    name: string,
  }
}

