import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import DashBord from './components/DashBord';
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList';
import Register from './components/Register';
import Loginpage from './components/Loginpage';
import UserProfile from './components/UserProfile';
import Aboutus from './components/Aboutus';
import ContactUs from './components/ContactUs';
import Career from './components/Career';
import UserDashbord from './Screens/UserDashbord';

function App() {
  return (
    <div className="App ">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBord />} />
          <Route path="/create-task" element={<CreateTask />} />
          <Route path="/task-list" element={<TaskList />} />
          <Route path='/profile' element={<UserProfile></UserProfile>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/login' element={<Loginpage></Loginpage>}></Route>
          <Route path='/about' element={<Aboutus></Aboutus>}></Route>
          <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
          <Route path='/career' element={<Career></Career>}></Route>
          <Route path='/user/dashbord' element={<UserDashbord/>}></Route>





        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;



