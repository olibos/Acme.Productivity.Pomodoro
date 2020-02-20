import * as CurrentUserStore from "../store/CurrentUser";
import { RouteComponentProps } from "react-router";
import * as React from "react";
import { connect } from "react-redux";
import { ApplicationState } from "../store";

type LoginProps =
    CurrentUserStore.UserState &
    typeof CurrentUserStore.actionCreators &
    RouteComponentProps<{}>;

class Login extends React.PureComponent<LoginProps>
{
    public render()
    {
        return <button onClick={() => this.props.login("toto")}>
            Se connecter !
        </button>;
    }
}

export default connect(
    (state: ApplicationState) => state.currentUser,
    CurrentUserStore.actionCreators
)(Login as any);