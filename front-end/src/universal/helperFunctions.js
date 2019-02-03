const formatStr = (str) => str.replace(' ', '_').toLowerCase()

const reduceObjectEntries = (reducedObj, tuple) => {
    reducedObj[tuple[0]] = tuple[1]
    return reducedObj
}

const diffObjects = (oldObj, newObj) => Object.entries(newObj).filter(newProp => {
    // console.log(guestProp, user[guestProp[0]])
    return (oldObj[newProp[0]] === undefined || oldObj[newProp[0]] !== newProp[1])
}).reduce(reduceObjectEntries, {})

module.exports = {
    diffObjects,
    formatStr
}