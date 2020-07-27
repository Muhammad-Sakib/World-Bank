
const loginBtn = document.getElementById("login");

        loginBtn.addEventListener("click", function(){
            var loginArea = document.getElementById("loginPage");
            loginArea.style.display = "none";
            var transArea = document.getElementById("transitionArea");
            transArea.style.display = "block";
})


// deposit button handler
const addDeposit = document.getElementById("deposit");
      addDeposit.addEventListener("click",function(){
          const depositAmount = document.getElementById("depositAmount").value;
          const newDepositNumber  = parseFloat(depositAmount);
          
//          const currentDeposit = document.getElementById("currentDeposit").innerHTML;
//          const currentDepositValue = parseFloat(currentDeposit);
//          const totalDeposit  = currentDepositValue + newDepositNumber;
//          document.getElementById("currentDeposit").innerHTML = totalDeposit.toFixed(2);
          
//          const currentBalance = document.getElementById("currentBalance").innerHTML;
//          const currentBalanceNumber = parseFloat(currentBalance);
//          const totalBalance = currentBalanceNumber + totalDeposit;
//          document.getElementById("currentBalance").innerHTML = totalBalance.toFixed(2);
          
          spanTextUpdate("currentDeposit",newDepositNumber);
          spanTextUpdate("currentBalance",newDepositNumber);
          document.getElementById("depositAmount").value = "";
      })
        
//span text update
function spanTextUpdate(id,deposit){
    const currentAmount = document.getElementById(id).innerHTML;
    const currentNum = parseFloat(currentAmount);
    const updatedAmount = currentNum + deposit;
    document.getElementById(id).innerHTML = updatedAmount.toFixed(2);
}


//withdraw button handler
const withdraw = document.getElementById("withdraw");
        withdraw.addEventListener("click",function(){
            const previousWithdrawAmount = document.getElementById("currentWithdraw").innerHTML;
            const previousWithdrawNum = parseFloat(previousWithdrawAmount);
            const currentWithdraw = document.getElementById("withdrawAmount").value;         
            const currentWithdrawNumber = parseFloat(currentWithdraw);
            const totalWithdraw = previousWithdrawNum + currentWithdrawNumber;
            document.getElementById("currentWithdraw").innerHTML = totalWithdraw;
            
//            const currentBal = document.getElementById("currentBalance").innerHTML;
//            const currentBalNum = parseFloat(currentBal);
//            const totalBalance = currentBal - currentWithdrawNumber;
//            document.getElementById("currentBalance").innerHTML = totalBalance;
            spanTextUpdate("currentBalance",-currentWithdrawNumber);
            document.getElementById("withdrawAmount").value = "";
        })




