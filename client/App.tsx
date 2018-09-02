import * as React from 'react';
import {
  Grid,
  Row,
  Tab,
  Tabs,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { setActiveTab } from 'client/actions';
import { HomePage } from 'client/homePage';

interface Props {

}

class App extends React.Component<Props, {}> {
  public render() {
    return <Grid>
        <Row>
          <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Tab 1" />
            <Tab eventKey={2} title="Tab 2" />
            <Tab eventKey={3} title="Tab 3" />
          </Tabs>
        </Row>
        <HomePage />
      </Grid>;
  }
}

const mapStateToProps = (state: any) => ({
  ...state
});

const mapDispatchToProps = {
  setActiveTab: (key: number) => {

  },
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
