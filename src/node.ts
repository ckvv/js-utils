import * as crypto from 'crypto';

/**
 * 计算数据的md5
 * @param data 需要计算md5的数据
 * @returns md5
 */
function getMd5 (data:any):string {
  return crypto.createHash('md5').update(data).digest('hex');
}

export {
  getMd5
};
