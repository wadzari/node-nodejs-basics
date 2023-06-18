import { dirname } from "path";
import { fileURLToPath } from "url";

export const getFilename = (metaUrl) => fileURLToPath(new URL(metaUrl));
export const getDirname = (metaUrl) => dirname(getFilename(metaUrl));
