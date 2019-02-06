const formatStr = (str) => str.replace(' ', '_').toLowerCase()

const reduceObjectEntries = (reducedObj, tuple) => {
    reducedObj[tuple[0]] = tuple[1]
    return reducedObj
}

const diffObjects = (oldObj, newObj) => Object.entries(newObj).filter(newProp => {
    // console.log(guestProp, user[guestProp[0]])
    return (oldObj[newProp[0]] === undefined || oldObj[newProp[0]] !== newProp[1])
}).reduce(reduceObjectEntries, {})

async function asyncForEach(array, callback) {
    try {

        for (let index = 0; index < array.length; index++) {
            await callback(array[index], index, array);
        }
        return true
    }
    catch(error) {
        console.log(error)
        return false
    }
}


module.exports = {
    diffObjects,
    formatStr
    // asyncForEach
}