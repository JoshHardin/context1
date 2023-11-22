function changeContext(func, obj) {
  let changeFunky = func.bind(obj)
  return changeFunky();
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;
