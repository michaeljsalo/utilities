// Freeze a nested object or array a single level deep.
// Useful to freeze objects of objects, or arrays of objects.
// This is an O(n) algorithm.

function freezePlusOne (objectToFreeze) {
    if (typeof objectToFreeze !== 'object' || objectToFreeze === null) {
        return objectToFreeze;
    }

    // forEach version
    const frozenObject = Array.isArray(objectToFreeze) ? [] : {};
    Object.keys(objectToFreeze).forEach(key => {
        frozenObject[key] = Object.freeze(objectToFreeze[key]);
    });
    Object.freeze(frozenObject);

    // reduce version
    // const frozenObject2 = Object.keys(objectToFreeze).reduce((frozenObject, key) => ({
    //     ...frozenObject,
    //     key: Object.freeze(objectToFreeze[key]);
    // }), {});
    // Object.freeze(frozenObject2);

    return frozenObject;
}

const testArray = [ { a: 1, b: 2 }, {a: 2, b: 4}, {a: 3, b: 6} ];
testArray.x = 'mutate';
console.log(testArray);

const frozenArray = freezePlusOne(testArray);
frozenArray.y = 'mutate';
console.log(frozenArray);
