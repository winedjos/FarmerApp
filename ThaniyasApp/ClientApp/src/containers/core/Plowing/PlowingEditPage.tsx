import { IonItem, IonContent, IonPage, IonRow, IonCol, IonText, IonList, IonNote, IonPopover, IonSelectOption, IonLabel, IonSelect } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import { Dispatch } from 'redux';
import { getPlowingById } from "../../../store/actions/Plowing";
import { useDispatch, connect } from 'react-redux';


interface IPlowingAddEditProps {
  dispatch: Dispatch<any>;
  getPlowingById1: any;
  plowingData: any;
  //PartitionLandData: any;
  match: any;
  params: any;
  // LandDetailData: any;

}

interface IPlowingAddEditState {
  plowingData: {
    typeofPlowing: any;
    plowingEXP: any;
    
  };
}

class PlowingEditPage extends React.Component<IPlowingAddEditProps, IPlowingAddEditState> {
  constructor(props: any) {
    super(props);

    this.state = {
      plowingData: {
        typeofPlowing: null,
        plowingEXP: null,
        
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleOnsubmit = this.handleOnsubmit.bind(this);
  }

  componentWillMount() {
    this.props.getPlowingById1(this.props.match.params.id);
  }

  componentDidMount() {
    //const { partitionLandInput } = this.props;   
    //this.setState({ PartitionLandData: this.props });

  }

  handleOnsubmit(event: any) {
    alert("Edit");
    //  event.preventDefault();
    // const { dispatch } = this.props;
    //  dispatch(savePartitionLand(this.state.PartitionLandData));
  }


  handleChange(event: any) {
    const { name, value } = event.target;
    if (this.state) {
      this.setState({
        plowingData: {
          ...this.state.plowingData,
          [name]: value
        }
      });
    }
  }
  render() {
    if (!this.state.plowingData.typeofPlowing) {
      this.state = {
        plowingData: {
          typeofPlowing: this.props.plowingData.PlowingItems.typeofPlowing,
          plowingEXP: this.props.plowingData.PlowingItems.plowingEXP,
        }
      };
    }

    return (
      <IonPage>
        <Header />
        <IonContent className=".reg-login">
          <div className="bg-image">
            <div className="reg-head">
              <h1> Edit Plowing </h1>
            </div>
            <form className="form">
              <IonRow>
                <IonCol>
                  <IonText className="reg-fields">
                    Type of Plowing <input type="text" placeholder="Plowing type" className="input-text" onChange={this.handleChange} value={this.state.plowingData.typeofPlowing} required />
                    Plowing Expenses <input type="text" placeholder="Plowing Expenses" className="input-text" onChange={this.handleChange} value={this.state.plowingData.plowingEXP} required />
                  </IonText>
                </IonCol>
              </IonRow>
            </form>
          </div>
        </IonContent>
        <footer className="footcolor" >
          <div>
            <button className="ok-btn"> OK </button>
          </div>
          <div>
            <button className="cancel-btn"> CANCEL </button>
          </div>
        </footer>
      </IonPage>
    );
  }

};

const mapStateToProps = (state: any) => {
  const { plowingData } = state;

  return {
    plowingData
  };
};

const mapDisptchToProps = (dispatch: any) => {
  return {
    getPlowingById1: (id: any) => {
      dispatch(getPlowingById(id));
    }

  };
};


export default connect(mapStateToProps, mapDisptchToProps)(PlowingEditPage);