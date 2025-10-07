import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, contact, message } = body
    console.log('Contact form received:', { name, contact, message })
    // TODO: integrate with email service or database
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact API error', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
