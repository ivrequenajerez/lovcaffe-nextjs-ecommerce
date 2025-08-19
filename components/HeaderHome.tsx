// components/HeaderHome.tsx  (SERVER)
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import MobileMenu from "./MobileMenu";
import NavPopup from "./ui/NavPopup";
import LoginButton from "./ui/LoginButton";

export default async function HeaderHome() {
  const session = await getServerSession(authOptions);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="text-sm uppercase font-medium">lov❤️caffè</span>
          </a>
        </div>

        <MobileMenu />

        <NavPopup />

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <LoginButton/>
        </div>
      </nav>
    </header>
  );
}
