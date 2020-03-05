import * as React from 'react';
import { FC } from 'react';
import { connect } from 'react-redux';
import { Trans } from 'react-i18next';
import { Alert, Button, ListGroup, ListGroupItem } from 'reactstrap';
import { ApplicationState } from '../../features/reducers';
import { projectEditStartNew, projectSelectionChange } from '../../features/projects/actions';

const mapStateToProps = (state: ApplicationState) => ({
    projects: state.projects,
});

const mapDispatchToProps =
    {
        projectSelectionChange,
        projectEditStartNew
    };

type Props =
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps;

const ProjectsNavigation: FC<Props> = (props) =>
{
    const renderProjects = () =>
    {
        return <>
            <ListGroup>
                {props.projects.projects.map((project) =>
                {
                    return <ListGroupItem key={project.id}
                                          color={props.projects.current && props.projects.current.id === project.id ? 'primary' : ''}
                                          onClick={() => props.projectSelectionChange(project)}>
                        {project.name}
                    </ListGroupItem>;
                })}
            </ListGroup>
            <Button onClick={props.projectEditStartNew} className="w-100 mt-3">Ajouter</Button>
        </>;
    };

    return <>
        <h2><Trans>projects:list:title</Trans></h2>

        {props.projects.projects.length === 0 && <div>
            <Alert color="info">
                <Trans>projects:list:no-items</Trans>
            </Alert>
        </div>}

        {renderProjects()}

    </>;
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProjectsNavigation);