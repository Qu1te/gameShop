import {createBrowserRouter,BrowserRouter} from "react-router-dom"

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<div>Hello world!</div>,
    }
  ]);
  return (
    <BrowserRouter router = {router}/>
  );
}

export default App;
