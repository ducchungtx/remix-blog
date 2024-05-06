import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { ReactNode } from "react";
import {
  PreventFlashOnWrongTheme,
  ThemeProvider,
  useTheme,
} from "remix-themes";

import { getUser, darkSessionResolver } from "~/session.server";
import stylesheet from "~/tailwind.css";

import TemNavbar from "./routes/components/Template/TemNavbar";

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
  const { theme } = useLoaderData<typeof loader>();
  const [dTheme] = useTheme();

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
      <body className="bg-white text-black dark:bg-black  dark:text-white">
        <Layout>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Layout>
      </body>
    </html>
  );
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <TemNavbar />
      <main className=" max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 mt-5">
        {children}
      </main>
    </div>
  );
}