// @generated by protoc-gen-es v1.10.1 with parameter "target=ts,import_extension=.ts"
// @generated from file calculator/calculator.proto (package calculator, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Operation 表示支持的数学运算
 *
 * @generated from enum calculator.Operation
 */
export enum Operation {
  /**
   * @generated from enum value: ADD = 0;
   */
  ADD = 0,

  /**
   * @generated from enum value: SUBTRACT = 1;
   */
  SUBTRACT = 1,

  /**
   * @generated from enum value: MULTIPLY = 2;
   */
  MULTIPLY = 2,

  /**
   * @generated from enum value: DIVIDE = 3;
   */
  DIVIDE = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(Operation)
proto3.util.setEnumType(Operation, "calculator.Operation", [
  { no: 0, name: "ADD" },
  { no: 1, name: "SUBTRACT" },
  { no: 2, name: "MULTIPLY" },
  { no: 3, name: "DIVIDE" },
]);

/**
 * CalculateRequest 包含要执行的操作
 *
 * @generated from message calculator.CalculateRequest
 */
export class CalculateRequest extends Message<CalculateRequest> {
  /**
   * @generated from field: double a = 1;
   */
  a = 0;

  /**
   * @generated from field: double b = 2;
   */
  b = 0;

  /**
   * @generated from field: calculator.Operation operation = 3;
   */
  operation = Operation.ADD;

  constructor(data?: PartialMessage<CalculateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "calculator.CalculateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "a", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 2, name: "b", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 3, name: "operation", kind: "enum", T: proto3.getEnumType(Operation) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CalculateRequest {
    return new CalculateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CalculateRequest {
    return new CalculateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CalculateRequest {
    return new CalculateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CalculateRequest | PlainMessage<CalculateRequest> | undefined, b: CalculateRequest | PlainMessage<CalculateRequest> | undefined): boolean {
    return proto3.util.equals(CalculateRequest, a, b);
  }
}

/**
 * CalculateResponse 包含计算结果
 *
 * @generated from message calculator.CalculateResponse
 */
export class CalculateResponse extends Message<CalculateResponse> {
  /**
   * @generated from field: double result = 1;
   */
  result = 0;

  /**
   * 在发生错误时使用（例如除以零）
   *
   * @generated from field: string error = 2;
   */
  error = "";

  constructor(data?: PartialMessage<CalculateResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "calculator.CalculateResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 2, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CalculateResponse {
    return new CalculateResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CalculateResponse {
    return new CalculateResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CalculateResponse {
    return new CalculateResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CalculateResponse | PlainMessage<CalculateResponse> | undefined, b: CalculateResponse | PlainMessage<CalculateResponse> | undefined): boolean {
    return proto3.util.equals(CalculateResponse, a, b);
  }
}

