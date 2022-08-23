function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }


}
function generatePin() {
    const random = Math.round;
    return random;
}
document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    // display pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;

})
document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-number');
    if (isNaN(number)) {
        if (number === 'c') {
            typedNumberField.value = '';
        }
        else if (number === '<') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;

        }
    }
    else {

        const previousTypedNumber = typedNumberField.value;
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;

    }

})
document.getElementById('verify-pin').addEventListener('click', function () {
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-number');
    const typedNumber = typedNumberField.value;
    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessege = document.getElementById('pin-failure');

    if (typedNumber === currentPin) {

        pinSuccessMessage.style.display = 'block';
        pinFailureMessege.style.display = 'none';
    }
    else {

        pinFailureMessege.style.display = 'block';
        pinSuccessMessage.style.display = 'none';

    }
})