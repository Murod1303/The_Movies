import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Wrapper from "./pages/wrapper/Wrapper";
import ContextProvider from "./context/Context";

const query = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={query}>
        <ContextProvider>
          <Wrapper />
        </ContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
