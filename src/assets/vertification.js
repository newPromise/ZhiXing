import { Toast } from 'mint-ui';

const vertifyCode = {
  Email: '',
  name: '^[\\u4E00-\\u9FA5A-Za-z]+$',
  phone: '^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$',
  personCard: '^(^[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$)|(^[1-9]\\d{5}[1-9]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])((\\d{4})|\\d{3}[Xx])$)$'
};
const label = {
  phone: '手机号',
  personCard: '身份证',
  name: '姓名'
};
/*
 * @param  {[String]} name [需要验证的东西]
 * @param {[String]} value [需要进行验证的值]
 * @return {[Boolean]}     [是否通过验证]
 */
let vertify = ({name, value}) => {
  let re = new RegExp(vertifyCode[name], 'g');
  if (!re.test(value)) {
    Toast({
      message: `请输入正确的${label[name]}`,
      position: 'bottom',
      duration: 2000
    });
  };
  console.log('验证', re.test(value));
  return re.test(value);
};
// 只是输出一个函数的情况下,使用 export default
export default vertify;
