basic.forever(function () {
    while (input.temperature() >= 8 && (input.temperature() <= 30 && (pins.analogReadPin(AnalogPin.P0) >= 200 && pins.analogReadPin(AnalogPin.P0) <= 600))) {
        basic.showIcon(IconNames.Chessboard)
        basic.showString("¡Correcto!")
    }
    basic.showIcon(IconNames.SmallDiamond)
    basic.showString("¡MAL!")
})
