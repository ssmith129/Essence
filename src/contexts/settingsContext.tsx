import { createContext, PropsWithChildren, useMemo } from 'react'
import { ThemeSettings } from '@/theme'
import { THEMES } from '@/utils/constants'
import useLocalStorage from '@/hooks/useLocalStorage'

// ==============================================================
interface SettingsContextProps {
  settings: ThemeSettings
  saveSettings: (updateSettings: ThemeSettings) => void
}
// ==============================================================

const initialSettings: ThemeSettings = {
  direction: 'ltr',
  theme: THEMES.LIGHT,
  activeLayout: 'layout1',
  responsiveFontSizes: true,
}

export const SettingsContext = createContext({} as SettingsContextProps)

export default function SettingsProvider({ children }: PropsWithChildren) {
  const storage = useLocalStorage<ThemeSettings>('settings', initialSettings)
  const { data: settings, storeData: setStoreSettings } = storage

  const saveSettings = (updateSettings: ThemeSettings) => setStoreSettings(updateSettings)

  const contextValue = useMemo(() => ({ settings, saveSettings }), [settings, saveSettings])

  return <SettingsContext value={contextValue}>{children}</SettingsContext>
}
