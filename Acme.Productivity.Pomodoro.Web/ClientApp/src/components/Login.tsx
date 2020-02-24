import * as CurrentUserStore from '../store/CurrentUser';
import { RouteComponentProps } from 'react-router';
import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import ReduxFormInput from './shared/ReduxFormInput';
import * as Yup from 'yup';
import ReduxYupValidator from './shared/ReduxYupValidator';
import { Button, Container, Grid } from '@material-ui/core';
import useStyles from '../useStyles';

const LoginForm: FC<InjectedFormProps<{}, {}>> = (props) =>
{
    const {t} = useTranslation();
    const {handleSubmit} = props;

    return <Container maxWidth="md">
        <form onSubmit={handleSubmit}>

            <Grid container>
                <Grid item xs={12}>
                    <Field name="email" type="text" label={t('forms:Email address')} component={ReduxFormInput}/>
                </Grid>

                <Grid item xs={12}>
                    <Field name="password" type="password" label={t('forms:Password')} component={ReduxFormInput}/>
                </Grid>
                <Grid item xs={12}>
                    <Button color="primary" type="submit" onClick={handleSubmit}>
                        {t('forms:Submit')}
                    </Button>
                </Grid>
            </Grid>
        </form>
    </Container>;
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
        props.login(values.email);
    };

    return <>
        <div className="row justify-content-center">
            <div className="col">
                <ReduxLoginForm onSubmit={submit}/>
            </div>
        </div>
    </>;
};

export default connect(
    (state: ApplicationState) => state.currentUser,
    CurrentUserStore.actionCreators,
)(Login as any);

/*
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
)(Login as any);*/