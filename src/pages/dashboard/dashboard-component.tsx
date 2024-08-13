import './dashboard.css'
import FinancialChart from '../../components/FinancialChart/financial-chart-component';


export default function Dashboard() {
  return (
    <>
      <div className="chart-container">
        <FinancialChart />
        
      </div>
    </>
  );
}