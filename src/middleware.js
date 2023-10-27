import { headers } from 'next/headers'
import { decryptValue, verifyJwt } from './utils'
import { NextResponse } from 'next/server'

export const config = {
  matcher: [ '/api/users', '/api/volunteers' ]
}

export async function middleware(request) {
    const headersList = headers()
    const Authorization = headersList.get('Authorization')
    if(!Authorization) return Response.json("You are not authenticated, please login to continue", { status: 401})
    const accessToken = Authorization.split('Bearer ')[1]
    // verify access token
    if(!accessToken) return Response.json("You are not authenticated, please login to continue", { status: 401})
    const result = await verifyJwt(accessToken, true)
    if(result.isError) return Response.json("You are not authorized to access this resource, please login to continue", { status: 403})
    console.log(result.data.id)
    const decrypted = decryptValue(result.data.id)
    const id = parseInt(decrypted)
    if(!decrypted || !id) return Response.json("You are not authorized to access this resource, please login to continue.", { status: 403})
    request.headers.set('user', JSON.stringify({...result.data, id}));
    return NextResponse.next({request})
}












  // const pathname = request.nextUrl.pathname
  // console.log(request)
  // if (pathname === apiRoutes.auth.login && request.method === 'POST') {
  //   const body = await request.json()
  //   const result = handleAuthMiddlewareValidation(body)
  //   if(result.isError) return Response.json(result.message, { status: 400})
  //   return NextResponse.next({request:{...request, data: result.data}})
  // }