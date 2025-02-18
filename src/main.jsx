import { createRoot } from "react-dom/client";
import "../node_modules/flowbite/dist/flowbite.js";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import App from "./App.jsx";
import UserTokenProvider from "./context/UserToken.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "./../node_modules/@tanstack/react-query-devtools/src/production";
import { Toaster } from "./../node_modules/react-hot-toast/src/components/toaster";



const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(

    <QueryClientProvider client={queryClient}>
      <UserTokenProvider>
        <Toaster></Toaster>

        <App />

        <ReactQueryDevtools initialIsOpen={false} />
      </UserTokenProvider>
    </QueryClientProvider>


);
