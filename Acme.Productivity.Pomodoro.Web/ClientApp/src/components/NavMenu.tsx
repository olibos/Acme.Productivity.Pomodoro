import * as React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { connect } from 'react-redux';
import { Trans } from 'react-i18next';
import { FC, useState } from 'react';
import { userAuthenticationDisconnected } from '../features/user/actions';
import { ApplicationState } from '../features/reducers';

const mapStateToProps = (state: ApplicationState) => ({
    user: state.user
});

const mapDispatchToProps =
{
    userAuthenticationDisconnected
};

type Props =
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps;

const NavMenu: FC<Props> = (props) =>
{
    const [isOpen, setIsOpen] = useState<boolean>(false);

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

                            {props.user.isConnected &&
                            <NavItem>
                                <NavLink href="#" onClick={props.userAuthenticationDisconnected}><Trans>Logout</Trans></NavLink>
                            </NavItem>
                            }
                        </ul>
                    </Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavMenu);
