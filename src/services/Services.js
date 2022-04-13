var axios = require('axios');
var FormData = require('form-data');
// var fs = require('fs');

export const getApiFetch = async data => {
  try {
    var formdata = new FormData();
    formdata.append('immigrant_employee_id', data.id);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    let response = await fetch(
      'https://hrmspvm.predictionla.com/api/user/' + data.uri,
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        let res = {
          status: true,
          data: result.data,
          msg: '',
        };
        return res;
      })
      .catch(error => {
        let res = {
          status: false,
          data: [],
          msg: '',
        };
        return res;
      });

    return response;
  } catch (err) {
    console.log('Error in getApiFetch ', err);
  }
};

export const _postApiFetch = async data => {
  try {
    var formdata = new FormData();
    data.bodyData.length > 0
      ? data.bodyData.map(e => formdata.append(e[0], e[1]))
      : null;
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    let response = fetch(
      'https://hrmspvm.predictionla.com/api/user/' + data.uri,
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        let res = {
          status: true,
          data: result.data,
          msg: '',
        };
        return res;
      })
      .catch(error => {
        let res = {
          status: false,
          data: [],
          msg: '',
        };
        return res;
      });

    return response;
  } catch (err) {
    console.log('Error in _postApiFetch ', err);
  }
};
