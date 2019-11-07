/*
通过mutation间接更新state的多个方法的对象
 */
import {reqgetNewsList, reqlogin,reqgetPrice,reqcreateOrder, reqgetOrderList} from '../api/index'
import {
  RECEIVE_GETNEWSLIST,
  RECEIVE_LOGIN,
  RECEIVE_GETPRICE,
  RECEIVE_REQCREATEORDER,
  RESET_REQGETORDERLIST
} from './mutation-types';

export default {
  async getNews({commit}){
    let result = await reqgetNewsList();
    console.log(result)
    if (result.code === 0) {
      const data = result.data
      commit(RECEIVE_GETNEWSLIST, {data})
    }

  }
}
