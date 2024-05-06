import { createThemeAction } from "remix-themes";

import { darkSessionResolver } from "../session.server";

export const action = createThemeAction(darkSessionResolver);