import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "../assets/styles/globas.css";
import { cn } from "@/lib/utils";
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants";
import { ThemeProvider } from "next-themes";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: `%s | Untilted-project`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // <html lang="en" className={cn("font-sans", geist.variable)}>
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
        attribute='class'
        defaultTheme='light'
        enableSystem
        disableTransitionOnChange
        >
          {children}

        </ThemeProvider>
      </body>
    </html>
  );
}

// export default function RootLayout({ children }: LayoutProps<"/">) {
//   return (
//     <html
//       lang="en" className={cn("font-sans", geist.variable)}>

//       <body className={`${inter.className} antialiased`}>{children}</body>
//     </html>
//   );
// }
