import * as CurrentUserStore from "../store/CurrentUser";
import { RouteComponentProps } from "react-router";
import * as React from "react";
import { connect } from "react-redux";
import { ApplicationState } from "../store";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

type LoginProps =
    CurrentUserStore.UserState &
    typeof CurrentUserStore.actionCreators &
    RouteComponentProps<{}>;

class Login extends React.PureComponent<LoginProps>
{
    private login()
    {

    }

    public render()
    {
        return <>
            <Form>
                <FormGroup controlId="formBasicEmail">
                    <Label>Email address</Label>
                    <Input type="email" placeholder="Enter email" />
                </FormGroup>

                <FormGroup controlId="formBasicEmail">
                    <Label>Email address</Label>
                    <Input type="password" />
                </FormGroup>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>;
    }
}

export default connect(
    (state: ApplicationState) => state.currentUser,
    CurrentUserStore.actionCreators
)(Login as any);