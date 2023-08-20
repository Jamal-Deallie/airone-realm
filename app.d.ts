/// <reference types="lucia" />
declare namespace Lucia {
  type Auth = import('@/app/_auth/lucia').Auth;
  type DatabaseUserAttributes = {
    username: string;
    name: string;
  };
  type DatabaseSessionAttributes = {};
}
