import React, { FC, useEffect } from 'react';
import * as ProjectsStore from '../store/Projects';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import { Trans } from 'react-i18next';
import { Alert, ListGroup, ListGroupItem } from 'reactstrap';

type ProjectsNavigationProps = ProjectsStore.ProjectsState &
    typeof ProjectsStore.actionCreators;

const ProjectsNavigation: FC<ProjectsNavigationProps> = (props) =>
{
    useEffect(() =>
    {
        props.refreshProjects();
    });

    return <>
        <h2><Trans>projects:list:title</Trans></h2>

        {props.projects.length == 0 && <div>
            <Alert color="info">
                <Trans>projects:list:no-items</Trans>
            </Alert>
        </div>}

        {props.projects.length}

        <ListGroup>
            {props.projects.map((project) => {
                return <ListGroupItem>{project.name}</ListGroupItem>
            })}
        </ListGroup>
    </>;
};

export default connect(
    (state: ApplicationState) => state.projects,
    ProjectsStore.actionCreators,
)(ProjectsNavigation as any);