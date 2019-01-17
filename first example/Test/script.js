'use strict';
let money, time;

function start() {


     while (isNaN(money) || money == "" || money == null) {
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
     chooseExpenses: function () {
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

     },

     detectDayBudjet: function () {
          appDate.MoneyPerDay = (appDate.resource / 30).toFixed();
          alert("Ежедневный бюджет = " + appDate.MoneyPerDay);
     },
     levelBudget: function () {
          let temp;
          switch (appDate.MoneyPerDay) {
               case appDate.MoneyPerDay < 1000:
                    temp = "Минимальный уровень достатка";
                    break;
               case appDate.MoneyPerDay < 3000:
                    temp = "Средний уровень достатка";
                    break;
               case appDate.MoneyPerDay < 5000:
                    temp = "Высокий уровень достатка";
                    break;

          }
          return temp;

     },
     checkSavings: function () {
          if (appDate.saving == true) {

               let save = +prompt("Введите сумму ваших накоплений на депозите"),
                    percent = prompt("Под какой процент");
               appDate.monthIncome = (save / 100 / 12 * percent).toFixed();
               alert("Доход в месяц с вашего депозите: " + appDate.monthIncome);
          }

     },
     chooseOptExpenses() {
          for (let i = 0; i < 3; i++) {
               let opt = prompt("Введите статью необязательных расходов?", "");
               appDate.optionalExpenses[i] = opt;
          }
     },
     chooseIncome: function () {
          let items;
          while (items == null || items == "") {
               items = prompt("Что принесет дополнительный доход? (перечислите через запятую)", "");
          }

          appDate.income = items.split(",");
          appDate.income.push(prompt("Есть еще доходы?", ""));
          appDate.income.sort();

          let temp;
          appDate.income.forEach(function (item, i, mass) {
               let k = 0;
               k = i + 1;
               temp = temp + k + ". " + item + "\n";

          });

          alert(temp);

     },
     programInclude: function () {
          console.log("Наша программа включает в себя такие данные как: ")
          for (let i in appDate) {
               console.log(i);
          }
     }


};