import {React} from "react";

export class UpcomingEventsCard extends React.Component {
    constructor(props) {
      super(props);
      this.state = { clicks: 0 };
    }
  
    buttonClicked() {
      this.setState({clicks: this.state.clicks+1});
    }
  
    render() {
      return (
        <div>
          <h4>{this.props.name}</h4>
          <div>Clicks: {this.state.clicks}</div>
          <button onClick={()=>this.buttonClicked()}>Add one</button>
        </div>
      );
    }
  }

