import React from "react";
import { invoiceData } from "../../../mocks/invoiceData";
import { useParams } from "react-router";

function InvoiceDetail() {
  const { id } = useParams();
  const [invoices] = React.useState(invoiceData);
  const invoice = id ? invoices.find(invoice => invoice.number.toString() === id) : null;

  if (!invoice) {
    return <>Invoice not found</>
  }
  
  return (
    <div>
      <h2>Total Due: {invoice.amount}</h2>
      <p>Ocean Avenue: {invoice.number}</p>
      <p>Due Date: {invoice.due}</p>
    </div>

  )
}

export default InvoiceDetail