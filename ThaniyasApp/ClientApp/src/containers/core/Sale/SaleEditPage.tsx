import { IonItem, IonContent, IonText, IonPage, IonRow, IonCol } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import { Dispatch } from 'redux';
import { getSaleById} from "../../../store/actions/Sales";
import { useDispatch, connect } from 'react-redux';

interface ISaleAddEditProps {
  dispatch: Dispatch<any>;
  getSaleById1: any;
 // PartitionLandData: any;
  match: any;
  params: any;
  saleData: any;
 // LandDetailData: any;

}

interface ISaleAddEditState {
  saleData: {
   // date: any;
    quantity: any;
    price: any;
    buyerName: any;
    buyerMbileNo: any;
  //  selectedLandId: any;
   // selectedPartLandId: any;
  };
}

class SaleEditPage extends React.Component<ISaleAddEditProps, ISaleAddEditState> {
  constructor(props:any) {
    super(props);

    this.state = {
      saleData: {
        //date: null,
        quantity: null,
        price: null,
        buyerName: null,
        buyerMbileNo: null,
       // selectedLandId: 0,
       // selectedPartLandId: 0
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleOnsubmit = this.handleOnsubmit.bind(this);
  }

  componentWillMount() {
    this.props.getSaleById1(this.props.match.params.id);
  }

  handleChange(event:any) {
    alert("Edit");
    const { name, value } = event.target;
    if (this.state) {
      this.setState({
        saleData: {
          ...this.state.saleData,
          [name]: value
        }
      });
    }
  }

  handleOnsubmit(event: any) {
    alert("Sabve");
    //  event.preventDefault();
    //const { dispatch } = this.props;
   // dispatch(savePartitionLand(this.state.PartitionLandData));
  }

  render() {
    if (!this.state.saleData.buyerName) {
      this.state = {
        saleData: {
          quantity: this.props.saleData.SaleItems.quantity,
          price: this.props.saleData.SaleItems.price,
          buyerName: this.props.saleData.SaleItems.buyerName,
          buyerMbileNo: this.props.saleData.SaleItems.buyerMobileNumber,
        }
      };
    }
    return (
      <IonPage>
        <Header />
        <IonContent className=".reg-login">
          <div className="bg-image">
            <div className="reg-head">
              <h1>Edit Sale Details</h1>
            </div>
            {this.props.saleData && (
            <form className="form">
              <IonRow>
                <IonCol>
                  <IonText className="reg-fields">
                    Quantity <input type="text" className="input-text" onChange={this.handleChange} value={this.state.saleData.quantity} required />
                    Price <input type="text" className="input-text" onChange={this.handleChange} value={this.state.saleData.price} required />
                    Buyer Name <input type="text" className="input-text" onChange={this.handleChange} value={this.state.saleData.buyerName} required />
                      Buyer Mobile Number <input type="text" className="input-text" onChange={this.handleChange} value={this.state.saleData.buyerMbileNo} required />
                  </IonText>
                </IonCol>
              </IonRow>
              </form>
            )}
          </div>
        </IonContent>
        <footer className="footcolor" >
          <div>
            <button className="ok-btn" onSubmit={this.handleOnsubmit}> OK </button>

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
  const { saleData } = state;

  return {
    saleData
  };
};

const mapDisptchToProps = (dispatch: any) => {
  return {
    getSaleById1: (id: any) => {
      dispatch(getSaleById(id));
    }

  };
};

export default connect(mapStateToProps, mapDisptchToProps)(SaleEditPage);