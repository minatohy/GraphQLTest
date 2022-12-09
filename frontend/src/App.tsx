import React from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//const cors = Cors() //で全リクエストにオープンに？ 実際にはAPI token発行等が望ましいけどスキップ？ いやこれ別かな
//https://techblg.app/articles/how-to-serve-graphql-api-by-next.js-in-vercel/

import { QueryTest } from "./Components/QueryTest"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,   // Suspenseモード有効
    }
  }
});

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <QueryTest />
      </QueryClientProvider>
    </div>
  );
}

export default App;