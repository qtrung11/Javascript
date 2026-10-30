import { Link, Outlet } from "react-router"

function BookKeeper() {

  return (
    <div className="">
      <nav>
        <Link to="/book-keeper/contact">Contact</Link> | {" "}
        <Link to="/book-keeper/invoice">Invoice</Link>
      </nav>

      <br />
      <hr />
      <br />
      <Outlet />
    </div>
  )
}

export default BookKeeper