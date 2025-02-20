import { r as redirect } from './index-DHSpIlkf.js';
import { G as GOOGLE_CLIENT_ID, A as ALLOWED_EMAILS } from './private-CYIOpPRJ.js';
import './client-D-af4Dn1.js';
import { s as superValidate, z as zod, a as z } from './superValidate-KMnltoiV.js';
import './exports-BX5H4HJi.js';
import './index2-BDI6ceGZ.js';
import './stores-BlRUJoP4.js';
import './index-server-B9vFxl5H.js';
import './stringify-Djm7PJzE.js';
import './_commonjsHelpers-B85MJLTf.js';

const formSchema = z.object({
  email: z.string().min(2).max(50),
  name: z.string().min(2).max(50)
});
const load = async () => {
  const allowedEmails = ALLOWED_EMAILS;
  const googleClientId = GOOGLE_CLIENT_ID;
  return {
    allowedEmails,
    googleClientId,
    form: await superValidate(zod(formSchema))
  };
};
const actions = {
  signup: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      console.error(error);
      redirect(303, "/auth/error");
    } else {
      redirect(303, "/");
    }
  },
  login: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData();
    formData.get("email");
    formData.get("password");
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `http://localhost:5173/auth/callback`
      }
    });
    if (error) {
      console.error(error);
      redirect(303, "/auth/error");
    } else {
      redirect(303, "/private");
    }
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DYLFoYoP.js')).default;
const server_id = "src/routes/(auth)/sign-up/+page.server.ts";
const imports = ["_app/immutable/nodes/7.yrfzFS1E.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/B7967vnE.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/DRAgvGgj.js","_app/immutable/chunks/C7xhrS7J.js","_app/immutable/chunks/DOgouqLz.js","_app/immutable/chunks/VliIDSm5.js","_app/immutable/chunks/DFnM7iir.js","_app/immutable/chunks/CWYn12-B.js","_app/immutable/chunks/n1utGt7g.js","_app/immutable/chunks/D-Vn5Dv8.js","_app/immutable/chunks/C1Qa58TA.js","_app/immutable/chunks/U54TgtzK.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/n-7n0_vP.js","_app/immutable/chunks/Dwb5oku2.js","_app/immutable/chunks/CtxtlTgC.js","_app/immutable/chunks/Cdhnmevf.js","_app/immutable/chunks/Hs3FHDB5.js","_app/immutable/chunks/ccdXsm1e.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=7-Dg7p2QZU.js.map
