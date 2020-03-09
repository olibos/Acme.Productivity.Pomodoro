import * as React from 'react';
import { FC } from 'react';
import { Button, FormGroup, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Trans, useTranslation } from 'react-i18next';
import { ApplicationState } from '../../features/reducers';
import { projectEditEnd, projectEditSave } from '../../features/projects/actions';
import { connect, useDispatch } from 'react-redux';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import ReduxFormInput from '../shared/ReduxFormInput';
import * as Yup from 'yup';
import ReduxYupValidator from '../shared/ReduxYupValidator';
import { Project } from '../../features/projects/types';

const NewProjectForm: FC<InjectedFormProps<{}, {}>> = (props) =>
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
})(NewProjectForm as any);

const mapStateToProps = (state: ApplicationState) => ({
    projects: state.projects,
    initialValues: {
        name: state.projects.currentEditing != null ? state.projects.currentEditing.name : ''
    }
});

const mapDispatchToProps =
    {
        projectEditEnd,
        projectEditSave
    };

type Props =
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps;

const ProjectEditionModal: FC<Props> = (props) =>
{
    const dispatch = useDispatch();

    const submit = (values: any) =>
    {
        let saveProject = props.projects.currentEditing;

        if (saveProject == null)
        {
            saveProject = {
                id: '',
                name: ''
            };
        }

        saveProject = {...saveProject, ...values} as Project;

        dispatch(projectEditSave(saveProject));
    };

    return <> {props.projects.currentEditing != null &&
    <Modal isOpen={props.projects.currentEditing != null} toggle={props.projectEditEnd}>
        <ModalHeader toggle={props.projectEditEnd}>
            {props.projects.currentEditing.id === '' && <Trans>projects:new:title</Trans>}
            {props.projects.currentEditing.id !== '' && <Trans>projects:edit:title</Trans>}
        </ModalHeader>
        <ModalBody>
            <ReduxNewProjectForm onSubmit={submit}/>
        </ModalBody>
    </Modal>
    }
    </>;
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProjectEditionModal);