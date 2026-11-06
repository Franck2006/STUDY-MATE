import AsideBar from "./aside-bar";
import NavBar from "./nav-bar";

export default function BoardModel({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <div>
        <NavBar />
      </div>
      <div>
        <div>
          <AsideBar />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
