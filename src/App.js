import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './pages/dashboard/Dashboard.page';
import { AddTicket } from './pages/new-ticket/AddTicket.page';
import { TicketLists } from './pages/ticket-list/TicketLists.page';
import { Ticket } from './pages/ticket/Ticket.page';
// import { Entry } from './pages/entry/Entry.page';

function App() {
  return (
    <div className="App">
      {/* <Entry></Entry> */}
      <DefaultLayout>
          {/* <Dashboard/> */}
          {/* <AddTicket/> */}
          {/* <TicketLists/> */}
          <Ticket/>
      </DefaultLayout>
    </div>
  );
}

export default App;
