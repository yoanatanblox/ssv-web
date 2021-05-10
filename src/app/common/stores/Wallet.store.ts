import Web3 from 'web3';
import Onboard from 'bnc-onboard';
import { Contract } from 'web3-eth-contract';
import { action, observable, computed } from 'mobx';
import config from '~app/common/config';
import SsvStore from '~app/common/stores/Ssv.store';
import StoresProvider from '~app/common/stores/StoresProvider';
import NotificationsStore from '~app/common/stores/Notifications.store';

class WalletStore {
  private notifications: NotificationsStore;
  private ssv: SsvStore;
  private contract: Contract | undefined;

  @observable web3: any = null;
  @observable ready: boolean = false;
  @observable wallet: any = null;
  @observable onboardSdk: any = null;
  @observable accountAddress: string = '';

  constructor() {
    const storeProvider: StoresProvider = StoresProvider.getInstance();
    this.notifications = storeProvider.getStore('notifications');
    this.ssv = storeProvider.getStore('ssv');
  }

  /**
   * Get smart contract instance
   * @param address
   */
  @action.bound
  async getContract(address?: string): Promise<Contract> {
    if (!this.contract && this.connected) {
      const abi: any = config.CONTRACT.ABI;
      const contractAddress: string = config.CONTRACT.ADDRESS;
      this.contract = new this.web3.eth.Contract(abi, address ?? contractAddress);
    }
    // @ts-ignore
    return this.contract;
  }

  @action.bound
  clean() {
    this.accountAddress = '';
  }

  @action.bound
  async disconnect() {
    if (this.connected) {
      await this.onboardSdk.walletReset();
      this.clean();
    }
  }

  @action.bound
  async connect() {
    try {
      console.debug('Connecting wallet..');
      await this.selectWalletAndCheckIfReady();
    } catch (error: any) {
      const message = error.message ?? 'Unknown errorMessage during connecting to wallet';
      this.notifications.showMessage(message, 'error');
      console.error(message);
    }
  }

  @computed
  get connected() {
    return this.accountAddress;
  }

  /**
   * Check wallet is ready to transact
   */
  @action.bound
  async selectWalletAndCheckIfReady() {
    if (this.connected) {
      return;
    }
    await this.init();
    if (!this.connected) {
      await this.onboardSdk.walletSelect();
      await this.onboardSdk.walletCheck()
        .then((ready: boolean) => {
          if (ready) {
            this.notifications.showMessage('Wallet is connected!', 'success');
            this.accountAddress = this.onboardSdk.getState().address;
          } else {
            this.notifications.showMessage('Wallet is not connected!', 'error');
          }
          console.debug(`Wallet is ${ready} for transaction:`);
        })
        .catch((error: any) => {
          console.error('Wallet check errorMessage', error);
          this.notifications.showMessage('Wallet is not connected!', 'error');
        });
    }
  }

  /**
   * Initialize SDK
   * @url https://docs.blocknative.com/onboard#initialization
   */
  @action.bound
  async init() {
    if (this.onboardSdk) {
      return;
    }
    console.debug('Initializing OnBoard SDK..');
    const connectionConfig = {
      dappId: config.ONBOARD.API_KEY,
      networkId: Number(config.ONBOARD.NETWORK_ID),
      subscriptions: {
        wallet: this.onWalletConnected,
      },
    };
    console.debug('OnBoard SDK Config:', connectionConfig);
    this.onboardSdk = Onboard(connectionConfig);
  }

  /**
   * Callback for connected wallet
   * @param wallet
   */
  @action.bound
  async onWalletConnected(wallet: any) {
    console.debug('Wallet Connected:', wallet);
    this.wallet = wallet;
    this.web3 = new Web3(wallet.provider);
    this.notifications.showMessage('Successfully connected to Wallet!', 'success');
  }
}

export default WalletStore;
