import * as React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import * as CurrentUserStore from "../store/CurrentUser";
import { connect } from "react-redux";
import { ApplicationState } from "../store";
import { Trans } from "react-i18next";

type NavMenuProps = CurrentUserStore.UserState &
    typeof CurrentUserStore.actionCreators;

class NavMenu extends React.PureComponent<NavMenuProps, { isOpen: boolean }>
{
    public state = {
        isOpen: false,
    };

    public render()
    {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/">
                            <Trans>Title</Trans>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} className="mr-2"/>
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={this.state.isOpen} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/"><Trans>Home</Trans></NavLink>
                                </NavItem>

                                {this.props.isConnected &&
                                    <NavItem>
                                        <NavLink href="#" onClick={() => this.props.logout()}><Trans>Logout</Trans></NavLink>
                                    </NavItem>
                                }
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }

    private toggle = () =>
    {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };
}

export default connect(
    (state: ApplicationState) => state.currentUser,
    CurrentUserStore.actionCreators
)(NavMenu as any);
