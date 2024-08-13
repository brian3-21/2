import './dashboard.css'
import FinancialChart from '../FinancialChart/financial-chart-component';
import App from '../../services/supabase/supabase-api';


export default function Dashboard() {
  return (
    <>
      <div className="chart-container">
        <FinancialChart />
        <App></App>
      </div>
    </>
  );
}