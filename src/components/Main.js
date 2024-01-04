import { Children } from "react";
import { ListBox } from "./ListBox";
import { WatchedBox } from "./WatchedBox";

//structural component
export function Main({ children }) {
  return (
    <main className="main">
      {children}
    </main>
  );
}


