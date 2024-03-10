import { BrowserRouter as MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

interface TestWrapper {
  children: React.ReactNode;
}

function TestWrapper({ children }: TestWrapper) {
  return (
    <MemoryRouter>
      <Provider store={store}>{children}</Provider>
    </MemoryRouter>
  );
}

export default TestWrapper;
