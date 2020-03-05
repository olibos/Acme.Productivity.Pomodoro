import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Trans } from 'react-i18next';
import { Alert, ListGroup, ListGroupItem } from 'reactstrap';
import { ApplicationState } from '../features/reducers';
import { ProjectsState } from '../features/projects/reducer';

type ProjectsNavigationProps = ProjectsState;

const ProjectsNavigation: FC<ProjectsNavigationProps> = (props) =>
{
    const renderProjects = () =>
    {
        return <ListGroup>
            {props.projects.map((project) =>
            {
                return <ListGroupItem key={project.id}>{project.name}</ListGroupItem>;
            })}
        </ListGroup>;
    };

    return <>
        <h2><Trans>projects:list:title</Trans></h2>

        {props.projects.length === 0 && <div>
            <Alert color="info">
                <Trans>projects:list:no-items</Trans>
            </Alert>
        </div>}

        {renderProjects()}

    </>;
};

interface ComponentActions
{
}

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(
    (state: ApplicationState) => state.projects,
    mapDispatchToProps
)(ProjectsNavigation as any);