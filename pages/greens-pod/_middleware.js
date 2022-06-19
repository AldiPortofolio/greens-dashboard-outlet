import { NextResponse } from 'next/server';

export default async function handler(req) {
  const { 'auth.AccessToken': token } = req.cookies;
  if (!token) {
    return NextResponse.redirect(new URL(`/login`, req.url));
  }
}
