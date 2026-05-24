export function pushArray(array, el) {

    for (let i = 1; i < arguments.length; i++) {
        if (Array.isArray(arguments[i])) {
            for (let j = 0; j < arguments[i].length; j++) {
                array[array.length] = arguments[i][j]
            }
        } else {
            array[array.length] = arguments[i]
        }
    }
    return array.length
}

export function concat(array, el) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray[i] = array[i]
    }
    for (let i = 1; i < arguments.length; i++) {
        if (Array.isArray(arguments[i])) {
            for (let j = 0; j < arguments[i].length; j++) {
                newArray[newArray.length] = arguments[i][j]
            }
        } else {
            newArray[newArray.length] = arguments[i]
        }
    }
    return newArray
}

export function indexOfArray(array, el, startIndex = 0) {
    if (startIndex < 0) {
        startIndex = array.length + startIndex
    }
    for (let i = startIndex; i < array.length; i++) {
        if (array[i] === el) {
            return i
        }
    }
    return -1
}

export function toReversedArray(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray[i] = array[array.length - 1 - i]
        if (array[array.length - 1 - i] === undefined) {
            newArray[i] = undefined
        }
    }
    return newArray
}