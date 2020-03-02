import * as React from 'react';
import { connect } from 'react-redux';
import { Col } from 'reactstrap';
import ProjectsNavigation from './ProjectsNavigation';

const Home = () => (
  <div>
        <Col xs={4}>
            <ProjectsNavigation />
        </Col>
  </div>
);

export default connect()(Home);
