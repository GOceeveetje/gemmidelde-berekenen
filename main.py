let lijst: number[] = []
let metingen = 0
let som = 0
basic.forever(function () {
    lijst = [
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
        let list: number[] = []
        let laatstemeting = 0
        let meting = 0
        metingen = pins.analogReadPin(AnalogPin.P0)
        som += meting
        som += -1 * laatstemeting
        list.removeAt(0)
        list.removeAt(0)
    }
})
