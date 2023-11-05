import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound, redirect } from "next/navigation";

interface FileIdProps {
  params: {
    fileId: string;
  };
}

const FileIdPage = async ({ params }: FileIdProps) => {
  const { fileId } = params;

  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user || !user.id) redirect(`/auth-callback?origin=dashboard/${fileId}`);

  const file = await db.file.findFirst({
    where: {
      id: fileId,
      userId: user.id,
    },
  });

  if (!file) notFound();

  return <div>{fileId}</div>;
};

export default FileIdPage;
