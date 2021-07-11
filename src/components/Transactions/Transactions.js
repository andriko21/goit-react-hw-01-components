import React from 'react'
import PropTypes from 'prop-types'
import TransactionInfo from './TransactionInfo.js'

const TransactionsHistory = ({ items }) => (
     <table className="transactionHistory">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
         </thead>
         <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <TransactionInfo
          key={id}
          type={type}
          amount={amount}
          currency={currency}
        />
      ))}
    </tbody>
  </table>
);

TransactionsHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionsHistory;