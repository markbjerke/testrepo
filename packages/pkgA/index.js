const pkgb      = require('@ishiptest/pkgb');

function featureX(s) {
    return 'featureX: ' + s;
}

module.exports = featureX(pkgb ? ('pkgA ' + pkgb) : 'pkgA ');