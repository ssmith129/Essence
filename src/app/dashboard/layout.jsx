'use client';

import { AuthGuard } from '@/components/auth';
import useSettings from '@/hooks/useSettings';
import DashboardLayoutV1 from '@/layouts/layout-1/DashboardLayout';
import DashboardLayoutV2 from '@/layouts/layout-2/DashboardLayout';
export default function Layout({
  children
}) {
  const {
    settings
  } = useSettings();
  if (settings.activeLayout === 'layout2') {
    return <AuthGuard>
        <DashboardLayoutV2>{children}</DashboardLayoutV2>
      </AuthGuard>;
  }
  return <AuthGuard>
      <DashboardLayoutV1>{children}</DashboardLayoutV1>
    </AuthGuard>;
}