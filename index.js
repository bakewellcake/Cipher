var cipher = require('./cipher')

var cond = [{arg:'-e',opt:true},{arg:'-d',opt:true},{arg:'-k',opt:false}]
var args = process.argv
var nargs = cond.filter(a => a.opt === false).length + (cond.filter(a => a.opt === true).length > 0 ? 1 : 0)
var valid = cond.every(a => a.opt === true ? args.filter(b => cond.filter(c => c.opt === true).map(c => c.arg).includes(b)).length === 1 : args.filter(b => b === a.arg).length === 1)

function argsError () { console.log('Argument error') }

if (valid === true && args.length - 2 === nargs * 2) {
    var marg = args.filter(a => cond.filter(b => b.opt === true && b.arg === a).map(b => b.arg).includes(a))[0]
    var text = args[args.indexOf(marg) + 1]
    var key = args[args.indexOf('-k') + 1]
    var value = null

    switch (marg) {
        case '-e':
            value = cipher.encrypt(text, key)
            break;
        case '-d':
            value = cipher.decyrpt(text, key)
            break;
        default:
            argsError()
            break;
    }

    console.log(value)
} else {
    argsError()
}