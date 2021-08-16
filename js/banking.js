
function getInputValue(inputIdName) {
    const inputField = document.getElementById(inputIdName)
    const inputAmmount = inputField.value

    inputField.value = '';
    return parseFloat(inputAmmount)
}

function updateTotalField(totalFieldId, previousTotal) {
    const totalElement = document.getElementById(totalFieldId)
    const totalText = totalElement.innerText
    const withdrawAmmount = previousTotal + parseFloat(totalText)
    totalElement.innerText = withdrawAmmount
}

function currentBanlance() {

    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    const previousBalanceTotal = parseFloat(balanceTotalText)
    return previousBalanceTotal
}

function updateBlance(ammount, isAdd) {
    const balanceTotal = document.getElementById('balance-total')
    if (isAdd == true) {
        balanceTotal.innerText = currentBanlance() + ammount
    } else {
        balanceTotal.innerText = currentBanlance() - ammount
    }

}

document.getElementById('deposit-button').addEventListener('click', function () {

    const depositAmmount = getInputValue('deposit-input')
    if (depositAmmount > 0) {
        updateTotalField('deposit-total', depositAmmount)

        updateBlance(depositAmmount, true)

    }



})


document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawAmmount = getInputValue('withdraw-input')
    if (withdrawAmmount > 0 && withdrawAmmount <= currentBanlance()) {

        updateTotalField('withdraw-total', withdrawAmmount)

        updateBlance(withdrawAmmount, false)

    }


})