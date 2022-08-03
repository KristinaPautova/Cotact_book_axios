import React from "react";
import './App.css';
import MainRoutes from "./MainRoutes";
import TopicContextProvider from "./context/TopicContextProvider";
import {ToastContainer} from "react-toastify";

function App() {
  return (
      <TopicContextProvider>
            <div style={{textAlign:'center'}}>
              <MainRoutes/>
            </div>
          <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover={false}
          />
      </TopicContextProvider>
  );
}

export default App;
