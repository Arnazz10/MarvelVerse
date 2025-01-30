import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json()

    // For demo purposes, always succeed
    return NextResponse.json({
      user: {
        email,
        name,
      },
    })
  } catch (error) {
    return NextResponse.json({ error: "An error occurred while registering the user" }, { status: 500 })
  }
}

