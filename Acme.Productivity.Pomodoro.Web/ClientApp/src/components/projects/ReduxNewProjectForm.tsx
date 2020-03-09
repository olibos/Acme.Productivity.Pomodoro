import * as React from 'react';
import { FC } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';
import { Button, FormGroup } from 'reactstrap';
import ReduxFormInput from '../shared/ReduxFormInput';
import * as Yup from 'yup';
import ReduxYupValidator from '../shared/ReduxYupValidator';
import { connect } from 'react-redux';
import { ApplicationState } from '../../features/reducers';

const mapStateToProps = (state: ApplicationState) => ({
    initialValues:{
        name: state.projects.currentEditing != null ? state.projects.currentEditing.name : ''
    }
});

const mapDispatchToProps =
    {
    };

const NewProjectForm: FC<InjectedFormProps> = (props) =>
{
    const {t} = useTranslation();
    const {handleSubmit} = props;

    return <form onSubmit={handleSubmit}>
        <FormGroup>
            <Field name="name" type="text" label={t('forms:projects:name')} component={ReduxFormInput}/>
        </FormGroup>

        <FormGroup>
            <Button variant="primary" type="submit">
                {t('forms:Submit')}
            </Button>
        </FormGroup>
    </form>;
};

const schema = Yup
    .object()
    .shape({
        name: Yup.string().required(),
    });

const ReduxNewProjectForm = reduxForm({
    form: 'project-edit',
    asyncValidate: ReduxYupValidator(schema),
})(NewProjectForm);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxNewProjectForm);