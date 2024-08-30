import { useState, useEffect } from 'react'; 
import './dashboard.css';
import FinancialChart from './financial-chart-component';
import { supabase } from '../services/supabase/create-client-supabase';
import { MoneyUser } from '../utils/interfase';




export default function Dashboard() {
  const [ userData, setUserData] = useState<MoneyUser | null>(null);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        if (sessionError) throw sessionError;

        if (session) {
          const userId = session.user.id;

          // Obtenemos los datos del usuario desde la tabla `money`
          const { data, error } = await supabase
            .from('Money')
            .select('*')
            .eq('id', userId)
            .single();

          if (error) {
            console.error('Error fetching user data:', error);
          } else {
            setUserData(data as MoneyUser);
          }
        }
      } catch (error) {
        console.error('Error fetching session or user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!userData) {
    return <p>No financial data found</p>;
  }

  return (
    <>
      <div className="dasboardContainer">
        <div className="chart-container">
          <FinancialChart  dataChart={userData} /> 
        </div>
        <div className="add-monto-container">
          <div className="form-monto">
            <label htmlFor="text">Largo plaso</label>
            <button>add</button>
          </div>
        </div>
      </div>
      
    </>
  );
}
