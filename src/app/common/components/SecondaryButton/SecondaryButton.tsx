import React from 'react';
import { observer } from 'mobx-react';
import Button from '@material-ui/core/Button';
import { useStores } from '~app/hooks/useStores';
import WalletStore from '~app/common/stores/Wallet/Wallet.store';
import { useStyles } from './SecondaryButton.styles';

type Props = {
    text: string,
    onClick: any,
    dataTestId?: string,
    withVerifyConnection?: boolean
};

const SecondaryButton = (props: Props) => {
    const stores = useStores();
    const classes = useStyles();
    const walletStore: WalletStore = stores.Wallet;
    const { text, onClick, dataTestId, withVerifyConnection } = props;

    const submit = async () => {
        if (withVerifyConnection && !walletStore.connected) {
            await walletStore.connect();
        }
        onClick();
    };

    return (
      <Button
        className={classes.SecondaryButton}
        data-testid={dataTestId}
        onClick={submit}
        >
        {text}
      </Button>
    );
};

export default observer(SecondaryButton);