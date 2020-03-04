import { IonItem, IonContent, IonPage, IonRow, IonCol, IonText, IonList, IonNote, IonPopover, IonSelectOption, IonLabel, IonSelect } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import { Dispatch } from 'redux';
import { getPestControlById } from "../../../store/actions/PestControl";
import { useDispatch, connect } from 'react-redux';


interface IPestControlAddEditProps {
  dispatch: Dispatch<any>;
  getPestControlById1: any;
  pestControlData: any;
  //PartitionLandData: any;
  match: any;
  params: any;
  // LandDetailData: any;

}

interface IPestControlAddEditState {
  pestControlData: {
    nameofthePestSide: any;
    Cost: any;
    purpose: any;
    labourCost: any;
  };
}

class PestControlEditPage extends React.Component<IPestControlAddEditProps, IPestControlAddEditState> {
  constructor(props: any) {
    super(props);

    this.state = {
      pestControlData: {
        nameofthePestSide: null,
        Cost: null,
        purpose: null,
        labourCost: null,
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleOnsubmit = this.handleOnsubmit.bind(this);
  }

  componentWillMount() {
    this.props.getPestControlById1(this.props.match.params.id);
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
        pestControlData: {
          ...this.state.pestControlData,
          [name]: value
        }
      });
    }
  }
  render() {
    if (!this.state.pestControlData.Cost) {
      this.state = {
        pestControlData: {
          nameofthePestSide: this.props.pestControlData.PetsControlItems.nameofthePestSide,
          Cost: this.props.pestControlData.PetsControlItems.cost,
          purpose: this.props.pestControlData.PetsControlItems.purpose,
          labourCost: this.props.pestControlData.PetsControlItems.labourCost,
        }
      };
    }

    return (
      <IonPage>
        <Header />
        <IonContent className=".reg-login">
          <div className="bg-image">
            <div className="reg-head">
              <h1> Edit Pest Control </h1>
            </div>
            <form className="form">
              <IonRow>
                <IonCol>
                  <IonText className="reg-fields">
                    Name of the PestSide Name<input type="text" placeholder="PestSide Name" className="input-text" onChange={this.handleChange} value={this.state.pestControlData.nameofthePestSide} required />
                    Cost <input type="text" placeholder="Pest Cost" className="input-text" onChange={this.handleChange} value={this.state.pestControlData.Cost} required />
                    Purpose <input type="text" placeholder="Pest Using Purpose" className="input-text" onChange={this.handleChange} value={this.state.pestControlData.purpose} required />
                    Labour Cost <input type="text" placeholder="Labour Cost" className="input-text" onChange={this.handleChange} value={this.state.pestControlData.labourCost} required />

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
  const { pestControlData } = state;

  return {
    pestControlData
  };
};

const mapDisptchToProps = (dispatch: any) => {
  return {
    getPestControlById1: (id: any) => {
      dispatch(getPestControlById(id));
    }

  };
};


export default connect(mapStateToProps, mapDisptchToProps)(PestControlEditPage);