function allTheArgs(func, ...args) {
  let callFunc = func.bind(null, ...args);

  return callFunc;
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
