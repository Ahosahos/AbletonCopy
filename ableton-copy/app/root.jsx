import { Links, Meta, Outlet, Scripts } from "@remix-run/react";

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <h1>SofiahTrust Interactive!</h1>
        <h3>"Building Confidence Through Exceptional Interactivity"</h3>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
