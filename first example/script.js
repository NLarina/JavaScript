'use strict';
var money = +prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");

var appDate = {
     resource: money,
     timeDate: time,
     expenses: {},
     optionalExpenses: {},
     income: [],
     saving: false,



};

for (let i = 0; i < 2; i++) {
     let nameExpenses = prompt("Введите обязательную статью расходов в этом месяце");
     let costExpenses = prompt("Во сколько это обойдется?");
     if (typeof (nameExpenses) == 'string' && typeof (nameExpenses) != null && typeof (costExpenses) != null && nameExpenses.length < 50 &&
          nameExpenses != "" && costExpenses != "") {
          appDate.expenses[nameExpenses] = costExpenses;
          console.log("Done");
     }
     else 
     (
          i--
     );
     

}
console.log();

appDate.MoneyPerDay =  appDate.resource / 30; 

switch(appDate.MoneyPerDay)
{
     case appDate.MoneyPerDay<1000:
     appDate.levelBudget = "Минимальный уровень достатка";
     break;
     case appDate.MoneyPerDay<3000: 
     appDate.levelBudget = "Средний уровень достатка";
     break; 
     case appDate.MoneyPerDay<5000: 
     appDate.levelBudget = "Высокий уровень достатка";
     break; 

}

alert("Ежедневный бюджет = " + appDate.MoneyPerDay) ;