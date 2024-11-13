import React from "react";
import { Sidebar } from "./sidebar.styles";
import { CompanySidebarLogo } from "./company-sidebar-logo";
import { PaymentsIcon } from "../icons/sidebar/payments-icon";
import { BalanceIcon } from "../icons/sidebar/balance-icon";
import { AlertsIcon } from "../icons/sidebar/alerts-icon";
import { CustomersIcon } from "../icons/sidebar/customers-icon";
import { ReportsIcon } from "../icons/sidebar/reports-icon";
import { SettingsIcon } from "../icons/sidebar/settings-icon";
import { SidebarItem } from "./sidebar-item";
import { useSidebarContext } from "../layout/layout-context";
import { usePathname } from "next/navigation";
import { DashboardIcon } from "../icons/sidebar/dashboard-icon";

export const SidebarWrapper = () => {
  const pathname = usePathname();
  useSidebarContext();

  return (
    <aside className="h-screen z-[20] sticky top-0">

      <div
        className={Sidebar({
        })}
      >
        <div className={Sidebar.Header()}>
          <CompanySidebarLogo />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarItem
              title="Dashboard"
              icon={<DashboardIcon />}
              isActive={pathname === "/"}
              href="/"
            />
            <SidebarItem
              title="Alerts"
              icon={<AlertsIcon />}
              isActive={pathname === "/alerts"}
              href="/alerts"
            />
            <SidebarItem            
              title="Sanctions Check"
              icon={<BalanceIcon />}
              isActive={pathname === "/sanctions"}
              href="/sanctions"
            />
            <SidebarItem            
              title="Transactions"
              isActive={pathname === "/transactions"}
              icon={<PaymentsIcon />}
              href="/transactions"
            />
            <SidebarItem
              isActive={pathname === "/customers"}
              title="Customers"
              icon={<CustomersIcon />}
              href="/customers"
            />
            <SidebarItem
              isActive={pathname === "/reports"}
              title="Reports"
              icon={<ReportsIcon />}
              href="/reports"
            />
            <SidebarItem
              isActive={pathname === "/settings"}
              title="Settings"
              icon={<SettingsIcon />}
              href="/settings"
            />
          </div>
        </div>
      </div>
    </aside>
  );
};
