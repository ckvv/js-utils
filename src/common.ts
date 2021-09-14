/**
 * 控制函数调用频率
 * @param callback 回调函数
 * @param wait 延迟时间
 * @param options 可选参数,控制是否立即执行，中间过程是否执行，this作用域
 * @returns function
 */
function debounce (callback: Function, wait: number, options : {
  immediate ?: boolean,
  middle ?: boolean,
  thisArg ?: any,
} = {
  immediate: false,
  middle: true,
  thisArg: null
}):Function {
  let timer : ReturnType<typeof setTimeout>;
  let restDate = new Date();
  const immediate = options.immediate !== false;
  const middle = options.middle !== false;
  const thisArg = options.thisArg || null;
  return function (...args: any[]) {
    timer && clearTimeout(timer);
    const isFirst = !timer;
    timer = setTimeout(() => {
      callback.apply(thisArg, args);
      restDate = new Date();
    }, wait);
    if ((new Date().getTime() - restDate.getTime() > wait && middle) || (isFirst && immediate)) {
      clearTimeout(timer);
      callback.apply(thisArg, args);
      restDate = new Date();
    }
  };
}

/**
 * 阻塞当前执行n毫秒
 * @param wait 延迟时间
 * @returns promise
 */
async function wait (wait:number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, wait);
  });
}

export {
  debounce,
  wait
};
