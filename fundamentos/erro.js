function handleErrorLaunched(e) {
    throw `Error: ${e.message}`;
}

/**
 * Print name in uppercase
 * @param obj Object with name attribute
 */
function printName(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (e) {
        handleErrorLaunched(e);
    } finally {
        console.log('End');
    }
}

const obj = { name: 'Roberto' };
printName(obj);