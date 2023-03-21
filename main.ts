let max = 0
let min = 0
let meting = 0
let metingen: number[] = []
let lijst = [
0,
0,
0,
0,
0,
0,
0,
0,
0,
0
]
while (true) {
    let som = 0
    lijst[0] = pins.analogReadPin(AnalogPin.P0)
    lijst[1] = pins.analogReadPin(AnalogPin.P0)
    lijst[2] = pins.analogReadPin(AnalogPin.P0)
    lijst[3] = pins.analogReadPin(AnalogPin.P0)
    lijst[4] = pins.analogReadPin(AnalogPin.P0)
    lijst[5] = pins.analogReadPin(AnalogPin.P0)
    lijst[6] = pins.analogReadPin(AnalogPin.P0)
    lijst[7] = pins.analogReadPin(AnalogPin.P0)
    lijst[8] = pins.analogReadPin(AnalogPin.P0)
    lijst[9] = pins.analogReadPin(AnalogPin.P0)
    metingen = lijst
    meting += som
    min = Math.min(0, 0)
    max = Math.max(0, 0)
    lijst.pop()
    serial.redirect(
    SerialPin.USB_TX,
    SerialPin.USB_RX,
    BaudRate.BaudRate115200
    )
    serial.writeLine("" + (som))
}
basic.forever(function () {
	
})
