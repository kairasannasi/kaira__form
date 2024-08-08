import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { useState } from "react";
import CreateForm from "./components/videoAudit/createForm/CreateForm";
import ViewDetail from "./components/videoAudit/viewDetails/ViewDetail";
import ClientDetail from "./components/videoAudit/clientDetail/ClientDetail";
import FormList from "./components/formButton/FormList";
import MeetingCustomerList from "./components/zoomMeet/MeetingCustomerList";
import MeetingCustomerDetail from "./components/zoomMeet/MeetingCustomerDetail";
import FeedbackList from "./components/feedback/FeedbackList";
import FeedbackCustomerDetails from "./components/feedback/FeedbackCustomerDetails";

function App() {
  const [id, setId] = useState();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="form-list" element={<FormList />} />
        <Route path="/create-form" element={<CreateForm />} />
        <Route path="/view-list" element={<ViewDetail setId={setId} />} />
        <Route path="/client-detail/:id" element={<ClientDetail id={id} />} />

        <Route
          path="/zoom-list"
          element={<MeetingCustomerList setId={setId} />}
        />
        <Route
          path="/zoom-detail/:id"
          element={<MeetingCustomerDetail id={id} />}
        />

        <Route
          path="/feedback-list"
          element={<FeedbackList setId={setId} />}
        />
        <Route
          path="/feedback-detail/:id"
          element={<FeedbackCustomerDetails id={id} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
