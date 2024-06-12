import { Provider } from "react-redux";
import { store } from "./redux/store";

type Props = {
  children: any;
};

function Providers({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}

export default Providers;
