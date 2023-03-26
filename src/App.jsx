import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/shared/Layout"
import Dashboard from "./components/Dashboard"
import Products from "./components/Products"
import Orders from "./components/Orders"
import Customers from "./components/Customers"
import Transactions from "./components/Transactions"
import Messages from "./components/Messages"

function App() {  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />  
          <Route path='products' element={<Products />} />
          <Route path='orders' element={<Orders />} />
          <Route path='customers' element={<Customers />} /> 
          <Route path='transactions' element={<Transactions />} />
          <Route path='messages' element={<Messages />} />
        </Route>
      </Routes>
    </Router>
    
  )
}

export default App
