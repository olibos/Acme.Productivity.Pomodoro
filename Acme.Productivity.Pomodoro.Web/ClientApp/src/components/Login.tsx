import * as CurrentUserStore from "../store/CurrentUser";
import { RouteComponentProps } from "react-router";
import * as React from "react";
import { connect } from "react-redux";
import { ApplicationState } from "../store";
import { Button, Col, FormGroup, Row } from "reactstrap";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { reduxForm, Field, InjectedFormProps } from "redux-form";
import ReduxFormInput from "./shared/ReduxFormInput";
import * as Yup from "yup";
import ReduxYupValidator from "./shared/ReduxYupValidator";
import jsSha512 from 'js-sha512';

const LoginForm: FC<InjectedFormProps<{}, {}>> = (props) =>
{
    const {t} = useTranslation();
    const {handleSubmit} = props;

    return <form onSubmit={handleSubmit}>
        <FormGroup>
            <Field name="email" type="text" label={t("forms:Email address")} component={ReduxFormInput}/>
        </FormGroup>

        <FormGroup>
            <Field name="password" type="password" label={t("forms:Password")} component={ReduxFormInput}/>
        </FormGroup>

        <FormGroup>
            <Button variant="primary" type="submit">
                {t("forms:Submit")}
            </Button>
        </FormGroup>
    </form>;
};

const schema = Yup
    .object()
    .shape({
        email: Yup.string().email().required(),
        password: Yup.string().required(),
    });

const ReduxLoginForm = reduxForm({
    form: 'login',
    asyncValidate: ReduxYupValidator(schema),
})(LoginForm as any);

type LoginProps =
    CurrentUserStore.UserState &
    typeof CurrentUserStore.actionCreators &
    RouteComponentProps<{}>;

const Login: FC<LoginProps> = (props) =>
{
    const submit = (values: any) =>
    {
        const hash = jsSha512.sha512(values.password);
        props.login(values.email, hash);
    };

    return <>
        <Row className="justify-content-center">
            <Col xs={12} md={6}>
                <ReduxLoginForm onSubmit={submit}/>
            </Col>
        </Row>
    </>;
};

export default connect(
    (state: ApplicationState) => state.currentUser,
    CurrentUserStore.actionCreators,
)(Login as any);