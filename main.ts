radio.onReceivedNumber(function (receivedNumber) {
    note = receivedNumber
    if (note == 7) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else {
        if (note == 8) {
            music.playTone(330, music.beat(BeatFraction.Whole))
        } else {
            if (note == 9) {
                music.playTone(349, music.beat(BeatFraction.Whole))
            } else {
                if (note == 10) {
                    music.playTone(392, music.beat(BeatFraction.Whole))
                } else {
                    if (note == 11) {
                        music.playTone(440, music.beat(BeatFraction.Whole))
                    } else {
                        if (note == 1) {
                            music.playTone(294, music.beat(BeatFraction.Double))
                        } else {
                            if (note == 3) {
                                music.playTone(349, music.beat(BeatFraction.Double))
                            } else {
                                if (note == 5) {
                                    music.playTone(440, music.beat(BeatFraction.Double))
                                } else {
                                    basic.showNumber(404)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(7)
    basic.pause(timer)
    radio.sendNumber(8)
    basic.pause(timer)
    radio.sendNumber(9)
    basic.pause(timer)
    radio.sendNumber(10)
    basic.pause(timer)
    radio.sendNumber(5)
    basic.pause(timerlang)
    radio.sendNumber(5)
    basic.pause(timerlang)
    for (let index = 0; index < 2; index++) {
        radio.sendNumber(12)
        basic.pause(timer)
        radio.sendNumber(12)
        basic.pause(timer)
        radio.sendNumber(12)
        basic.pause(timer)
        radio.sendNumber(12)
        basic.pause(timer)
        radio.sendNumber(5)
        basic.pause(timerlang)
        basic.pause(500)
    }
    radio.sendNumber(10)
    basic.pause(timer)
    radio.sendNumber(10)
    basic.pause(timer)
    radio.sendNumber(10)
    basic.pause(timer)
    radio.sendNumber(10)
    basic.pause(timer)
    radio.sendNumber(3)
    basic.pause(timerlang)
    radio.sendNumber(3)
    basic.pause(timerlang)
    radio.sendNumber(11)
    basic.pause(timer)
    radio.sendNumber(11)
    basic.pause(timer)
    radio.sendNumber(11)
    basic.pause(timer)
    radio.sendNumber(11)
    basic.pause(timer)
    radio.sendNumber(1)
})
let note = 0
let timerlang = 0
let timer = 0
radio.setGroup(3)
timer = 260
timerlang = 510
basic.forever(function () {
	
})
