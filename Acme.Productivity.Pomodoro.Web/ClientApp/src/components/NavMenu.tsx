import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as CurrentUserStore from '../store/CurrentUser';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import { Trans } from 'react-i18next';
import { FC, useEffect, useState } from 'react';

type NavMenuProps = CurrentUserStore.UserState &
    typeof CurrentUserStore.actionCreators;

const NavMenu: FC<NavMenuProps> = (props) =>
{
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() =>
    {
        props.recoverSession();
    });

    return (
        <header>
            <div className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3">
                <div className="container">>
                    <NavLink to="/">
                        <Trans>Title</Trans>
                    </NavLink>
                    <a onClick={() => setIsOpen(!isOpen)} className="mr-2"/>
                    <div className="d-sm-inline-flex flex-sm-row-reverse">
                        <ul className="navbar-nav flex-grow">
                            <div>
                                <NavLink className="text-dark" to="/"><Trans>Home</Trans></NavLink>
                            </div>

                            {props.isConnected &&
                            <div>
                                <NavLink to="/" onClick={() => props.logout()}><Trans>Logout</Trans></NavLink>
                            </div>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default connect(
    (state: ApplicationState) => state.currentUser,
    CurrentUserStore.actionCreators,
)(NavMenu as any);
