import { parseCookies, setCookie } from "nookies";
import { v4 as uuidv4 } from "uuid";

const getExistingDeviceId = (deviceIdCookieKey: string): string | undefined => {
  return parseCookies()?.[deviceIdCookieKey];
};

const createNewDeviceId = (deviceIdCookieKey: string): string => {
  const newId = uuidv4();

  const THIRTY_DAYS = 30 * 24 * 60 * 60;

  setCookie(null, deviceIdCookieKey, newId, {
    maxAge: THIRTY_DAYS,
    path: "/",
    sameSite: "strict",
    secure: true
  });

  return newId;
};

const buildDeviceId = (): string => {
  const deviceIdCookieKey = "deviceId";

  return getExistingDeviceId(deviceIdCookieKey) || createNewDeviceId(deviceIdCookieKey);
};

export default buildDeviceId;
