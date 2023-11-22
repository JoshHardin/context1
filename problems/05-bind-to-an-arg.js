function bindToAnArg(func, arg) {
  const boundFunc = func.bind(null, arg)
 return boundFunc;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;
