
import { prismaClient } from "@repo/prisma/client"


export default async function Home() {
  const user = await prismaClient.user.findFirst();
  return (
    <div>
      test
      {user?.username}
      {user?.password}
    </div>
  );
}
