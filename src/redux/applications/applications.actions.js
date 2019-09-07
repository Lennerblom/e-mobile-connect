import applicationsActionTypes from './applications.types';
import superagent from 'superagent';
import uuid from 'uuid/v5';

const url = '';

export const getApplication = () => {
    return dispatch => {
      superagent.get(url)
        .then(function(res) { 
          return res.json();
        })
        .then((applications) => {

          dispatch({
            type: applicationsActionTypes.GET_APPLICATION,
            payload: applications,
          });
        });
    };
  };

  export const getOneApplication = (application) => {
    return dispatch => {
        superagent.get(`${url}/${application._id}`)
          .then(function(res) { 
            return res.json();
          })
          .then((application) => {
            console.log('fetch data: ', application);
            dispatch({
              type: applicationsActionTypes.GET_APPLICATION,
              payload: application,
            });
          });
      };
  }

export const addApplication = application => {
    application.id = uuid();
  return dispatch => {
    superagent.post(url, application)
      .then(res => {
        dispatch({type: applicationsActionTypes.ADD_APPLICATION, payload: res.body});
      });
  };
  };

  export const updateApplication = application => {
    return dispatch => {
        superagent.put(`${url}/${application._id}`)
          .send(application)
          .then(() => {
            dispatch({ 
              type: applicationsActionTypes.UPDATE_APPLICATION,
              payload: application,
            });
          });
      };
  };