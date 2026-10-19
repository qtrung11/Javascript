import React from 'react'
import { invoiceData } from '../../../mocks/invoiceData'
import { Outlet, useNavigate } from 'react-router';

interface Invoice  {
  name: string,
  number: number,
  amount: string,
  due: string
}

function Invoice() {
  const navigate = useNavigate();
  const [invoices] = React.useState(invoiceData);

  function handleDetail(invoice: Invoice) {
    navigate(`/book-keeper/invoice/${invoice.number}`)
  }

  return (
    <div style={{ display: "flex" }}>
      <nav style={{ borderRight: "1px solid", padding: "1rem" }}>
        {invoices.map(invoice => (
          <div key={invoice.name} onClick={() => handleDetail(invoice)}>
            {invoice.name}
          </div>
        ))}
      </nav>
      <div style={{ padding: "1rem" }}>
        <Outlet />
      </div>
    </div>

  )
}

export default Invoice