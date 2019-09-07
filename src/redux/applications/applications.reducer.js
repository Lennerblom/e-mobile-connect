import applicationsActionTypes from './applications.types';
import { getApplication, addApplication, updateApplication} from './applications.actions';


let initialState = [];
const applicationsReducer = (state = initialState, action) => {
  switch (action.type) {
  case applicationsActionTypes.APPLICATION_ADD:
    return {         
        ...state,
        application: addApplication(state.applications, action.payload)
      }
  case applicationsActionTypes.APPLICATION_GET:
    return {...state, 
        application: getApplication(action.payload)
        }

  case applicationsActionTypes.APPLICATION_UPDATE:  
    return {...state,
    application: updateApplication( state.map(application => application.id === action.payload.id ? action.payload : application))
    }
  default: return state;
  }
};

export default applicationsReducer;