// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Token entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Token entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Token", id.toString(), this);
  }

  static load(id: string): Token | null {
    return store.get("Token", id) as Token | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get type(): string {
    let value = this.get("type");
    return value.toString();
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }

  get issuer(): Bytes {
    let value = this.get("issuer");
    return value.toBytes();
  }

  set issuer(value: Bytes) {
    this.set("issuer", Value.fromBytes(value));
  }

  get issuee(): Bytes {
    let value = this.get("issuee");
    return value.toBytes();
  }

  set issuee(value: Bytes) {
    this.set("issuee", Value.fromBytes(value));
  }

  get fromDate(): BigInt {
    let value = this.get("fromDate");
    return value.toBigInt();
  }

  set fromDate(value: BigInt) {
    this.set("fromDate", Value.fromBigInt(value));
  }

  get thruDate(): BigInt {
    let value = this.get("thruDate");
    return value.toBigInt();
  }

  set thruDate(value: BigInt) {
    this.set("thruDate", Value.fromBigInt(value));
  }

  get metadata(): string | null {
    let value = this.get("metadata");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set metadata(value: string | null) {
    if (value === null) {
      this.unset("metadata");
    } else {
      this.set("metadata", Value.fromString(value as string));
    }
  }

  get manifest(): string | null {
    let value = this.get("manifest");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set manifest(value: string | null) {
    if (value === null) {
      this.unset("manifest");
    } else {
      this.set("manifest", Value.fromString(value as string));
    }
  }

  get description(): string | null {
    let value = this.get("description");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set description(value: string | null) {
    if (value === null) {
      this.unset("description");
    } else {
      this.set("description", Value.fromString(value as string));
    }
  }

  get holders(): Array<string> | null {
    let value = this.get("holders");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set holders(value: Array<string> | null) {
    if (value === null) {
      this.unset("holders");
    } else {
      this.set("holders", Value.fromStringArray(value as Array<string>));
    }
  }
}

export class TokenBalance extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TokenBalance entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TokenBalance entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TokenBalance", id.toString(), this);
  }

  static load(id: string): TokenBalance | null {
    return store.get("TokenBalance", id) as TokenBalance | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get holder(): string {
    let value = this.get("holder");
    return value.toString();
  }

  set holder(value: string) {
    this.set("holder", Value.fromString(value));
  }

  get available(): BigInt {
    let value = this.get("available");
    return value.toBigInt();
  }

  set available(value: BigInt) {
    this.set("available", Value.fromBigInt(value));
  }

  get retired(): BigInt {
    let value = this.get("retired");
    return value.toBigInt();
  }

  set retired(value: BigInt) {
    this.set("retired", Value.fromBigInt(value));
  }
}

export class Holder extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Holder entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Holder entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Holder", id.toString(), this);
  }

  static load(id: string): Holder | null {
    return store.get("Holder", id) as Holder | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get tokens(): Array<string> | null {
    let value = this.get("tokens");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set tokens(value: Array<string> | null) {
    if (value === null) {
      this.unset("tokens");
    } else {
      this.set("tokens", Value.fromStringArray(value as Array<string>));
    }
  }
}
