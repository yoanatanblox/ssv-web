import { Contract } from 'web3-eth-contract';

export default abstract class Wallet {
    public abstract connect(): void;
    public abstract decodeKey(): string;
    public abstract encodeKey(): string;
    public abstract getContract: Contract;
}
