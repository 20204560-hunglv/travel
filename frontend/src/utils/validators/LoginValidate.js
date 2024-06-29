/**
 * @description Validate login input
 * @param {string} name
 * @param {string} pass
 * @return {*} 
 */
export default function LoginValidate({name, pass}) {
    if (!name || !pass) throw new Error('Cần điền đầy đủ thông tin')
};
