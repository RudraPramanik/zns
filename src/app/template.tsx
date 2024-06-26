"use client";
import { Nav } from "../components/nav";
import { Provider } from "react-redux";
import { store } from "../redux/store/store";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Provider store={store}>
        <Nav />
        {children}
      </Provider>
    </div>
  );
}
