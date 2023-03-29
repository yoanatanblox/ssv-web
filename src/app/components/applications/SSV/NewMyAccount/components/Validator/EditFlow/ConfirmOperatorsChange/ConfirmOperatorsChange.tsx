import { observer } from 'mobx-react';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import config from '~app/common/config';
import { useStores } from '~app/hooks/useStores';
import GoogleTagManager from '~lib/analytics/GoogleTagManager';
import BackNavigation from '~app/components/common/BackNavigation';
import OperatorStore from '~app/common/stores/applications/SsvWeb/Operator.store';
import MyAccountStore from '~app/common/stores/applications/SsvWeb/MyAccount.store';
import ProcessStore, { SingleCluster } from '~app/common/stores/applications/SsvWeb/Process.store';
import ValidatorWhiteHeader from '~app/components/applications/SSV/NewMyAccount/common/ValidatorWhiteHeader';
import OperatorsReceipt from '~app/components/applications/SSV/NewMyAccount/components/Validator/EditFlow/OperatorsRecipt';
import { useStyles } from './ConfirmOperatorsChange.styles';

const ConfirmOperatorsChange = () => {
  const stores = useStores();
  const classes = useStyles();
  const navigate = useNavigate();
  const processStore: ProcessStore = stores.Process;
  const operatorStore: OperatorStore = stores.Operator;
  const myAccountStore: MyAccountStore = stores.MyAccount;
  const [operators, setOperators] = useState(null);
  const process: SingleCluster = processStore.getProcess;
  const validator = process?.item;
  
  useEffect(() => {
    if (!validator) return navigate(config.routes.SSV.MY_ACCOUNT.CLUSTER_DASHBOARD);
    myAccountStore.getValidator(validator.public_key).then((response: any) => {
      setOperators(response.operators);
    });
  }, []);

  if (!operators) return null;

  return (
    <Grid container className={classes.Wrapper}>
      <ValidatorWhiteHeader
        withCancel
        withBackButton={false}
        text={'Update Operators for Validator'}
        onCancelButtonClick={() => {
          GoogleTagManager.getInstance().sendEvent({
            category: 'cancel',
            action: 'click',
          });
        }}
      />
      <Grid container item className={classes.BottomWrapper}>
        <Grid item xs={12}>
          <BackNavigation />
        </Grid>
        <Grid container item className={classes.TableWrapper}>
          <Grid item className={classes.Table}>
            <OperatorsReceipt operators={operators} currentOperators header={'Current Operators'} />
          </Grid>
          <Grid item className={classes.Table}>
            <OperatorsReceipt previousOperators={operators} operators={Object.values(operatorStore.selectedOperators)}
              header={'New Operators'} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default observer(ConfirmOperatorsChange);