import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const hasLegacyPageId = request.nextUrl.searchParams.has("page_id");

  if (!hasLegacyPageId) {
    return NextResponse.next();
  }

  const destination = new URL("/assistenza-a-domicilio", request.url);
  return NextResponse.redirect(destination, 308);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|robots.txt|sitemap.xml).*)"],
};
