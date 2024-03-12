function receivesAFunction(spy) {
    return spy()
}
function returnsANamedFunction() {
    return function nico() { 
    }
}
const fn = returnsANamedFunction() 
function returnsAnAnonymousFunction() {
    return function() {

    }
}

