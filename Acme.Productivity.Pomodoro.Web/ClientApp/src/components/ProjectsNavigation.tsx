import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Trans } from 'react-i18next';
import { Alert, ListGroup, ListGroupItem } from 'reactstrap';
import { ApplicationState } from '../features/reducers';

const mapStateToProps = (state: ApplicationState) => ({
    projects: state.projects.projects
});

const mapDispatchToProps =
    {
    };

type Props =
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps;

const ProjectsNavigation: FC<Props> = (props) =>
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectsNavigation as any);