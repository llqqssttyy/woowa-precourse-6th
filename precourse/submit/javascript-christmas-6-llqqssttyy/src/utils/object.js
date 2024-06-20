/**
 * 두 객체가 같은 값을 가지고 있는지 얕게 비교
 * @param {object} obj1
 * @param {object} obj2
 */
export const shallowEqual = (objA, objB) => {
  let result = true;

  // 두 객체의 key 개수 비교
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) result = false;

  // 두 객체의 value 값 비교
  keysA.forEach((key) => {
    if (objA[key] !== objB[key]) result = false;
  });

  return result;
};

/**
 * 점 표기법(.)을 사용해서 중첩 객체의 값을 찾는 함수
 * 참고: https://elvanov.com/2286
 * @param {object} obj
 * @param {string} field
 */
export const getValueOfField = (obj, field) => {
  if (!field) {
    return null;
  }

  const keys = field.split('.');

  return keys.reduce((curObj, curKey) => (curObj ? curObj[curKey] : null), obj);
};

export const isEmptyObject = (obj) => JSON.stringify(obj) === '{}';
