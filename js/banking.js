// handle deposit button event 

document.getElementById('deposit-button').addEventListener('click', function () {

    // get deposit you want 
    const depositInput = document.getElementById('deposit-input')
    const newDepositAmmount = depositInput.value

    // get previous deposit 
    const depositTotal = document.getElementById('deposit-total')
    const previousDepositAmmount = depositTotal.innerText



    // update you deposit dashboard
    const newDepositTotal = parseFloat(newDepositAmmount) + parseFloat(previousDepositAmmount)

    depositTotal.innerText = newDepositTotal


    // update account balance 
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalAmmount = balanceTotal.innerText
    const previousBalance = parseFloat(balanceTotalAmmount)

    const updatebalance = parseFloat(newDepositAmmount) + previousBalance
    balanceTotal.innerText = updatebalance

    // clear input field 
    depositInput.value = ''
})

// handle withdraw handler 

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input')
    console.log(withdrawInput.value)
    const withdrawAmmountText = withdrawInput.value
    const newWithdrawAmmount = parseFloat(withdrawAmmountText)

    // set withdraw total 

    const withdrawTotal = document.getElementById('withdraw-total')
    const previousWithdrawText = withdrawTotal.innerText
    const previousWithdrawTotal = parseFloat(previousWithdrawText)
    console.log(previousWithdrawTotal)

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmmount
    withdrawTotal.innerText = newWithdrawTotal

    // clear withdraw input 
    withdrawInput.value = ''

    // update balance 
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalAmmount = balanceTotal.innerText
    const previousBalance = parseFloat(balanceTotalAmmount)

    const updatebalance = previousBalance - newWithdrawTotal
    balanceTotal.innerText = updatebalance
})