import React from 'react';
import { observer } from 'mobx-react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import config, { translations } from '~app/common/config';
import Screen from '~app/common/components/Screen/Screen';
import ConditionalLink from '~app/common/components/ConditionalLink';
import LinkButton from '~app/common/components/LinkButton/LinkButton';
import { useStyles } from '~app/components/RegisterValidatorHome/components/CreateValidator/CreateValidator.styles';

const DepositViaLaunchpad = () => {
  const classes = useStyles();

  const redirectToLaunchpad = async () => {
    window.open(config.links.LAUNCHPAD_LINK);
  };

  return (
    <Screen
      navigationText={translations.VALIDATOR.DEPOSIT.NAVIGATION_TEXT}
      navigationLink={config.routes.VALIDATOR.IMPORT}
      title={translations.VALIDATOR.DEPOSIT.TITLE}
      subTitle={translations.VALIDATOR.DEPOSIT.SUB_TITLE}
      body={(
        <Grid container wrap="nowrap" spacing={4} className={classes.gridContainer}>
          <Grid item xs className={classes.gridContainer}>
            <Grid container spacing={2}>
              {translations.VALIDATOR.DEPOSIT.BODY_TEXT.map((text: string) => {
                    return (
                      <Grid key={text} item>
                        <Typography className={classes.bodyText} variant="subtitle1">
                          {text}
                        </Typography>
                      </Grid>
                    );
                  })}
            </Grid>
          </Grid>
          <Grid item xs className={classes.gridContainer}>
            <ConditionalLink to={config.routes.VALIDATOR.CREATE} condition={false} onClick={redirectToLaunchpad}>
              <LinkButton primaryLabel={'Visit Ethereum launchpad'} secondaryLabel={''} />
            </ConditionalLink>
          </Grid>
          <Grid item xs className={classes.gridContainer}>
            <img className={classes.rhinoImage} src={'/images/rhino.png'} />
          </Grid>
        </Grid>
      )}
    />
  );
};
export default observer(DepositViaLaunchpad);