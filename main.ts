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
    lijst = pins.digitalReadPin(DigitalPin.P0)
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
if (true) {
	
}
if (true) {
	
}
basic.forever(function () {
	
})
