import * as CurrentUserStore from "../store/CurrentUser";
import { RouteComponentProps } from "react-router";
import * as React from "react";
import { connect } from "react-redux";
import { ApplicationState } from "../store";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

type LoginProps =
    CurrentUserStore.UserState &
    typeof CurrentUserStore.actionCreators &
    RouteComponentProps<{}>;

const Login: FC<LoginProps> = (props) =>
{
    const {t} = useTranslation();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const login = () =>
    {
        props.login("toto");
    };

    return <>
        <Row className="justify-content-center">
            <Col xs={12} md={6}>
                <Form onSubmit={login}>
                    <FormGroup controlId="formBasicEmail">
                        <Label>{t("forms:Email address")}</Label>
                        <Input type="email" placeholder={t("forms:Enter email")} value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </FormGroup>

                    <FormGroup controlId="formBasicEmail">
                        <Label>{t("forms:Password")}</Label>
                        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </FormGroup>

                    <Button variant="primary" type="submit" onClick={login}>
                        {t("forms:Submit")}
                    </Button>
                </Form>
            </Col>
        </Row>
    </>;
};

export default connect(
    (state: ApplicationState) => state.currentUser,
    CurrentUserStore.actionCreators,
)(Login as any);