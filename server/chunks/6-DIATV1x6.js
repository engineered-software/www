import { f as fail, r as redirect } from './index-DHSpIlkf.js';
import { A as ALLOWED_EMAILS, G as GOOGLE_CLIENT_ID } from './private-CYIOpPRJ.js';
import './client-D-af4Dn1.js';
import { s as superValidate, z as zod } from './superValidate-KMnltoiV.js';
import { f as formSchema } from './auth-CAVaF795.js';
import './exports-BX5H4HJi.js';
import './index2-BDI6ceGZ.js';
import './stores-BlRUJoP4.js';
import './index-server-B9vFxl5H.js';
import './stringify-Djm7PJzE.js';
import './_commonjsHelpers-B85MJLTf.js';

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
  signin: async ({ request, locals: { supabase } }) => {
    const form = await superValidate(request, zod(formSchema));
    if (!form.valid) {
      return fail(400, { form });
    }
    console.log("Form submission:", form);
    const allowedEmails = ALLOWED_EMAILS.split(",");
    console.log("Allowed emails:", allowedEmails);
    if (!allowedEmails.includes(form.data.email)) {
      return {
        form,
        needsSubscription: true
      };
    }
    if (form.data.authType === "email") {
      const { error: error2 } = await supabase.auth.signInWithPassword({
        email: form.data.email,
        password: "foobar3000"
      });
      if (error2) {
        console.log(error2);
        redirect(303, "/auth/error");
      } else {
        redirect(303, "/app");
      }
    } else if (form.data.authType === "google") {
      const { error: error2 } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: "http://localhost:5173/auth/callback"
        }
      });
      console.log("Google sign in error:", error2);
      if (error2) {
        console.log(error2);
        redirect(303, "/auth/error");
      } else {
        redirect(303, "/app");
      }
    }
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BJlOfql3.js')).default;
const server_id = "src/routes/(auth)/sign-in/+page.server.ts";
const imports = ["_app/immutable/nodes/6.BMvgenKw.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/B7967vnE.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/DRAgvGgj.js","_app/immutable/chunks/C7xhrS7J.js","_app/immutable/chunks/DOgouqLz.js","_app/immutable/chunks/CWYn12-B.js","_app/immutable/chunks/n1utGt7g.js","_app/immutable/chunks/VliIDSm5.js","_app/immutable/chunks/DFnM7iir.js","_app/immutable/chunks/D-Vn5Dv8.js","_app/immutable/chunks/C1Qa58TA.js","_app/immutable/chunks/U54TgtzK.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/n-7n0_vP.js","_app/immutable/chunks/Dwb5oku2.js","_app/immutable/chunks/BLteyB-h.js","_app/immutable/chunks/CtxtlTgC.js","_app/immutable/chunks/Cdhnmevf.js","_app/immutable/chunks/Hs3FHDB5.js","_app/immutable/chunks/ccdXsm1e.js"];
const stylesheets = ["_app/immutable/assets/Toaster.DKF17Rty.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=6-DIATV1x6.js.map
