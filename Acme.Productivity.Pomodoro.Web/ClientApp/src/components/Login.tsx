import * as CurrentUserStore from "../store/CurrentUser";
import { RouteComponentProps } from "react-router";
import * as React from "react";
import { connect } from "react-redux";
import { ApplicationState } from "../store";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

type LoginProps =
    CurrentUserStore.UserState &
    typeof CurrentUserStore.actionCreators &
    RouteComponentProps<{}>;

class Login extends React.PureComponent<LoginProps>
{
    private login()
    {
        this.props.login("toto");
    }

    public render()
    {
        return <>
            <Row className="justify-content-center">
                <Col xs={12} md={6}>
                    <Form onSubmit={this.login.bind(this)}>
                        <FormGroup controlId="formBasicEmail">
                            <Label>Email address</Label>
                            <Input type="email" placeholder="Enter email" />
                        </FormGroup>

                        <FormGroup controlId="formBasicEmail">
                            <Label>Email address</Label>
                            <Input type="password" />
                        </FormGroup>

                        <Button variant="primary" type="submit" onClick={this.login.bind(this)}>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </>;
    }
}

export default connect(
    (state: ApplicationState) => state.currentUser,
    CurrentUserStore.actionCreators
)(Login as any);