import { NextRequest, NextResponse } from 'next/server';
export function GET(request:NextRequest){
 const locale=request.nextUrl.searchParams.get('locale');
 if(locale!=='en'&&locale!=='de') return new NextResponse('Unsupported language',{status:400});
 const response=NextResponse.redirect(new URL('/',request.url),303);
 response.cookies.set('site-language',locale,{path:'/',maxAge:31536000,httpOnly:true,sameSite:'lax',secure:request.nextUrl.protocol==='https:'});
 response.headers.set('Cache-Control','no-store');
 return response;
}
