let temp = 0
OLED.init(128, 64)
basic.forever(function () {
    temp = smarthome.dht11Sensor(DigitalPin.P1, smarthome.DHT11_state.DHT11_temperature_C)
    OLED.clear()
    OLED.writeString("Temperature: ")
    OLED.writeNum(temp)
    if (temp > 32) {
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(500)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
