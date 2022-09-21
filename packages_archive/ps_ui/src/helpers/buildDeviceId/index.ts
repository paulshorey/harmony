import { parseCookies, setCookie } from 'nookies';
import { v4 as uuidv4 } from 'uuid';

const getExistingDeviceId = (cookieName: string): string | undefined => {
  return parseCookies()?.[cookieName];
};

const createNewDeviceId = (cookieName: string): string => {
  const newId = uuidv4();

  const THIRTY_DAYS = 30 * 24 * 60 * 60;

  setCookie(null, cookieName, newId, {
    maxAge: THIRTY_DAYS,
    path: '/',
    sameSite: 'strict',
    secure: true,
  });

  return newId;
};

const buildDeviceId = (): string => {
  const cookieName = 'spiral_device';

  return getExistingDeviceId(cookieName) || createNewDeviceId(cookieName);
};

export default buildDeviceId;
