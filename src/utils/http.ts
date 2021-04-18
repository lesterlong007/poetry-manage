/**
 * @Author lester
 * @Date 2020-07-17
 */

import Axios, { AxiosInstance, Method, AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";
import { message } from "antd";

const instance: AxiosInstance = Axios.create({
  timeout: 10000,
});

/**
 * 拦截器
 */
instance.interceptors.request.use( (config: AxiosRequestConfig) => {
  return config;
}, (err: AxiosError) => {
  return Promise.reject(err);
});

instance.interceptors.response.use((res: AxiosResponse) => {
  return res;
}, (err: AxiosError) => {
  return Promise.reject(err);
});

/**
 * 处理response数据
 * @param res
 * @param resolve
 * @param reject
 */
const handleRes = (res: AxiosResponse, resolve: Function, reject: Function) => {
  if(res.status === 200) {
    if(res.data.code === 0) {
      resolve(res.data.data || {});
    } else {
      const { msg } = res.data;
      message.error(msg);
      resolve(null);
    }
  } else {
    const { statusText } = res;
    message.error(statusText);
    resolve(null);
  }
};

const get = (url: string, params?: any, config?: AxiosRequestConfig) => {
  return new Promise((resolve, reject) => {
    instance.get(url, {
      params,
      ...config
    }).then((res: AxiosResponse) => {
      handleRes(res, resolve, reject);
    }).catch((err: AxiosError) => {
      console.error(err);
      resolve(null);
    })
  })
};

const deleteMethod = (url: string, data: any, config?: AxiosRequestConfig) => {
  return new Promise((resolve, reject) => {
    instance.delete(url, {
      data: {
        ...data
      },
      ...config
    }).then((res: AxiosResponse) => {
      handleRes(res, resolve, reject);
    }).catch((err: AxiosError) => {
      console.error(err);
      resolve(null);
    })
  })
};

type RequestMethod = 'post' | 'put';

const unGet = (type: RequestMethod) => {
  return (url: string, data: any, config?: AxiosRequestConfig) => {
    return new Promise((resolve, reject) => {
      // @ts-ignore
      instance[type](url, data, {
        ...config
      }).then((res: AxiosResponse) => {
        handleRes(res, resolve, reject);
      }).catch((err: AxiosError) => {
        console.error(err);
        resolve(null);
      })
    })
  }
};

const request =  function (url: string, params?: any, type: Method = 'get', config?: AxiosRequestConfig) {

  return new Promise((resolve, reject) => {

    /**
     * 处理response数据
     * @param res
     */
    const handleRes = (res: AxiosResponse) => {
      if(res.status === 200) {
        if(res.data.code === 0) {
          resolve(res.data.data || {});
        } else {
          const { msg } = res.data;
          message.error(msg);
          resolve(null);
        }
      } else {
        const { statusText } = res;
        message.error(statusText);
        resolve(null);
      }
    };

    if (type === 'get') {
      instance.get(url, {
        params,
        ...config
      }).then((res: AxiosResponse) => {
        handleRes(res);
      }).catch((err: AxiosError) => {
        console.error(err);
        resolve(null);
      })
    } else if (type === 'delete') {
      instance.delete(url, {
        data: {
          ...params
        },
        ...config
      }).then((res: AxiosResponse) => {
        handleRes(res);
      }).catch((err: AxiosError) => {
        console.error(err);
        resolve(null);
      })
    } else {
      // @ts-ignore
      instance[type](url, params, {
        ...config
      }).then((res: AxiosResponse) => {
        handleRes(res);
      }).catch((err: AxiosError) => {
        resolve(null);
        console.error(err);
      })
    }
  })
};

export default {
  get,
  post: unGet('post'),
  delete: deleteMethod,
  put: unGet('put'),
  request
}
