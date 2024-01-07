export const fetchCrops = setCrops => {
  var formdata = new FormData();
  formdata.append('do', 'crops');
  formdata.append('apikey', 'dwamsoft12345');

  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow',
  };

  fetch('https://dwamsoft.com/auto_irrigations/', requestOptions)
    .then(response => response.json())
    .then(result => {
      setCrops(result?.data);
    })
    .catch(error => console.log('error', error));
};

export const addCrop = (data, callBack, errorCallback) => {
  var formdata = new FormData();
  formdata.append('do', 'add_crop');
  formdata.append('apikey', 'dwamsoft12345');
  formdata.append('name', data?.cropName);
  formdata.append('day', data?.waterDate);
  formdata.append('water_level', '5');
  formdata.append('image', {
    uri: data?.image,
    name: 'upload_aadhar.jpg',
    type: 'image/jpg',
  });
  formdata.append('water_required', data?.waterRequired);

  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow',
  };

  fetch('https://dwamsoft.com/auto_irrigations/', requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result);
      callBack();
    })
    .catch(error => console.log('error', error));
};

export const getCropDetail = (callback, id) => {
  var formdata = new FormData();
  formdata.append('do', 'crop_data_times');
  formdata.append('apikey', 'dwamsoft12345');
  formdata.append('crop_id', id);

  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow',
  };

  fetch('https://dwamsoft.com/auto_irrigations/', requestOptions)
    .then(response => response.json())
    .then(result => {
      callback(result?.data);
    })
    .catch(error => console.log('error', error));
};

export const addCropTotalTime = callback => {
  var formdata = new FormData();
  formdata.append('do', 'add_crop_watering');
  formdata.append('apikey', 'dwamsoft12345');
  formdata.append('crop_id', '1');
  formdata.append('start_time', '16:50');
  formdata.append('end_time', '16:55');
  formdata.append('fertilizer', '2');

  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow',
  };

  fetch('https://dwamsoft.com/auto_irrigations/', requestOptions)
    .then(response => response.json())
    .then(response => {
      callback(response.data);
    })
    .catch(error => console.log('error', error));
};
