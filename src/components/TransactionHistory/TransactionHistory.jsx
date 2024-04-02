import css from "../TransactionHistory/TransactionHistory.module.css";
export default function TransactionHistory({ transactions }) {
  return (
    <table className={css.table}>
      <thead className={css.head}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td className={css.data}>{transaction.type}</td>
            <td className={css.data}>{transaction.amount}</td>
            <td className={css.data}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
