import { IonItem, IonContent, IonPage, IonRow, IonCol, IonText, IonGrid, IonList, IonNote, IonPopover, IonSelectOption, IonLabel, IonSelect } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { Dispatch } from 'redux';
import { getLandDetailById } from "../../../store/actions/LandDetail";
import { getPartitionLandList } from "../../../store/actions/PartitionLand";
import { useDispatch, connect } from 'react-redux';

interface IViewReportProps {
  dispatch: Dispatch<any>;
  getLandDetailById1: any;
  match: any;
  params: any;
  PartitionLandData: any;
  LandDetailData: any;
}

interface ISeedAddEditState {
  name: any;
  id: 0;
  }


class ViewReport extends React.Component<IViewReportProps, ISeedAddEditState> {
  constructor(props: any) {
    super(props);

    this.state = {
      name: null,
      id: 0,
    };
  }

  componentWillMount() {
    this.props.getLandDetailById1(this.props.match.params.id);   
  }

  componentWillReceiveProps(newProps: any) {   
    if (newProps.LandDetailData.LandItem) {
      this.setState({        
        name: newProps.LandDetailData.LandItem.name,
        id: newProps.LandDetailData.LandItem.id,
        // state: newProps.LandDetailData.Landitems.state
      })
    }
  }
  
  render() {

    return (
      <IonPage>
        <Header />
        <IonContent className=".reg-login">
          <div className="bg-image">
            <div className="reg-head">
              <h1>View Reports </h1>
            </div>
            {this.state.id > 0 && (
              <form className="form">
                <IonRow>
                  <IonCol>
                    <IonText className="reg-fields">
                      <div className="row header">
                        <div className="col"> Land Name</div>
                        <div className="col"> Land Name</div>
                       </div>
                        <input type="text" name="quantity" className="input-text" value={this.state.name} />
                      <IonGrid>
                        <IonRow>
                          <IonCol>Land Name</IonCol>
                          <IonCol>Partition Land</IonCol>
                          <IonCol>Total </IonCol>                          
                        </IonRow>
                        <IonRow>
                          <IonCol>{this.state.name}</IonCol>
                          <IonCol>Partition Land</IonCol>
                          <IonCol>Total </IonCol>
                        </IonRow>
                      </IonGrid>
                    </IonText>
                  </IonCol>
                </IonRow>
              </form>
            )}
          </div>
        </IonContent>
       </IonPage>
    );
  }

};

const mapStateToProps = (state: any) => {
  const { LandDetailData, PartitionLandData } = state;

  return {
    LandDetailData, PartitionLandData
  };
};

const mapDisptchToProps = (dispatch: any) => {
  return {
    getLandDetailById1: (id: any) => {
      dispatch(getLandDetailById(id));
    },
  };
};

export default connect(mapStateToProps, mapDisptchToProps)(ViewReport);