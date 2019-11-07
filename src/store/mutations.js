/*
直接更新state的多个方法的对象
 */
import Vue from 'vue'
import {
  RECEIVE_GETNEWSLIST,
  RECEIVE_LOGIN,
  RECEIVE_GETPRICE,
  RECEIVE_REQCREATEORDER,
  RESET_REQGETORDERLIST
} from './mutation-types'

export default {
  [RECEIVE_GETNEWSLIST](state,{data}){
    state.newsList = data
  }
}
