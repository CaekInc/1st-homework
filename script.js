let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");


let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income: [],
    savings : false
};






for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
    b = prompt("Во сколько обойдется?", "");
    if ( (typeof(a) != null) && (typeof(b) != null) && a.length != 0 && b.length != 0 && a.length > 50 && b.length > 50 ){
        appData.expenses[a] = b;
        console.log('done');
    }
    
}

alert(money/30);