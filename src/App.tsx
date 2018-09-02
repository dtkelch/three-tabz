import * as React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { connect } from 'react-redux';
import { simpleAction } from 'src/actions/simpleAction';

class App extends React.Component {
  public render() {
    return (
      <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="Tab 1">
          Tab 1 content
        </Tab>
        <Tab eventKey={2} title="Tab 2">
          Tab 2 content
        </Tab>
        <Tab eventKey={3} title="Tab 3">
          Tab 3 content
        </Tab>
      </Tabs>
    );
  }
}

const mapStateToProps = (state: any) => ({
  ...state
});

const mapDispatchToProps = {
  simpleAction,
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
