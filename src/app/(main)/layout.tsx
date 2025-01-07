import { SideMenu } from '@/components'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full min-h-screen w-full flex">
      <SideMenu />
      <main className="bg-slate-50 flex-1">{children}</main>
    </div>
  )
}
