import { r as redirect } from './index-DHSpIlkf.js';

const GET = async ({ locals: { supabase } }) => {
  await supabase.auth.signOut();
  redirect(307, "/");
};

export { GET };
//# sourceMappingURL=_server.ts-DUfTYCxi.js.map
