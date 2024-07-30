import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CssBaseline, Container, Typography } from "@mui/material";
import InfiniteScrollList from "./components/InfiniteScrollList";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <Container>
        <Typography variant="h3" component="h1" gutterBottom>
          Infinite Scroll with TanStack Query
        </Typography>
        <InfiniteScrollList />
      </Container>
    </QueryClientProvider>
  );
};

export default App;
