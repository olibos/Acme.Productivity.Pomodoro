import * as React from 'react';
import { FC } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Trans} from 'react-i18next';
import { ApplicationState } from '../../features/reducers';
import { projectEditEnd, projectEditSave } from '../../features/projects/actions';
import { connect} from 'react-redux';
import { Project } from '../../features/projects/types';
import ReduxNewProjectForm from './ReduxNewProjectForm';

const mapStateToProps = (state: ApplicationState) => ({
    projects: state.projects,
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

        props.projectEditSave(saveProject);
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