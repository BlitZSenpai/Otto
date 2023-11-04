import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";

const AuthCallbackPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  const { status } = trpc.authCallback.useQuery(undefined);
  if (status === "success") {
    router.push(origin ? `/${origin}` : "/dashboard");
  }

  if (status === "error") {
    router.push("/sign-in");
  }

  return (
    <div className="">
      <div className=""></div>
    </div>
  );
};

export default AuthCallbackPage;
