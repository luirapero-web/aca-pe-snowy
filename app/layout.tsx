import "./globals.css"
export const metadata = { title: "ACA.PE - ¿Dónde es hoy?" }
export default function RootLayout({children}:{children:any}){
  return (
    <html lang="es">
      <head><script src="https://cdn.tailwindcss.com"></script></head>
      <body>{children}</body>
    </html>
  )
}