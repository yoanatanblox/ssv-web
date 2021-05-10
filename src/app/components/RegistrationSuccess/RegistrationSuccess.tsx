import React from 'react';
import { observer } from 'mobx-react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import { useHistory } from 'react-router-dom';
// import { useStores } from '~app/hooks/useStores';
import Header from '~app/common/components/Header';
// import SsvStore from '~app/common/stores/Ssv.store';
import { translations } from '~app/common/config';
import { useStyles } from '~app/components/Home/Home.styles';

const RegistrationSuccess = () => {
  // TODO: cleanup all stores from sensitive information
  const classes = useStyles();
  // const history = useHistory();
  // const stores = useStores();
  // const ssv: SSVStore = stores.ssv;

  return (
    <Paper className={classes.mainContainer}>
      <Header title={translations.VALIDATOR.SUCCESS.TITLE} subtitle={translations.VALIDATOR.SUCCESS.DESCRIPTION} />

      <Grid container wrap="nowrap" spacing={0} className={classes.gridContainer}>
        <Grid item xs zeroMinWidth className={classes.gridContainer}>
          TODO: finish this screen
        </Grid>
      </Grid>
    </Paper>
  );
};

export default observer(RegistrationSuccess);
