import * as React from 'react';
import { connect } from 'react-redux';
import { Col } from 'reactstrap';
import ProjectsNavigation from './projects/ProjectsNavigation';

const Home = () => (
  <div>
        <Col xs={3}>
            <ProjectsNavigation />
        </Col>
  </div>
);

export default connect()(Home);
