import * as React from 'react';
import { FC } from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../features/reducers';
import { projectEditStart } from '../../features/projects/actions';
import { Button, Col, Row } from 'reactstrap';
import { Trans } from 'react-i18next';

const mapStateToProps = (state: ApplicationState) => ({
    project: state.projects.current,
});

const mapDispatchToProps =
    {
        projectEditStart
    };

type Props =
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps;

const ProjectContainer: FC<Props> = (props) =>
{
    const renderProject = () =>
    {
        if (props.project == null)
        {
            return <></>;
        }

        return <>
            <Row>
                <Col>
                    <Button onClick={() => props.projectEditStart(props.project)} className="float-right" outline color="secondary"><Trans>projects:edit:edit</Trans></Button>
                    <h2>{props.project.name}</h2>
                </Col>
            </Row>
        </>;
    };

    return renderProject();
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProjectContainer);