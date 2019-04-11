// Code your solution here

function findMatching(drivers, string) {
    return drivers.filter(driver => driver.toUpperCase() === string.toUpperCase())
}

function fuzzyMatch(drivers, string) {
    length = string.length
    return drivers.filter(driver => driver.substring(0, length) === string)
}

function matchName(drivers, string) {
    return drivers.filter(driver => driver.name === string)
}
