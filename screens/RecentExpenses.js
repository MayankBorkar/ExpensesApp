import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import {useContext} from "react";
import {ExpensesContext} from "../store/expenses-context";
import {getDateMinusDays} from "../util/date";


function RecentExpenses() {

    const expensesCtx = useContext(ExpensesContext);
    // console.log(expensesCtx.expenses);

    const recentExpenses = expensesCtx.expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today , 7);
        // console.log("expense.date",expense.date);
        // console.log("date7DaysAgo",date7DaysAgo);


        return expense.date > date7DaysAgo;

    });

    return (
        <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 Days"/>
    )
}

export default RecentExpenses;
