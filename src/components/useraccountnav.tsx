import { getUserSubscriptionPlan } from "@/lib/stripe";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import Image from "next/image";
import { Icons } from "./icons";

interface UserAccountNavProps {
  name: string;
  email: string | undefined;
  imageUrl: string;
}

export const UserAccountNav = async ({ name, email, imageUrl }: UserAccountNavProps) => {
  const subscriptionPlan = await getUserSubscriptionPlan();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="overflow-visible">
        <Button className="rounded-full h-8 w-8 aspect-square bg-slate-400">
          <Avatar className="relative h-8 w-8">
            {imageUrl ? (
              <div className="relative aspect-square h-full w-full">
                <Image src={imageUrl} fill alt="profile picture" referrerPolicy="no-referrer" />
              </div>
            ) : (
              <AvatarFallback>
                <span className="sr-only">{name}</span>
                <Icons.user className="h-4 w-4 text-zinc-900" />
              </AvatarFallback>
            )}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};
