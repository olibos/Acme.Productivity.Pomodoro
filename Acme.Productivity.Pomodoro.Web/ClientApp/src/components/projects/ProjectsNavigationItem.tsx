import * as React from 'react';
import { FC } from 'react';
import { connect } from 'react-redux';
import { ListGroupItem, NavLink} from 'reactstrap';
import { ApplicationState } from '../../features/reducers';
import { projectSelectionChange } from '../../features/projects/actions';
import { Project } from '../../features/projects/types';

const mapStateToProps = (state: ApplicationState) => ({
    projects: state.projects,
});

const mapDispatchToProps =
    {
        projectSelectionChange,
    };

type Props =
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps &
    {
        project: Project
    };

const ProjectsNavigationItem: FC<Props> = (props) =>
{
    return <ListGroupItem key={props.project.id} className="list-group-item-action"
                          color={props.projects.current && props.projects.current.id === props.project.id ? 'primary' : ''}
                          onClick={() => props.projectSelectionChange(props.project)} tag={NavLink} href="#">
                {props.project.name}
    </ListGroupItem>;
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProjectsNavigationItem);