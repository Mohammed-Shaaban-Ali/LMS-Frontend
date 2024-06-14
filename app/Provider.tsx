import { store } from "@/redux/store";
import { Provider } from "react-redux";

type Props = {
  children: any;
};

function Providers({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}

export default Providers;
