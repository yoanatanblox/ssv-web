import BaseStore from '~app/common/stores/BaseStore';
import { action } from 'mobx';
import config from '~app/common/config';

class FaucetStore extends BaseStore {
    /**
     * @url https://docs.metamask.io/guide/registering-your-token.html
     */
    @action.bound
    registerSSVTokenInMetamask() {
        return new Promise((resolve, reject) => {
            return this.getStore('Wallet').web3.currentProvider.send({
                method: 'wallet_watchAsset',
                params: {
                    type: 'ERC20',
                    options: {
                        address: config.CONTRACTS.SSV_TOKEN.ADDRESS,
                        symbol: 'SSV',
                        decimals: 18,
                    },
                },
            }, (error: any, success: any) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(success);
                }
            });
        }).then((success: any) => {
            if (!success) {
                this.getStore('Notifications')
                    .showMessage('Can not add SSV to wallet!', 'error');
            }
        }).catch((error: any) => {
            console.error('Can not add SSV token to wallet', error);
            this.getStore('Notifications')
                .showMessage(`Can not add SSV to wallet: ${error.message}`, 'error');
        });
    }
}

export default FaucetStore;