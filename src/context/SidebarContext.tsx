import { createContext, useState, ReactNode, useContext } from "react";

// تعريف الواجهة لأنواع القيم داخل السياق
interface SidebarContextType {
  collapsed: boolean;
  onToggle: () => void;
}

// إنشاء السياق مع قيم افتراضية
export const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// مزود السياق (Provider)
interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  
  const onToggle = () => setCollapsed((prev) => !prev);

  return (
    <SidebarContext.Provider value={{ collapsed, onToggle }}>
      {children}
    </SidebarContext.Provider>
  );
};

// هوك مخصص لاستهلاك السياق بسهولة
export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) throw new Error("useSidebar must be used within a SidebarProvider");
  return context;
};
