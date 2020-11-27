import * as React from 'react';
import Home from '../../core/Home/Home';

interface IAppFrameProps {
  isLogged?: boolean;
}
interface IAppFrameState { 
  userName: string;
  sessionTimeOut: number;
  isValid: boolean;
}

class AppFrame extends React.Component<IAppFrameProps, IAppFrameState> {
  constructor(props:any) {
    super(props);
    this.state = {
      sessionTimeOut: 10,
      isValid: false,     
      userName: ""
    };
  }

  componentWillMount() {
    const loggedInString = localStorage.getItem('AUTHDATA');
    if (loggedInString) {
      const loggedInData = JSON.parse(loggedInString);

      if (!loggedInData && !loggedInData.status.statusValue) {
        window.localStorage.setItem('AUTHDATA', "");
        window.location.href = "/login";
      }
      var currentLocation = window.location.pathname;
      if (currentLocation.includes('homes') && (loggedInData.userDetail.isFirstTimeLogin)) {
        window.location.href = "/postlogin";
      }
      this.setState({ userName: loggedInData.userDetail.userName });   
      if (currentLocation.includes('users')) {
        window.location.href = "/home";
      }
      else {
        this.setState({ isValid: true });
      }
      this.setState({ sessionTimeOut: loggedInData.sessionTimeout });
    }
    else {
      window.location.href = "/login";
    }
  }

 
  public render() {
    const {isLogged } = this.props;  

    return (

      <React.Fragment>
        <div>
          <div style={{ display: `${isLogged ? '' : 'none'}` }}>
            <Home />
          </div>
         </div>
      </React.Fragment>
    );
  }
}

export default AppFrame;
