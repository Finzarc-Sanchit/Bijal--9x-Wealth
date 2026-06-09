import { NextResponse } from "next/server";
import { getSiteContent, saveSiteContent } from "@/lib/content/store";

export async function GET() {
  const content = await getSiteContent();
  return NextResponse.json({ data: content });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const content = await saveSiteContent(body);
    return NextResponse.json({
      data: content,
      message: "Content saved. All 3 templates will reflect changes immediately.",
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Invalid content payload";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function DELETE() {
  try {
    const { saveSiteContent: save } = await import("@/lib/content/store");
    const { defaultSiteContent } = await import("@/lib/content/defaults");
    const content = await save(defaultSiteContent);
    return NextResponse.json({
      data: content,
      message: "Content reset to defaults.",
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Reset failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
