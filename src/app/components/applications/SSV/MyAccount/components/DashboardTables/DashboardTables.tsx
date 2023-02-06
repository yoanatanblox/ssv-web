import { observer } from 'mobx-react';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import config from '~app/common/config';
import { useStores } from '~app/hooks/useStores';
import Status from '~app/components/common/Status';
import { longStringShorten } from '~lib/utils/strings';
import { getBaseBeaconchaUrl } from '~lib/utils/beaconcha';
import ToolTip from '~app/components/common/ToolTip/ToolTip';
import { ReactTable } from '~app/components/common/ReactTable';
import GoogleTagManager from '~lib/analytics/GoogleTagManager';
import WalletStore from '~app/common/stores/applications/SsvWeb/Wallet.store';
import OperatorStore from '~app/common/stores/applications/SsvWeb/Operator.store';
import ValidatorStore from '~app/common/stores/applications/SsvWeb/Validator.store';
import MyAccountStore from '~app/common/stores/applications/SsvWeb/MyAccount.store';
import NotificationsStore from '~app/common/stores/applications/SsvWeb/Notifications.store';
import OperatorId from '~app/components/applications/SSV/MyAccount/components/Operator/common/OperatorId';
import { useStyles } from '~app/components/applications/SSV/MyAccount/components/DashboardTables/DashboardTables.styles';

type LoadItemsParams = {
  type: string;
  forcePerPage?: number;
  paginationPage?: number;
  reFetchBeaconData?: boolean;
};

const DashboardTables = () => {
  const stores = useStores();
  const classes = useStyles();
  const navigate = useNavigate();
  const walletStore: WalletStore = stores.Wallet;
  const operatorStore: OperatorStore = stores.Operator;
  const validatorStore: ValidatorStore = stores.Validator;
  const myAccountStore: MyAccountStore = stores.MyAccount;
  const notificationsStore: NotificationsStore = stores.Notifications;
  const [loadingOperators, setLoadingOperators] = useState(true);
  const [loadingValidators, setLoadingValidators] = useState(true);
  const operatorsPagination = myAccountStore?.ownerAddressOperatorsPagination;
  const validatorsPagination = myAccountStore?.ownerAddressValidatorsPagination;

  useEffect(() => {
    const loadData = async () => {
      await loadItems({ type: 'validators' });
      await loadItems({ type: 'operators' });
    };

    loadData();
  }, [walletStore.accountAddress]);

  /**
   * Loading operators by page
   * @param props: LoadItemsParams
   */
  async function loadItems(props: LoadItemsParams) {
    // eslint-disable-next-line react/prop-types
    const { type, forcePerPage, paginationPage, reFetchBeaconData } = props;

    if (type === 'operators') {
      setLoadingOperators(true);
      await myAccountStore.getOwnerAddressOperators({ forcePage: paginationPage, forcePerPage });
      setLoadingOperators(false);
    } else {
      setLoadingValidators(true);
      await myAccountStore.getOwnerAddressValidators({
        forcePage: paginationPage ?? 1,
        forcePerPage: forcePerPage ?? 5,
        reFetchBeaconData,
      });
      setLoadingValidators(false);
    }
  }

  /**
   * When per page dropdown changed
   * @param type
   * @param perPage
   */
  function onChangeRowsPerPage(type: string, perPage: number) {
    loadItems({ type, paginationPage: 1, forcePerPage: perPage, reFetchBeaconData: true });
  }

  function onChangePage(props: LoadItemsParams) {
    loadItems({ ...props, reFetchBeaconData: true });
  }

  const openSingleValidator = (publicKey: string) => {
    validatorStore.processValidatorPublicKey = publicKey;
    navigate(config.routes.SSV.MY_ACCOUNT.VALIDATOR.ROOT);
  };
  const openSingleOperator = (operatorId: number) => {
    operatorStore.processOperatorId = operatorId;
    navigate(config.routes.SSV.MY_ACCOUNT.OPERATOR.ROOT);
  };

  const copyToClipboard = (publicKey: string) => {
    navigator.clipboard.writeText(publicKey);
    notificationsStore.showMessage('Copied to clipboard.', 'success');
  };

  const validatorsColumns = [
    {
      id: 'col14',
      Header: <Grid container style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography>Validators</Typography>
      </Grid>,
      columns: [
        {
          Header: 'Public key',
          accessor: 'public_key',
          width: 60,
        },
        {
          Header: <Grid container item alignItems={'center'}>
            <Grid item style={{ marginRight: 4 }}>
              Status
            </Grid>
            <ToolTip
              text={'Refers to the validator’s status in the SSV network (not beacon chain), and reflects whether its operators are consistently performing their duties (according to the last 2 epochs).'} />
          </Grid>,
          accessor: 'status',
        },
        {
          Header: 'Balance',
          accessor: 'balance',
        },
        {
          Header: 'Est. APR',
          accessor: 'apr',
        },
        {
          Header: '',
          accessor: 'extra_buttons',
        },
      ],
    },
  ];

  const operatorsColumns = [
    {
      id: 'col13',
      Header: <Grid container style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography>Operators</Typography>
      </Grid>,
      columns: [
        {
          Header: 'Operator',
          accessor: 'public_key',
          width: 60,
        },
        {
          Header: <Grid container item alignItems={'center'}>
            <Grid item style={{ marginRight: 4 }}>
              Status
            </Grid>
            <ToolTip
              text={'Is the operator performing duties for the majority of its validators for the last 2 epochs.'} />
          </Grid>,
          accessor: 'status',
        },
        // {
        //     Header: 'Revenue',
        //     accessor: 'revenue',
        // },
        {
          Header: 'Validators',
          accessor: 'validators_count',
        },
        {
          Header: '',
          accessor: 'extra_buttons',
        },
      ],
    },
  ];

  // return validator operators mapped with additional fields fee and performance
  const validatorsData = myAccountStore?.ownerAddressValidators?.map((validator: any) => {
    const { public_key, status, balance, apr } = validator;

    return {
      public_key: <Grid container item>
        <Grid container item className={classes.Name}>
          <Grid>{longStringShorten(public_key, 6, 4)}</Grid>
          <Grid className={classes.copyImage} onClick={() => {
            copyToClipboard(public_key);
          }} />
        </Grid>
      </Grid>,
      status: <Status status={status} />,
      balance: <Grid container item>
        <Grid item xs={12} className={classes.Balance}>{balance} ETH</Grid>
        {/* <Grid item xs={12} className={classes.DollarBalance}>~$5.02</Grid> */}
      </Grid>,
      apr: <Grid container item>
        <Grid item xs={12} className={classes.ValidatorApr}>{apr}%</Grid>
      </Grid>,
      extra_buttons: <Grid container item style={{ gap: 7, justifyContent: 'flex-end' }}>
        <Grid className={classes.BeaconImage} onClick={() => {
          GoogleTagManager.getInstance().sendEvent({
            category: 'external_link',
            action: 'click',
            label: 'Open Beaconcha',
          });
          window.open(`${getBaseBeaconchaUrl()}/validator/${public_key}`);
        }} />
        <Grid className={classes.ExplorerImage} onClick={() => {
          GoogleTagManager.getInstance().sendEvent({
            category: 'explorer_link',
            action: 'click',
            label: 'validator',
          });
          window.open(`${config.links.EXPLORER_URL}/validators/${public_key.replace('0x', '')}/?version=${config.links.EXPLORER_VERSION}&network=${config.links.EXPLORER_NETWORK}`);
        }} />
        <Grid className={classes.SettingsImage} onClick={() => {
          openSingleValidator(public_key);
        }} />
      </Grid>,
    };
  });

  // return validator operators mapped with additional fields fee and performance
  const operatorsData = myAccountStore?.ownerAddressOperators?.map((operator: any) => {
    const { id, name, status, /* revenue, */ validators_count } = operator;

    return {
      public_key: <Grid container item>
        <Grid item xs={12} className={classes.Name}>{name}</Grid>
        <OperatorId withoutExplorer text={'ID: '} id={id} />
      </Grid>,
      status: <Status status={status} />,
      // revenue: <Grid container item>
      //   <Grid item xs={12} className={classes.Balance}>{formatNumberToUi(walletStore.fromWei(revenue))} SSV</Grid>
      // </Grid>,
      validators_count: <Grid item className={classes.ValidatorApr}>{validators_count}</Grid>,
      // fee: <Grid item container justifyContent={'space-between'}>
      //   <Grid item container xs>
      //     <Grid item xs={12}>
      //       <Typography>{ssvStore.getFeeForYear(walletStore.fromWei(operator.fee))} asdSSV</Typography>
      //     </Grid>
      //     <Grid item>~$757.5</Grid>
      //   </Grid>
      //   <Grid className={classes.ExplorerImage} onClick={() => {
      //          GoogleTagManager.getInstance().sendEvent({
      //            category: 'explorer_link',
      //            action: 'click',
      //            label: 'operator',
      //          });
      //          window.open(`${config.links.EXPLORER_URL}/operators/${public_key}`);
      //     }} />
      // </Grid>,
      extra_buttons: <Grid container item style={{ gap: 7, justifyContent: 'flex-end' }}>
        <Grid className={classes.ExplorerImage} onClick={() => {
          GoogleTagManager.getInstance().sendEvent({
            category: 'explorer_link',
            action: 'click',
            label: 'operator',
          });
          window.open(`${config.links.EXPLORER_URL}/operators/${id}/?version=${config.links.EXPLORER_VERSION}&network=${config.links.EXPLORER_NETWORK}`);
        }} />
        <Grid className={classes.SettingsImage} onClick={() => {
          openSingleOperator(id);
        }} />
      </Grid>,
    };
  });

  return (
    <Grid container item className={classes.Table}>
      {myAccountStore?.ownerAddressValidators?.length > 0 && (
        <Grid item xs={12} style={{ marginBottom: 20 }}>
          <ReactTable
            data={validatorsData}
            cols={validatorsColumns}
            loading={loadingValidators}
            actionProps={{
              onChangePage,
              type: 'validators',
              onChangeRowsPerPage,
              totalPages: validatorsPagination.pages,
              currentPage: validatorsPagination.page,
              perPage: validatorsPagination.per_page,
              totalAmountOfItems: validatorsPagination.total,
            }}
          />
        </Grid>
      )}
      {myAccountStore?.ownerAddressOperators.length > 0 && (
        <Grid item xs style={{ marginBottom: 20 }}>
          <ReactTable
            data={operatorsData}
            cols={operatorsColumns}
            loading={loadingOperators}
            actionProps={{
              type: 'operators',
              onChangeRowsPerPage,
              onChangePage: loadItems,
              totalPages: operatorsPagination.pages,
              currentPage: operatorsPagination.page,
              perPage: operatorsPagination.per_page,
              totalAmountOfItems: operatorsPagination.total,
            }}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default React.memo(observer(DashboardTables));
