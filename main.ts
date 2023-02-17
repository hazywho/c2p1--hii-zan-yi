basic.forever(function () {
    pins.analogWritePin(AnalogPin.P1, pins.analogReadPin(AnalogPin.P0))
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
})
