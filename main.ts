input.onSound(DetectedSound.Loud, function () {
    x = 3
    for (let index = 0; index < 4; index++) {
        basic.showNumber(x)
        x += -1
    }
    basic.clearScreen()
    flag = !(flag)
})
let x = 0
let flag = false
flag = true
basic.forever(function () {
    if (flag) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
