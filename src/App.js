import "./styles.css";
import { Provider } from "react-redux";
import store from "./Store";
import UserTable from "./UserTable";

export default function App() {
  return (
    <Provider store={store}>
      <UserTable />
    </Provider>
  );
}
