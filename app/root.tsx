import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
// import { Analytics } from "@vercel/analytics/react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
} from "@remix-run/react";
import { type IStaticMethods } from "preline/preline";
import { useEffect } from "react";
import {
  PreventFlashOnWrongTheme,
  ThemeProvider,
  useTheme,
} from "remix-themes";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}
if (typeof window !== "undefined") {
  require("preline/preline");
}

import { getUser, darkSessionResolver } from "~/session.server";
import stylesheet from "~/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { getTheme } = await darkSessionResolver(request);
  return json({ user: await getUser(request), theme: getTheme() });
};

export default function AppWithProvider() {
  const { theme } = useLoaderData<typeof loader>();

  return (
    <ThemeProvider specifiedTheme={theme} themeAction="/action/set-theme">
      <App />
    </ThemeProvider>
  );
}

function App() {
  const location = useLocation();
  const { theme } = useLoaderData<typeof loader>();
  const [dTheme] = useTheme();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <html lang="en" data-theme={dTheme ?? ""}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <title>Remix Portfolio Template</title>
        <PreventFlashOnWrongTheme ssrTheme={Boolean(theme)} />
        <Links />
      </head>
      <body
        className="bg-white text-black dark:bg-black dark:text-white"
        suppressHydrationWarning={true}
      >
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
