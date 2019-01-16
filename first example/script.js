'use strict';
let money, time;

function start() {
    
    
     while(isNaN(money)|| money=="" || money==null)
     {
          money = +prompt("Ваш бюджет на месяц?");
     }
}

start();

time = prompt("Введите дату в формате YYYY-MM-DD");

var appDate = {
     resource: money,
     timeDate: time,
     expenses: {},
     optionalExpenses: {},
     income: [],
     saving: true,



};

function chooseExpenses()
{

     for (let i = 0; i < 2; i++) {
          let nameExpenses = prompt("Введите обязательную статью расходов в этом месяце");
          let costExpenses = prompt("Во сколько это обойдется?");
          if (typeof (nameExpenses) == 'string' && typeof (nameExpenses) != null && typeof (costExpenses) != null && nameExpenses.length < 50 &&
               nameExpenses != "" && costExpenses != "") {
               appDate.expenses[nameExpenses] = costExpenses;
               console.log("Done");
          } else
               (
                    i--
               );
     
     
     }
     console.log();
     
}
chooseExpenses();

function detectDayBudjet()
{
     appDate.MoneyPerDay = (appDate.resource / 30).toFixed();
     alert("Ежедневный бюджет = " + appDate.MoneyPerDay);
}

function detectLevel()
{
     switch (appDate.MoneyPerDay) {
          case appDate.MoneyPerDay < 1000:
               appDate.levelBudget = "Минимальный уровень достатка";
               break;
          case appDate.MoneyPerDay < 3000:
               appDate.levelBudget = "Средний уровень достатка";
               break;
          case appDate.MoneyPerDay < 5000:
               appDate.levelBudget = "Высокий уровень достатка";
               break;
     
     }
     
}




function checkSavings()
{

    
     if (appDate.saving==true)
      {
          
          let save = +prompt("Введите сумму ваших накоплений на депозите"),
          percent = prompt("Под какой процент");
          appDate.monthIncome = (save/100/12*percent).toFixed();
          alert("Доход в месяц с вашего депозите: " + appDate.monthIncome);
      }
      


};
checkSavings();