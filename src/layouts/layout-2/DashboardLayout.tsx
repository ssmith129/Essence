import { PropsWithChildren } from 'react'
// CUSTOM COMPONENTS
import LayoutSideBar from './components/DashboardSidebar'
import DashboardHeader from './components/DashboardHeader'
import LayoutBodyWrapper from './components/LayoutBodyWrapper'
import LayoutSetting from '@/layouts/layout-parts/LayoutSetting'
// DASHBOARD LAYOUT BASED CONTEXT PROVIDER
import LayoutProvider from './context/layoutContext'

export default function DashboardLayoutV2({ children }: PropsWithChildren) {
  return (
    <LayoutProvider>
      {/* DASHBOARD SIDEBAR CONTENT */}
      <LayoutSideBar />

      <LayoutBodyWrapper>
        {/* DASHBOARD HEADER SECTION */}
        <DashboardHeader />

        {/* MAIN CONTENT RENDER SECTION */}
        {children}

        {/* LAYOUT SETTING SECTION */}
        <LayoutSetting />
      </LayoutBodyWrapper>
    </LayoutProvider>
  )
}
