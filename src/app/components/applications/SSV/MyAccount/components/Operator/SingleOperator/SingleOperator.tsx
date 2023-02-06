import { observer } from 'mobx-react';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import config from '~app/common/config';
import Operator from '~lib/api/Operator';
import { useStores } from '~app/hooks/useStores';
import Status from '~app/components/common/Status';
import Button from '~app/components/common/Button';
import { formatNumberToUi } from '~lib/utils/numbers';
import { longStringShorten } from '~lib/utils/strings';
import { getBaseBeaconchaUrl } from '~lib/utils/beaconcha';
import { Table } from '~app/components/common/Table/Table';
import ToolTip from '~app/components/common/ToolTip/ToolTip';
import BorderScreen from '~app/components/common/BorderScreen';
import GoogleTagManager from '~lib/analytics/GoogleTagManager';
import ImageDiv from '~app/components/common/ImageDiv/ImageDiv';
import SsvAndSubTitle from '~app/components/common/SsvAndSubTitle';
import SsvStore from '~app/common/stores/applications/SsvWeb/SSV.store';
import WhiteWrapper from '~app/components/common/WhiteWrapper/WhiteWrapper';
import WalletStore from '~app/common/stores/applications/SsvWeb/Wallet.store';
import OperatorStore from '~app/common/stores/applications/SsvWeb/Operator.store';
import ApplicationStore from '~app/common/stores/applications/SsvWeb/Application.store';
import NotificationsStore from '~app/common/stores/applications/SsvWeb/Notifications.store';
import {
  useStyles,
} from '~app/components/applications/SSV/MyAccount/components/Operator/SingleOperator/SingleOperator.styles';
import UpdateFeeState
  from '~app/components/applications/SSV/MyAccount/components/Operator/EditFeeFlow/UpdateFee/components/UpdateFeeState';
import OperatorDetails
  from '~app/components/applications/SSV/RegisterValidatorHome/components/SelectOperators/components/FirstSquare/components/OperatorDetails';

const SingleOperator = () => {
  const stores = useStores();
  const navigate = useNavigate();
  const beaconchaBaseUrl = getBaseBeaconchaUrl();
  const [operator, setOperator] = useState(null);
  const [operatorsValidators, setOperatorsValidators] = useState([]);
  const [operatorsValidatorsPagination, setOperatorsValidatorsPagination] = useState(null);
  const ssvStore: SsvStore = stores.SSV;
  const walletStore: WalletStore = stores.Wallet;
  const operatorStore: OperatorStore = stores.Operator;
  const applicationStore: ApplicationStore = stores.Application;
  const notificationsStore: NotificationsStore = stores.Notifications;

  useEffect(() => {
    if (!operatorStore.processOperatorId) return navigate(applicationStore.strategyRedirect);
    applicationStore.setIsLoading(true);
    Operator.getInstance().getOperator(operatorStore.processOperatorId).then(async (response: any) => {
      if (response) {
        // @ts-ignore
        response.revenue = await operatorStore.getOperatorRevenue(operatorStore.processOperatorId);
        setOperator(response);
        loadOperatorValidators({ page: 1, perPage: 5 });
      }
      applicationStore.setIsLoading(false);
    });
  }, []);

  const loadOperatorValidators = async (props: { page: number, perPage: number }) => {
    // eslint-disable-next-line react/prop-types
    const { page, perPage } = props;
    const response = await Operator.getInstance().getOperatorValidators({
      // @ts-ignore
      operatorId: operatorStore.processOperatorId,
      page,
      perPage,
    });
    setOperatorsValidators(response.validators);
    setOperatorsValidatorsPagination(response.pagination);
  };

  const onChangeRowsPerPage = (type: string, perPage: number) => {
    loadOperatorValidators({ page: 1, perPage });
  };

  const onChangePage = (obj: any) => {
    // @ts-ignore
    loadOperatorValidators({ page: obj.paginationPage, perPage: operatorsValidatorsPagination?.per_page ?? 5 });
  };

  // @ts-ignore
  const { page, pages, per_page, total } = operatorsValidatorsPagination || {};

  // @ts-ignore
  const { logo, status, validators_count, fee } = operator || {};
  const yearlyFee = formatNumberToUi(ssvStore.newGetFeeForYear(walletStore.fromWei(fee)));
  const classes = useStyles({ operatorLogo: logo, noValidators: operatorsValidators.length === 0 });

  const copyToClipboard = (key: string) => {
    navigator.clipboard.writeText(key);
    notificationsStore.showMessage('Copied to clipboard.', 'success');
  };

  const openExplorer = (key: string, linkType: string) => {
    GoogleTagManager.getInstance().sendEvent({
      category: 'explorer_link',
      action: 'click',
      label: linkType,
    });
    window.open(`${config.links.EXPLORER_URL}/${key}/?version=${config.links.EXPLORER_VERSION}&network=${config.links.EXPLORER_NETWORK}`, '_blank');
  };

  const moveToUpdateFee = () => {
    navigate(config.routes.SSV.MY_ACCOUNT.OPERATOR.UPDATE_FEE.START);
  };

  const openBeaconcha = (publicKey: string) => {
    GoogleTagManager.getInstance().sendEvent({
      category: 'external_link',
      action: 'click',
      label: 'Open Beaconcha',
    });
    window.open(`${beaconchaBaseUrl}/validator/${publicKey}/?version=${config.links.EXPLORER_VERSION}&network=${config.links.EXPLORER_NETWORK}`, '_blank');
  };

  const operatorView = React.useMemo(
    () => [
      {
        key: <Typography>Name</Typography>,
        value: <Grid item container className={classes.ItemWrapper} xs={12}>
          <OperatorDetails withCopy operator={operator} />
        </Grid>,
      },
      // {
      //     key: <Typography>Address</Typography>,
      //     value: <Grid item container className={classes.ItemWrapper} xs={12}>
      //       <Typography
      //         className={classes.TableValueText}>{`0x${longStringShorten(address, 4, 4)}`}</Typography>
      //       <ImageDiv onClick={() => copyToClipboard(address)} image={'copy'} width={24} height={24} />
      //       <ImageDiv onClick={() => openExplorer(address)} image={'explorer'} width={24}
      //         height={24} />
      //     </Grid>,
      // },
      {
        key: <Grid container item alignItems={'center'}>
          <Grid item style={{ marginTop: 1, marginRight: 4 }}>
            Status
          </Grid>
          <ToolTip
            text={'Is the operator performing duties for the majority of its validators for the last 2 epochs.'} />
        </Grid>,
        value: <Grid item container className={classes.ItemWrapper} xs={12}>
          <Status status={status} />
        </Grid>,
      },
      {
        key: <Typography>Validators</Typography>,
        value: <Grid item container className={classes.ItemWrapper} xs={12}>
          <Typography className={classes.TableValueText}>{validators_count}</Typography>
        </Grid>,
      },
      // {
      //     key: <Typography>Revenue</Typography>,
      //     value: <Grid item container className={classes.ItemWrapper} xs={12}>
      //       <SsvAndSubTitle leftTextAlign ssv={
      //           // @ts-ignore
      //           operator?.revenue
      //       } />
      //     </Grid>,
      // },
    ], [operator, applicationStore.darkMode],
  );

  const data = React.useMemo(
    () => {
      // return validator operators mapped with additional fields fee and performance
      // @ts-ignore
      return operatorsValidators?.map((validator: any) => {
        // eslint-disable-next-line no-param-reassign
        const {
          public_key,
        } = validator;

        return {
          status: <Status status={'inactive'} />,
          public_key: <Typography
            className={classes.TableValueText}>{`0x${longStringShorten(public_key, 6, 4)}`}</Typography>,
          extra_buttons: <Grid item container className={classes.ExtraButtonWrapper}>
            <ImageDiv onClick={() => copyToClipboard(validator.public_key)} image={'copy'} width={20}
              height={20} />
            <ImageDiv onClick={() => openExplorer(`validators/${validator.public_key}`, 'validator')} image={'explorer'}
              width={20} height={20} />
            <ImageDiv onClick={() => openBeaconcha(`0x${validator.public_key}`)} image={'beacon'} width={20}
              height={20} />
          </Grid>,
        };
      });
    },
    [operatorsValidators, applicationStore.darkMode],
  );

  const columns = React.useMemo(
    () => [
      {
        id: 'col13',
        Header: <Grid item container justifyContent={'space-between'} alignItems={'center'}>
          <Typography>Validators</Typography>
        </Grid>,
        columns: [
          {
            Header: 'Address',
            accessor: 'public_key',
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
          {
            Header: '',
            accessor: 'extra_buttons',
          },

        ],
      },
    ], [applicationStore.darkMode],
  );

  if (!operator) return null;

  return (
    <Grid container item>
      <WhiteWrapper
        backButtonRedirect={config.routes.SSV.MY_ACCOUNT.DASHBOARD}
        withSettings={{
          text: 'Remove Operator',
          onClick: () => {
            navigate(config.routes.SSV.MY_ACCOUNT.OPERATOR.REMOVE.ROOT);
          },
        }}
        withExplorer
        // @ts-ignore
        explorerLink={operator?.id}
        header={'Operator Details'}
      >
        <Grid item container className={classes.ItemsWrapper}>
          {operatorView.map((item: any, index: number) => (
            <Grid item key={index}>
              <Grid item xs={12} className={classes.TableKey}>
                {item.key}
              </Grid>
              {item.value}
            </Grid>
          ))}
        </Grid>
      </WhiteWrapper>
      <Grid container item className={classes.SecondSectionWrapper}>
        {operatorsValidators && operatorsValidators.length > 0 && (
          <Grid item className={classes.OperatorsValidatorsTable}>
            <Table
              data={data}
              columns={columns}
              actionProps={{
                onChangePage,
                perPage: per_page,
                type: 'operator',
                currentPage: page,
                totalPages: pages,
                totalAmountOfItems: total,
                onChangeRowsPerPage,
              }}
            />
          </Grid>
        )}
        {operatorsValidatorsPagination && operatorsValidators.length === 0 && (
          <Grid item className={classes.OperatorsValidatorsTable}>
            <Grid item xs={12} className={classes.NoRecordImage} />
            <Grid item xs={12} className={classes.NoRecordsText}>No Validators</Grid>
          </Grid>
          //     <Grid hover>
          //     <StyledCell className={classes.NoRecordsWrapper}>
          //         <Grid container>
          //             <Grid item xs={12} className={classes.NoRecordImage}/>
          //             <Grid item xs={12} className={classes.NoRecordsText}>No results found</Grid>
          //             <Grid item xs={12} className={classes.NoRecordsText}>Please try different keyword or
          //                 filter</Grid>
          //         </Grid>
          //     </StyledCell>
          // </TableRow>
        )}

        <Grid item className={classes.AnnualWrapper}>
          <BorderScreen
            withoutNavigation
            header={'Annual Fee'}
            SideHeader={UpdateFeeState}
            sectionClass={classes.AnnualSection}
            body={[
              <Grid container item>
                <Grid item xs={12}>
                  <SsvAndSubTitle ssv={yearlyFee || 0} bold leftTextAlign />
                </Grid>
              </Grid>,
            ]}
            bottom={[
              <Grid item xs>
                <Button disable={false} text={'Change Fee'} onClick={moveToUpdateFee} />
              </Grid>,
            ]}
            bottomWrapper={classes.ButtonSection}
            wrapperClass={classes.AnnualWrapper}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default observer(SingleOperator);
