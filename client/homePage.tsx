import * as React from 'react';
import { connect } from 'react-redux';
import { setActiveTab } from 'client/actions';

interface Props {

}

class HomePageApp extends React.PureComponent<Props, {}> {
  public render() {
    return <div>hello world</div>;
    
  }
}

const mapStateToProps = (state: any) => ({
  ...state
});

const mapDispatchToProps = {
  setActiveTab: (key: number) => {

  },
};


export const HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePageApp);
