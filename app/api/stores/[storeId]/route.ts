import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import supabase from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    console.log("hell");
    const { userId } = auth();
    const body = await req.json();

    const { name } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    const { data: store, error } = await supabase
      .from("Store") // Replace 'your_table_name' with your actual table name
      .insert([{ name, userId }]);

    if (error) {
      throw error;
    }

    return new NextResponse(JSON.stringify(store), { status: 200 });
  } catch (error) {
    console.error("[STORES_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
