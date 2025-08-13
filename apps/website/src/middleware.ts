import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: ['/'],
  // Remove api routes from public since we want to protect them
  ignoredRoutes: ['/((?!api|trpc))(_next.*|.+\\.[\\w]+$)'],
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
