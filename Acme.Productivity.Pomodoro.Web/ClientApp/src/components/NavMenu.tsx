import * as React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import * as CurrentUserStore from "../store/CurrentUser";
import { connect } from "react-redux";
import { ApplicationState } from "../store";
import { Trans } from "react-i18next";
import { FC, useEffect, useState } from "react";
import { userAuthenticationDisconnected, userAuthenticationRecover } from '../store/Actions';

type NavMenuProps = CurrentUserStore.UserState &
    NavMenuActions;

const NavMenu: FC<NavMenuProps> = (props) =>
{
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
       props.userAuthenticationRecover();
    }, []);

    return (
        <header>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light>
                <Container>
                    <NavbarBrand tag={Link} to="/">
                        <Trans>Title</Trans>
                    </NavbarBrand>
                    <NavbarToggler onClick={() => setIsOpen(!isOpen)} className="mr-2"/>
                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={isOpen} navbar>
                        <ul className="navbar-nav flex-grow">
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to="/"><Trans>Home</Trans></NavLink>
                            </NavItem>

                            {props.isConnected &&
                            <NavItem>
                                <NavLink href="#" onClick={() => props.userDisconnect()}><Trans>Logout</Trans></NavLink>
                            </NavItem>
                            }
                        </ul>
                    </Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

interface NavMenuActions
{
    userAuthenticationRecover:() => void;
    userDisconnect:() => void;
}

const mapDispatchToProps = (dispatch: any) => ({
    userAuthenticationRecover:() => dispatch(userAuthenticationRecover()),
    userDisconnect:() => dispatch(userAuthenticationDisconnected()),
});

export default connect(
    (state: ApplicationState) => state.currentUser,
    mapDispatchToProps,
)(NavMenu as any);
