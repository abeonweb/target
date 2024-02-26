import Navbar from "./Navbar";
import AuthButton from "./AuthButton";
import Logo from "./Logo";

export default function Navigation() {
  return (
    <header className="bg-white flex flex-col md:flex-row justify-between fixed w-full z-50 shadow-md px-0">
      <Logo />
      <nav
        className="relative max-w-[1200px] flex items-center justify-between bg-white p-1 text-gray-700"
        role="navigation"
      >
        <Navbar />
        <AuthButton />
      </nav>
    </header>
  );
}
