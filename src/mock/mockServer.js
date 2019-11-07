/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import apiData from './db.json'

Mock.mock('/getNewsList', {code:0, data: apiData.getNewsList})
Mock.mock('/login', {code:0, data: apiData.login})
Mock.mock('/getPrice', {code:0, data: apiData.getPrice})
Mock.mock('/createOrder', {code:0, data: apiData.createOrder})
Mock.mock('/getOrderList', {code:0, data: apiData.getOrderList})
// export default ???  不需要向外暴露任何数据, 只需要保存能执行即可
