import {
  FETCH_LOGIN_STARTED,
  FETCH_LOGIN_COMPLETED,
  FETCH_LOGIN_FAILED,
  FETCH_LOGOUT_STARTED,
  FETCH_LOGOUT_COMPLETED,
  FETCH_LOGOUT_FAILED
} from '../../actions/Login';

const initialAccounts = {
  status: {
    statusCode: 300,
    statusDisplay: "",
    statusValue: true,
  },
  loginInput: {
    userName: "",
    password: "",
  }, 
  userDetail: {
    id: 0,
    userName: "",    
    email: "",   
    joinedDate: new Date(),
    isFirstTimeLogin: false,   
    deleted: false
  },

  sessionTimeout: 10, 
  isFormSubmit: false,   
  error: '', 
};


const loginData = (state = initialAccounts, action: any) => {
  switch (action.type) {
    case FETCH_LOGIN_STARTED:
      return {
        ...state,       
        isFormSubmit: false,
        loginInput: action.input
      };
    case FETCH_LOGIN_COMPLETED:     
        return {

          ...state,
           isLoading: false,
          isFormSubmit: true,
          status: action.payload.status,
          loginInput: action.input,
          action: action.payload,
          sessionTimeout: action.sessionTimeout,
          userDetail: action.payload.userDetail,
        };
    case FETCH_LOGIN_FAILED:
      return {
        ...state,
        isLoading: true,        
      };
    case FETCH_LOGOUT_STARTED:
      return {
        ...state,        
      };
    case FETCH_LOGOUT_COMPLETED:
      return {
        ...state,       
      };
    case FETCH_LOGOUT_FAILED:
      return {
        ...state,        
      };
    default:
      return state;
  }
};

export default loginData;
