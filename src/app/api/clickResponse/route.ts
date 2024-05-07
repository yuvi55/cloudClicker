import { NextRequest, NextResponse } from "next/server";
import { logger } from "./../../../../logger";
async function handler(req: NextRequest) {
  const body = await req.json();
  try {
    logger.info(body);
    return NextResponse.json("Success");
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error" });
  }
}

export { handler as POST };
