export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <h1>Este titulo</h1>
      <div>
        {children}
      </div>
      </body>
    </html>
  );
}
