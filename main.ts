input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 9; index++) {
        Counting_Down_ += -1
        basic.showNumber(Counting_Down_)
    }
    basic.pause(1000)
    Counting_Down_ = 9
    basic.showNumber(Counting_Down_)
})
let Counting_Down_ = 0
Counting_Down_ = 9
basic.showNumber(Counting_Down_)
basic.forever(function () {
	
})
