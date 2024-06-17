// api/request.js
const baseURL = 'https://api.example.com';

const http = (options) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: baseURL + options.url,
      timeout: 10000,
      method: options.method || 'GET',
      data: options.data || {},
      success: (res) => {
        resolve(res);
      },
      fail: (err) => {
        uni.showToast({
          title: err,
        });
        reject(err);
      },
    });
  });
};

export default http;
