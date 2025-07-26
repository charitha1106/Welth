import { db } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const userId = "66976fbf-fe77-46cc-9d37-48bd616dad42";

  const transactions = await db.transaction.findMany({
    where: {
      userId,
      date: {
        gte: new Date(2024, 5, 1), // June 1
        lte: new Date(2024, 5, 30, 23, 59, 59, 999), // June 30
      },
    },
  });

  return NextResponse.json({
    userId,
    transactionCount: transactions.length,
    transactions,
  });
}
