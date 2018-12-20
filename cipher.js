function numToAscii(num) {
    if (num >= 0 && num < 25) return String.fromCharCode(num + 97)
    if (num >= 25 && num < 53) return String.fromCharCode(num + 38)
    if (num >= 53 && num < 62) return String.fromCharCode(num - 5)
}

function numToHex(num) {
    return numToAscii(Math.floor(num / 62)) + numToAscii(num % 62)
}

function asciiToNum(num) {
    if (num >= 97 && num < 123) return num - 97
    if (num >= 65 && num < 91) return num - 38
    if (num >= 48 && num < 58) return num + 5
}

function hexToNum(hex) {
    return (62 * asciiToNum(hex.charCodeAt(0))) + asciiToNum(hex.charCodeAt(1))
}

function cipher(v, k, e) {
    var result = ''
    for (var a = 0; a < v.length; a += (e === true ? 1 : 2)) {
        var cct = e === true ? v.charCodeAt(a) : hexToNum(v[a] + v[a + 1])
        for (var b = 0; b < k.length; b++) {
            var cck = k.charCodeAt(b)
            cct ^= cck
        }
        result += e === true ? numToHex(cct) : String.fromCharCode(cct)
    }
    return result
}

module.exports = {
    encrypt: function (v, k) {
        return cipher(v, k, true)
    },
    decyrpt: function (v, k) {
        return cipher(v, k, false)
    }
}