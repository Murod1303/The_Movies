import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Wrapper from "./pages/wrapper/Wrapper";

const query = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={query}>
        <Wrapper />
      </QueryClientProvider>
    </>
  );
}

export default App;
