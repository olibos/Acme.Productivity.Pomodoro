import * as React from 'react';
import { FC } from 'react';
import { connect } from 'react-redux';
import { Trans } from 'react-i18next';
import { Alert, Button, Col, ListGroup, Row } from 'reactstrap';
import { ApplicationState } from '../../features/reducers';
import { projectEditStartNew } from '../../features/projects/actions';
import ProjectsNavigationItem from './ProjectsNavigationItem';

const mapStateToProps = (state: ApplicationState) => ({
    projects: state.projects,
});

const mapDispatchToProps =
    {
        projectEditStartNew,
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
                    return <ProjectsNavigationItem key={project.id} project={project}/>;
                })}
            </ListGroup>
            <Button onClick={props.projectEditStartNew} className="w-100 mt-3">Ajouter</Button>
        </>;
    };

    return <>
        <Row>
            <Col>
                <h2><Trans>projects:list:title</Trans></h2>

                {props.projects.projects.length === 0 && <div>
                    <Alert color="info">
                        <Trans>projects:list:no-items</Trans>
                    </Alert>
                </div>}

                {renderProjects()}
            </Col>
        </Row>
    </>;
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProjectsNavigation);