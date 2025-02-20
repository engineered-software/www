import './client-D-af4Dn1.js';
import { s as superValidate, z as zod } from './superValidate-KMnltoiV.js';
import './index-DHSpIlkf.js';
import { f as formSchema } from './schema-CVY2n87S.js';
import './exports-BX5H4HJi.js';
import './index2-BDI6ceGZ.js';
import './stores-BlRUJoP4.js';
import './index-server-B9vFxl5H.js';
import './stringify-Djm7PJzE.js';
import './_commonjsHelpers-B85MJLTf.js';

const load = async ({ locals: { supabase } }) => {
  const { data: countries } = await supabase.from("countries").select("name").limit(5).order("name");
  return {
    countries: countries ?? [],
    form: await superValidate(zod(formSchema))
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DPABblBD.js')).default;
const server_id = "src/routes/+page.server.ts";
const imports = ["_app/immutable/nodes/5.C0Em79gQ.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/B7967vnE.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/C1Qa58TA.js","_app/immutable/chunks/DOgouqLz.js","_app/immutable/chunks/DRAgvGgj.js","_app/immutable/chunks/CWYn12-B.js","_app/immutable/chunks/n1utGt7g.js","_app/immutable/chunks/n-7n0_vP.js","_app/immutable/chunks/C7xhrS7J.js","_app/immutable/chunks/Bx5qN_3C.js","_app/immutable/chunks/VliIDSm5.js","_app/immutable/chunks/Hs3FHDB5.js","_app/immutable/chunks/DFnM7iir.js","_app/immutable/chunks/D-Vn5Dv8.js","_app/immutable/chunks/U54TgtzK.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/Dwb5oku2.js","_app/immutable/chunks/Cdhnmevf.js","_app/immutable/chunks/B79I8Q2p.js","_app/immutable/chunks/ccdXsm1e.js"];
const stylesheets = ["_app/immutable/assets/5.BBbB-T_l.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=5-CsoKJeY_.js.map
