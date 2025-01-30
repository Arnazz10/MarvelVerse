import { NextResponse } from "next/server"
import avengersData from "@/data/avengers.json"

export async function GET() {
  return NextResponse.json(avengersData)
}

