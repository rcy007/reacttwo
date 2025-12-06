import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/others/app-sidebar";
import { ThemeProvider } from "@/components/others/theme-provider";
import { ModeToggle } from "@/components/others/theme-toggle";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          // forcedTheme="light"
          enableSystem
          disableTransitionOnChange>
          <SidebarProvider>
            <AppSidebar />
            <main className="flex-1">
              <div className="flex items-center justify-between px-4 py-2">
              <SidebarTrigger />
              <ModeToggle />
              </div>
              {children}
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}