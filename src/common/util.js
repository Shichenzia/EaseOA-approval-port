import md5 from "js-md5";
import { LOGIN_URL } from "./constants";

export function gotoLogin() {
  const refer = window.location.href;

  window.location.href = `${LOGIN_URL}?refer=${encodeURIComponent(refer)}`;
}

export function getQueryVariable(variable) {
  const splitArr = window.location.href.split("?");
  const query = splitArr.length > 1 ? splitArr[1] : "";
  const vars = query.split("&");
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return "";
}

export function getTokenFromQueryString() {
  const token = getQueryVariable("token");
  return token && decodeURIComponent(token);
}

/**
 * 对http请求数据签名，内部采用MD5算法生成签名指纹。
 * @param {object} data 用于签名的http请求数据。
 * @param {string} secret 用于签名的密钥。
 * @returns {string} 签名指纹
 */
export function sign(data, secret) {
  const str = Object.keys(data)
    .sort()
    .map((key) => `${key}=${data[key]}`)
    .join("&");

  return md5(str + secret);
}

/**
 * 对日期格式进行处理 xxxx-xx-xx xx:xx
 * @param {Date} date 日期
 * @returns {string} 出理后的日期
 */
export function formatDate(date) {
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? "0" + m : m;
  var d = date.getDate();
  d = d < 10 ? "0" + d : d;
  var h = date.getHours();
  var minute = date.getMinutes();
  minute = minute < 10 ? "0" + minute : minute;
  var second = date.getSeconds();
  second = minute < 10 ? "0" + second : second;
  return y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + second;
}
