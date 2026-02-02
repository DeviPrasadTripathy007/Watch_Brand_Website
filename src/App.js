import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home.jsx';
import RegistrationForm from './register.jsx';
import LoginForm from './login.jsx';
import CollectionPage from './collection.jsx';
import ContactPage from './contact.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/collections" element={<CollectionPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
