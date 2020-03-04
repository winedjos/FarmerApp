import { IonItem, IonContent, IonPage,IonText,IonCol,IonRow, IonList, IonNote, IonPopover, IonSelectOption, IonLabel, IonSelect } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import { Dispatch } from 'redux';
import { getLandDetailById } from "../../../store/actions/LandDetail";
import { useDispatch, connect } from 'react-redux';


interface ILandAddEditProps {
  dispatch: Dispatch<any>;
  getLandDetailById1: any;
  LandDetailData: any;
  //PartitionLandData: any;
  match: any;
  params: any;
  // LandDetailData: any;

}

interface ILandAddEditState {
  LandDetailData: {
   // state: any;
    city: any;
    village: any;
    pattaNumber: any;
    areaSize: any;
    name: any;
  };
}

class LandDetailEditPage extends React.Component<ILandAddEditProps, ILandAddEditState> {
  constructor(props: any) {
    super(props);

    this.state = {
      LandDetailData: {
        //state: null,
        city: null,
        village: null,
        pattaNumber: null,
        areaSize: null,
        name: null,
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleOnsubmit = this.handleOnsubmit.bind(this);
  }

  componentWillMount() {
    this.props.getLandDetailById1(this.props.match.params.id);
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
        LandDetailData: {
          ...this.state.LandDetailData,
          [name]: value
        }
      });
    }
  }



  render() {
    if (!this.state.LandDetailData.name) {
      this.state = {
        LandDetailData: {
          //state: this.props.LandDetailData.WeedItems.state,
          city: this.props.LandDetailData.Landitems.city,
          village: this.props.LandDetailData.Landitems.village,
          pattaNumber: this.props.LandDetailData.Landitems.pattaNumber,
          areaSize: this.props.LandDetailData.Landitems.areaSize,
          name: this.props.LandDetailData.Landitems.name,
        }
      };
    }

    return (
      <IonPage>
        <Header />
        <IonContent className=".reg-login">
          <div className="bg-image">
            <div className="reg-head">
              <h1> Edit Manage Partition </h1>
            </div>
            {this.props.LandDetailData && (
              <form className="form">
                <IonRow>
                  <IonCol>
                    <IonText className="reg-fields">
                      City <input type="text" placeholder="City" className="input-text" onChange={this.handleChange} value={this.state.LandDetailData.city} required />
                      Village <input type="text" placeholder="Village Name" className="input-text" onChange={this.handleChange} value={this.state.LandDetailData.village} required />
                      Patta Number <input type="text" placeholder="Land Patta Number" className="input-text" onChange={this.handleChange} value={this.state.LandDetailData.pattaNumber} required />
                      Area Size <input type="text" placeholder="Size of Land" className="input-text" onChange={this.handleChange} value={this.state.LandDetailData.areaSize} required />
                      Land Name <input type="text" placeholder="Land Name" className="input-text" onChange={this.handleChange} value={this.state.LandDetailData.name} required />
                    </IonText>
                  </IonCol>
                </IonRow>
              </form>
            )}
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
  const { LandDetailData } = state;

  return {
    LandDetailData
  };
};

const mapDisptchToProps = (dispatch: any) => {
  return {
    getLandDetailById1: (id: any) => {
      dispatch(getLandDetailById(id));
    }

  };
};


export default connect(mapStateToProps, mapDisptchToProps)(LandDetailEditPage);