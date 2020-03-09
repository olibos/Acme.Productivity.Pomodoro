import * as React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import ProjectsNavigation from './projects/ProjectsNavigation';
import ProjectContainer from './projects/ProjectContainer';

const Home = () => (
        <div>
            <Row>
                <Col xs={3}>
                    <ProjectsNavigation/>
                </Col>
                <Col xs={9}>
                    <ProjectContainer/>
                </Col>
            </Row>
        </div>
    );

export default connect()(Home);
