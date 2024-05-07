import { NextRequest, NextResponse } from "next/server";

async function handler(req: NextRequest) {
  const body = await req.json();
  try {
    console.log("Button clicked:", body);
    return NextResponse.json("Success");
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error" });
  }
}

export { handler as POST };
