Bit_IR.onPressEvent(RemoteButton.RIGHT, function () {
    x = 6
    basic.showNumber(6)
})
function vor (tempo: number) {
    pins.analogWritePin(AnalogPin.P8, tempo)
    pins.analogWritePin(AnalogPin.P16, tempo)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
}
function links (tempo: number) {
    pins.analogWritePin(AnalogPin.P8, tempo - 300)
    pins.analogWritePin(AnalogPin.P16, tempo)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
}
Bit_IR.onPressEvent(RemoteButton.UP, function () {
    x = 3
})
/**
 * Funktion rechts: Beide Motoren fahren vorwärts, jedoch wird der linke Motor langsamer, weil beim Tempo (PWM-Signal) 0  .. 1023) der Wert 300 abgezogen wird.
 */
function rechts (tempo: number) {
    pins.analogWritePin(AnalogPin.P8, tempo)
    pins.analogWritePin(AnalogPin.P16, tempo - 300)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
}
function stopp (tempo: number) {
    pins.analogWritePin(AnalogPin.P8, tempo)
    pins.analogWritePin(AnalogPin.P16, tempo)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
}
Bit_IR.onPressEvent(RemoteButton.DOWN, function () {
    x = 4
})
Bit_IR.onPressEvent(RemoteButton.NUM2, function () {
    x = 2
    basic.showIcon(IconNames.Happy)
})
Bit_IR.onPressEvent(RemoteButton.OK, function () {
    x = 8
    basic.showNumber(8)
})
Bit_IR.onPressEvent(RemoteButton.LEFT, function () {
    x = 7
    basic.showNumber(7)
})
function kreis (tempo: number) {
    pins.analogWritePin(AnalogPin.P8, tempo)
    pins.analogWritePin(AnalogPin.P16, tempo)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
}
Bit_IR.onPressEvent(RemoteButton.STAR, function () {
    x = 5
    basic.showNumber(5)
})
function rueck (tempo: number) {
    pins.analogWritePin(AnalogPin.P8, tempo)
    pins.analogWritePin(AnalogPin.P16, tempo)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
}
Bit_IR.onPressEvent(RemoteButton.NUM1, function () {
    x = 1
    basic.showIcon(IconNames.Sad)
})
/**
 * 2 Gleichstrommotoren gesteuert über IR-Fernbedienung schwarz Steuerkreuz unten, unterhalb Zahlenblock
 */
let Geschwindigkeit = 0
let x = 0
Bit_IR.init(Pins.P2)
basic.showIcon(IconNames.Yes)
x = 0
basic.forever(function () {
    if (x == 1) {
        Geschwindigkeit = 600
    }
    if (x == 2) {
        Geschwindigkeit = 1023
    }
    if (x == 3) {
        vor(Geschwindigkeit)
        basic.showNumber(3)
    }
    if (x == 4) {
        rueck(Geschwindigkeit)
        basic.showNumber(4)
    }
    if (x == 5) {
        stopp(1023)
        basic.showNumber(5)
    }
    if (x == 6) {
        rechts(Geschwindigkeit)
    }
    if (x == 7) {
        links(Geschwindigkeit)
    }
    if (x == 8) {
        kreis(Geschwindigkeit)
    }
})
