import './App.css';
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import Center from './Components/Center';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import Accounts from './Pages/Accounts';
import SavingAccount from './ProductPages/SavingAccount';
import CurrentAccount from './ProductPages/CurrentAccount';
import SalaryAccount from './ProductPages/SalaryAccount';

import Loan from './Pages/Loan';
import HomeLoan from './ProductPages/HomeLoan';
import PersonalBusiness from './ProductPages/PersonalBusiness';
import CarLoan from './ProductPages/CarLoan';

import Deposit from './Pages/Deposit';
import FD from './ProductPages/FD';
import FixedDeposit from './ProductPages/FixedDeposit';
import RecurrentDeposit from './ProductPages/RecurrentDeposit';

import Cards from './Pages/Cards';
import DebitCard from './ProductPages/DebitCard';
import CreditCard from './ProductPages/CreditCard';
import Trans from './ProductPages/Trans';


function App() {
  return (
    <>
    <CSSTransition
      in={true}
      timeout={300}
      classNames="fade"
    >
      <div className="App">
      <Router>
      <Header/>
      <SideBar/>
        <Routes>
          <Route path="/" element={<Center/>}></Route>
          <Route path="/Accounts" element={<Accounts/>}></Route>
          <Route path="/SavingAccount" element={<SavingAccount/>}></Route>
          <Route path="/CurrentAccount" element={<CurrentAccount/>}></Route>
          <Route path="/SalaryAccount" element={<SalaryAccount/>}></Route>

          <Route path="/Loan" element={<Loan/>}></Route>
          <Route path="/HomeLoan" element={<HomeLoan/>}></Route>
          <Route path="/PersonalBusiness" element={<PersonalBusiness/>}></Route>
          <Route path="/CarLoan" element={<CarLoan/>}></Route>

          <Route path="/Deposit" element={<Deposit/>}></Route>
          <Route path="/FD" element={<FD/>}></Route>
          <Route path="/FixedDeposit" element={<FixedDeposit/>}></Route>
          <Route path="/RecurrentDeposit" element={<RecurrentDeposit/>}></Route>

          <Route path="/Cards" element={<Cards/>}></Route>
          <Route path="/DebitCard" element={<DebitCard/>}></Route>
          <Route path="/CreditCard" element={<CreditCard/>}></Route>
          <Route path="/Trans" element={<Trans/>}></Route>
        </Routes>
      </Router>
    </div>
    </CSSTransition>
    </>
  );
}
export default App;
