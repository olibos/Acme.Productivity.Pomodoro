import * as React from 'react';
import { FC, useEffect} from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Trans } from 'react-i18next';
import { AppBar, Button, Container, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from '../useStyles';
import * as CurrentUserStore from '../store/CurrentUser';
import { ApplicationState } from '../store';

type NavMenuProps = CurrentUserStore.UserState &
    typeof CurrentUserStore.actionCreators;

const NavMenu: FC<NavMenuProps> = (props) =>
{
    const classes = useStyles();

    useEffect(() =>
    {
        props.recoverSession();
    });

    const history = useHistory();
    return (
        <header>
            <Container maxWidth="lg">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            <Button color="inherit" onClick={() => history.push("/") }>
                                <Trans>Title</Trans>
                            </Button>
                        </Typography>
                        {props.isConnected &&
                        <Button color="inherit" onClick={() => props.logout() }>
                            <Trans>Logout</Trans>
                        </Button>
                        }
                    </Toolbar>
                </AppBar>
            </Container>
        </header>
    );
};

export default connect(
    (state: ApplicationState) => state.currentUser,
    CurrentUserStore.actionCreators,
)(NavMenu as any);
