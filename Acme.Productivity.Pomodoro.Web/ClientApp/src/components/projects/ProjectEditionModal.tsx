import * as React from 'react';
import { FC } from 'react';
import { Modal, ModalHeader } from 'reactstrap';
import { Trans } from 'react-i18next';
import { ApplicationState } from '../../features/reducers';
import { projectEditEnd } from '../../features/projects/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state: ApplicationState) => ({
    projects: state.projects,
});

const mapDispatchToProps =
    {
        projectEditEnd
    };

type Props =
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps;

const ProjectEditionModal: FC<Props> = (props) =>
{
    return <>
        <Modal isOpen={props.projects.currentEditing != null} toggle={props.projectEditEnd}>
            <ModalHeader toggle={props.projectEditEnd}><Trans>projects:new:title</Trans></ModalHeader>
        </Modal>
    </>;
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProjectEditionModal);