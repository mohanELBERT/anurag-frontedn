import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import Header from "./pages/Header/Header";
import LoanCard from "./components/LoanCard";
import Empower from "./pages/Empower/Empower";

let data = [
  {
    heading: "Personal Loan",
    para: `Need urgent funds? Whether it s for a medical emergency, travel,
wedding, education, or debt consolidation, FairNeft’s Personal Loan
offers you quick financial support with low interest rates and flexible
repayment options.`,
    btnName1: "Apply Now",
    btn2: "Talk to Advisor",
    imgUrl:""
  },
  {
    heading: "Bussiness Loan",
    para: `Need urgent funds? Whether it s for a medical emergency, travel,
wedding, education, or debt consolidation, FairNeft’s Personal Loan
offers you quick financial support with low interest rates and flexible
repayment options.`,
    btnName1: "Apply Now",
    btn2: "Talk to Advisor",
  },
  {
    heading: "Student Loan",
    para: `Need urgent funds? Whether it s for a medical emergency, travel,
wedding, education, or debt consolidation, FairNeft’s Personal Loan
offers you quick financial support with low interest rates and flexible
repayment options.`,
    btnName1: "Apply Now",
    btn2: "Talk to Advisor",
  },
];

function App() {
  return (
    <div className="App">
      <Header/>
      <Empower/>
      {
        data.map((ele,index)=>{
          return(
            <LoanCard data={ele} />
          )
        })
      }
      
    </div>
  );
}

export default App;
