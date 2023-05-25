import { BellIcon } from "@heroicons/react/24/outline";
import { Session } from "next-auth/core/types";
import SearchBar from "../client/search-bar";
import UserDrop from "../client/user-drop";
import ButtonSidebar from "../client/button-sidebar";

type Props = {
  session: Session | null;
};

const Navbar = ({ session }: Props) => {
  return (
    <div className="sticky top-0 z-40 flex h-20 shrink-0 items-center gap-x-4 rounded-lg bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <ButtonSidebar />

      {/* Separator */}
      <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <SearchBar />
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Separator */}
          <div
            className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
            aria-hidden="true"
          />

          {/* Profile dropdown */}
          <UserDrop session={session} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
