import { Nav } from "../components/nav";

export default function Template({ children }: { children: React.ReactNode }) {
    return <div>
        <Nav/>
        {children}</div>
  }