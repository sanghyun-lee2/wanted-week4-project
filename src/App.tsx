import React from "react";
import CommentListContainer from "./containers/CommentListContainer";
import PageListContainer from "./containers/PageListContainer";
import FormContainer from "./containers/FormContainer";

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
   return (
      <Provider store={store}>
         <CommentListContainer />
         <PageListContainer />
         <FormContainer />
      </Provider>
   );
}

export default App;
