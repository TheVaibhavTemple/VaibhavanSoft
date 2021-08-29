import './App.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'jquery/dist/jquery.min';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import NavBar from './MyComponents/NavBar';
import TextUtils from './MyComponents/TextUtils';


function App() {
  return (
  <>
   <NavBar/>
   <TextUtils title="TextUtil Application" demo=""/>

  </>
  );
}

export default App;
