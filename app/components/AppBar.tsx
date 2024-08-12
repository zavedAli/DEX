import { useSession } from "next-auth/react";

const AppBar = () => {
  const { data: session, status } = useSession();

  return (
    <div className="border-b px-2 py-2 flex justify-between">
      <div>Dexc</div>
      <div>
        {status === "loading" && <p>Loading...</p>}
        {status === "authenticated" && <p>{session.user?.name || "User"}</p>}
        {status === "unauthenticated" && <p>Sign In</p>}
      </div>
    </div>
  );
};

export default AppBar;
