import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Dashboard } from './pages/dashboard/Dashboard.page';
import { AddTicket } from './pages/new-ticket/AddTicket.page';
import { TicketLists } from './pages/ticket-list/TicketLists.page';
import { Ticket } from './pages/ticket/Ticket.page';
import { Entry } from './pages/entry/Entry.page';
import { BrowserRouter as Router, Switch} from 'react-router-dom'
import { PrivateRoute } from './Component/private-route/PrivateRoute.comp';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute exact path="/">
            <Entry />
          </PrivateRoute>
          
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/add-ticket">
              <AddTicket />
            </PrivateRoute>
            <PrivateRoute path="/tickets">
              <TicketLists />
            </PrivateRoute>
            <PrivateRoute path="/ticket/:tid">
              {/* Used the tid But in tutorial used tId */}
              <Ticket />
            </PrivateRoute>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
