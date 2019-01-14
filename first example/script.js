'use strict'; 
var money = prompt("Ваш бюджет на месяц?");
var time =prompt ("Введите дату в формате YYYY-MM-DD"); 

var appDate={
    resource: money, 
    timeDate: time, 
     expenses: {
        nameExpenses: prompt("Введите обязательную статью расходов в этом месяце"), 
        costExpenses: prompt("Во сколько обойдется?"), 

},
     optionalExpenses: null,
    income: null, 
saving:false, 



};


alert((appDate.resource- appDate.expenses.costExpenses)/30);





