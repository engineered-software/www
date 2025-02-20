import './client-D-af4Dn1.js';
import { s as superValidate, z as zod, a as z } from './superValidate-KMnltoiV.js';
import { f as fail } from './index-DHSpIlkf.js';
import './exports-BX5H4HJi.js';
import './index2-BDI6ceGZ.js';
import './stores-BlRUJoP4.js';
import './index-server-B9vFxl5H.js';
import './stringify-Djm7PJzE.js';
import './_commonjsHelpers-B85MJLTf.js';

const formSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2).optional()
});
const load = async () => {
  const form = await superValidate(zod(formSchema));
  return {
    form
  };
};
const actions = {
  default: async ({ request, locals: { supabase } }) => {
    const form = await superValidate(request, zod(formSchema));
    console.log(form);
    if (!form.valid) {
      return fail(400, { form });
    }
    try {
      const { error } = await supabase.from("newsletter_subscriptions").insert([{
        email: form.data.email,
        name: form.data.name
      }]);
      if (error) throw error;
      console.log(form);
      return { form };
    } catch (error) {
      console.log(error);
      return fail(500, {
        form,
        error: "Failed to subscribe. Please try again."
      });
    }
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-C8HWHIlX.js')).default;
const server_id = "src/routes/(email)/subscribe/+page.server.ts";
const imports = ["_app/immutable/nodes/8.GANxL2sG.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/B7967vnE.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/CWYn12-B.js","_app/immutable/chunks/n1utGt7g.js","_app/immutable/chunks/Cdhnmevf.js","_app/immutable/chunks/DRAgvGgj.js","_app/immutable/chunks/C7xhrS7J.js","_app/immutable/chunks/DOgouqLz.js","_app/immutable/chunks/VliIDSm5.js","_app/immutable/chunks/DFnM7iir.js","_app/immutable/chunks/D-Vn5Dv8.js","_app/immutable/chunks/C1Qa58TA.js","_app/immutable/chunks/U54TgtzK.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/n-7n0_vP.js","_app/immutable/chunks/Dwb5oku2.js","_app/immutable/chunks/Hs3FHDB5.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=8-BeVoqIen.js.map
