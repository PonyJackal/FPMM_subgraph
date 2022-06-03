// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class ConditionPreparation extends ethereum.Event {
  get params(): ConditionPreparation__Params {
    return new ConditionPreparation__Params(this);
  }
}

export class ConditionPreparation__Params {
  _event: ConditionPreparation;

  constructor(event: ConditionPreparation) {
    this._event = event;
  }

  get conditionId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get oracle(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get questionId(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get outcomeSlotCount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class ConditionResolution extends ethereum.Event {
  get params(): ConditionResolution__Params {
    return new ConditionResolution__Params(this);
  }
}

export class ConditionResolution__Params {
  _event: ConditionResolution;

  constructor(event: ConditionResolution) {
    this._event = event;
  }

  get conditionId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get oracle(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get questionId(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get outcomeSlotCount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get payoutNumerators(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }
}

export class PayoutRedemption extends ethereum.Event {
  get params(): PayoutRedemption__Params {
    return new PayoutRedemption__Params(this);
  }
}

export class PayoutRedemption__Params {
  _event: PayoutRedemption;

  constructor(event: PayoutRedemption) {
    this._event = event;
  }

  get redeemer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get collateralToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get parentCollectionId(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get conditionId(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get indexSets(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }

  get payout(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class PositionSplit extends ethereum.Event {
  get params(): PositionSplit__Params {
    return new PositionSplit__Params(this);
  }
}

export class PositionSplit__Params {
  _event: PositionSplit;

  constructor(event: PositionSplit) {
    this._event = event;
  }

  get stakeholder(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get collateralToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get parentCollectionId(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get conditionId(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get partition(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }

  get amount(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class PositionsMerge extends ethereum.Event {
  get params(): PositionsMerge__Params {
    return new PositionsMerge__Params(this);
  }
}

export class PositionsMerge__Params {
  _event: PositionsMerge;

  constructor(event: PositionsMerge) {
    this._event = event;
  }

  get stakeholder(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get collateralToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get parentCollectionId(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get conditionId(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get partition(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }

  get amount(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class TransferBatch extends ethereum.Event {
  get params(): TransferBatch__Params {
    return new TransferBatch__Params(this);
  }
}

export class TransferBatch__Params {
  _event: TransferBatch;

  constructor(event: TransferBatch) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }

  get values(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }
}

export class TransferSingle extends ethereum.Event {
  get params(): TransferSingle__Params {
    return new TransferSingle__Params(this);
  }
}

export class TransferSingle__Params {
  _event: TransferSingle;

  constructor(event: TransferSingle) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get id(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get value(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class URI extends ethereum.Event {
  get params(): URI__Params {
    return new URI__Params(this);
  }
}

export class URI__Params {
  _event: URI;

  constructor(event: URI) {
    this._event = event;
  }

  get value(): string {
    return this._event.parameters[0].value.toString();
  }

  get id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ConditionalTokens extends ethereum.SmartContract {
  static bind(address: Address): ConditionalTokens {
    return new ConditionalTokens("ConditionalTokens", address);
  }

  balanceOf(owner: Address, id: BigInt): BigInt {
    let result = super.call(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromUnsignedBigInt(id)]
    );

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address, id: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromUnsignedBigInt(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOfBatch(owners: Array<Address>, ids: Array<BigInt>): Array<BigInt> {
    let result = super.call(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(owners),
        ethereum.Value.fromUnsignedBigIntArray(ids)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_balanceOfBatch(
    owners: Array<Address>,
    ids: Array<BigInt>
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(owners),
        ethereum.Value.fromUnsignedBigIntArray(ids)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getCollectionId(
    parentCollectionId: Bytes,
    conditionId: Bytes,
    indexSet: BigInt
  ): Bytes {
    let result = super.call(
      "getCollectionId",
      "getCollectionId(bytes32,bytes32,uint256):(bytes32)",
      [
        ethereum.Value.fromFixedBytes(parentCollectionId),
        ethereum.Value.fromFixedBytes(conditionId),
        ethereum.Value.fromUnsignedBigInt(indexSet)
      ]
    );

    return result[0].toBytes();
  }

  try_getCollectionId(
    parentCollectionId: Bytes,
    conditionId: Bytes,
    indexSet: BigInt
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getCollectionId",
      "getCollectionId(bytes32,bytes32,uint256):(bytes32)",
      [
        ethereum.Value.fromFixedBytes(parentCollectionId),
        ethereum.Value.fromFixedBytes(conditionId),
        ethereum.Value.fromUnsignedBigInt(indexSet)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getConditionId(
    oracle: Address,
    questionId: Bytes,
    outcomeSlotCount: BigInt
  ): Bytes {
    let result = super.call(
      "getConditionId",
      "getConditionId(address,bytes32,uint256):(bytes32)",
      [
        ethereum.Value.fromAddress(oracle),
        ethereum.Value.fromFixedBytes(questionId),
        ethereum.Value.fromUnsignedBigInt(outcomeSlotCount)
      ]
    );

    return result[0].toBytes();
  }

  try_getConditionId(
    oracle: Address,
    questionId: Bytes,
    outcomeSlotCount: BigInt
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getConditionId",
      "getConditionId(address,bytes32,uint256):(bytes32)",
      [
        ethereum.Value.fromAddress(oracle),
        ethereum.Value.fromFixedBytes(questionId),
        ethereum.Value.fromUnsignedBigInt(outcomeSlotCount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getOutcomeSlotCount(conditionId: Bytes): BigInt {
    let result = super.call(
      "getOutcomeSlotCount",
      "getOutcomeSlotCount(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(conditionId)]
    );

    return result[0].toBigInt();
  }

  try_getOutcomeSlotCount(conditionId: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getOutcomeSlotCount",
      "getOutcomeSlotCount(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(conditionId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getPositionId(collateralToken: Address, collectionId: Bytes): BigInt {
    let result = super.call(
      "getPositionId",
      "getPositionId(address,bytes32):(uint256)",
      [
        ethereum.Value.fromAddress(collateralToken),
        ethereum.Value.fromFixedBytes(collectionId)
      ]
    );

    return result[0].toBigInt();
  }

  try_getPositionId(
    collateralToken: Address,
    collectionId: Bytes
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getPositionId",
      "getPositionId(address,bytes32):(uint256)",
      [
        ethereum.Value.fromAddress(collateralToken),
        ethereum.Value.fromFixedBytes(collectionId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  payoutDenominator(param0: Bytes): BigInt {
    let result = super.call(
      "payoutDenominator",
      "payoutDenominator(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return result[0].toBigInt();
  }

  try_payoutDenominator(param0: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "payoutDenominator",
      "payoutDenominator(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  payoutNumerators(param0: Bytes, param1: BigInt): BigInt {
    let result = super.call(
      "payoutNumerators",
      "payoutNumerators(bytes32,uint256):(uint256)",
      [
        ethereum.Value.fromFixedBytes(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBigInt();
  }

  try_payoutNumerators(
    param0: Bytes,
    param1: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "payoutNumerators",
      "payoutNumerators(bytes32,uint256):(uint256)",
      [
        ethereum.Value.fromFixedBytes(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class MergePositionsCall extends ethereum.Call {
  get inputs(): MergePositionsCall__Inputs {
    return new MergePositionsCall__Inputs(this);
  }

  get outputs(): MergePositionsCall__Outputs {
    return new MergePositionsCall__Outputs(this);
  }
}

export class MergePositionsCall__Inputs {
  _call: MergePositionsCall;

  constructor(call: MergePositionsCall) {
    this._call = call;
  }

  get collateralToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get parentCollectionId(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get conditionId(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get partition(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get amount(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class MergePositionsCall__Outputs {
  _call: MergePositionsCall;

  constructor(call: MergePositionsCall) {
    this._call = call;
  }
}

export class PrepareConditionCall extends ethereum.Call {
  get inputs(): PrepareConditionCall__Inputs {
    return new PrepareConditionCall__Inputs(this);
  }

  get outputs(): PrepareConditionCall__Outputs {
    return new PrepareConditionCall__Outputs(this);
  }
}

export class PrepareConditionCall__Inputs {
  _call: PrepareConditionCall;

  constructor(call: PrepareConditionCall) {
    this._call = call;
  }

  get oracle(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get questionId(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get outcomeSlotCount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class PrepareConditionCall__Outputs {
  _call: PrepareConditionCall;

  constructor(call: PrepareConditionCall) {
    this._call = call;
  }
}

export class RedeemPositionsCall extends ethereum.Call {
  get inputs(): RedeemPositionsCall__Inputs {
    return new RedeemPositionsCall__Inputs(this);
  }

  get outputs(): RedeemPositionsCall__Outputs {
    return new RedeemPositionsCall__Outputs(this);
  }
}

export class RedeemPositionsCall__Inputs {
  _call: RedeemPositionsCall;

  constructor(call: RedeemPositionsCall) {
    this._call = call;
  }

  get collateralToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get parentCollectionId(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get conditionId(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get indexSets(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }
}

export class RedeemPositionsCall__Outputs {
  _call: RedeemPositionsCall;

  constructor(call: RedeemPositionsCall) {
    this._call = call;
  }
}

export class ReportPayoutsCall extends ethereum.Call {
  get inputs(): ReportPayoutsCall__Inputs {
    return new ReportPayoutsCall__Inputs(this);
  }

  get outputs(): ReportPayoutsCall__Outputs {
    return new ReportPayoutsCall__Outputs(this);
  }
}

export class ReportPayoutsCall__Inputs {
  _call: ReportPayoutsCall;

  constructor(call: ReportPayoutsCall) {
    this._call = call;
  }

  get questionId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get payouts(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class ReportPayoutsCall__Outputs {
  _call: ReportPayoutsCall;

  constructor(call: ReportPayoutsCall) {
    this._call = call;
  }
}

export class SafeBatchTransferFromCall extends ethereum.Call {
  get inputs(): SafeBatchTransferFromCall__Inputs {
    return new SafeBatchTransferFromCall__Inputs(this);
  }

  get outputs(): SafeBatchTransferFromCall__Outputs {
    return new SafeBatchTransferFromCall__Outputs(this);
  }
}

export class SafeBatchTransferFromCall__Inputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get values(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SafeBatchTransferFromCall__Outputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get id(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SplitPositionCall extends ethereum.Call {
  get inputs(): SplitPositionCall__Inputs {
    return new SplitPositionCall__Inputs(this);
  }

  get outputs(): SplitPositionCall__Outputs {
    return new SplitPositionCall__Outputs(this);
  }
}

export class SplitPositionCall__Inputs {
  _call: SplitPositionCall;

  constructor(call: SplitPositionCall) {
    this._call = call;
  }

  get collateralToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get parentCollectionId(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get conditionId(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get partition(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get amount(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class SplitPositionCall__Outputs {
  _call: SplitPositionCall;

  constructor(call: SplitPositionCall) {
    this._call = call;
  }
}
