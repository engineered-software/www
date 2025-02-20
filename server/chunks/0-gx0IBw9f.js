import { isBrowser, createBrowserClient, createServerClient } from '@supabase/ssr';
import { P as PUBLIC_SUPABASE_URL, a as PUBLIC_SUPABASE_ANON_KEY } from './public-DXk0jO56.js';

const load$1 = async ({ data, depends, fetch }) => {
  depends("supabase:auth");
  const supabase = isBrowser() ? createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
    global: {
      fetch
    }
  }) : createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
    global: {
      fetch
    },
    cookies: {
      getAll() {
        return data.cookies;
      }
    }
  });
  const {
    data: { session }
  } = await supabase.auth.getSession();
  const {
    data: { user }
  } = await supabase.auth.getUser();
  return { session, supabase, user };
};

var _layout_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load$1
});

const load = async ({ locals: { safeGetSession }, cookies }) => {
  const { session } = await safeGetSession();
  return {
    session,
    cookies: cookies.getAll()
  };
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-Y33LzQ7s.js')).default;
const universal_id = "src/routes/+layout.ts";
const server_id = "src/routes/+layout.server.ts";
const imports = ["_app/immutable/nodes/0.BYx-bqlY.js","_app/immutable/chunks/U54TgtzK.js","_app/immutable/chunks/B7967vnE.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/DTmbPnsr.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/n1utGt7g.js","_app/immutable/chunks/Hs3FHDB5.js","_app/immutable/chunks/C1Qa58TA.js","_app/immutable/chunks/DOgouqLz.js","_app/immutable/chunks/DRAgvGgj.js","_app/immutable/chunks/D-Vn5Dv8.js","_app/immutable/chunks/C7xhrS7J.js","_app/immutable/chunks/CWYn12-B.js","_app/immutable/chunks/Dwb5oku2.js","_app/immutable/chunks/VliIDSm5.js","_app/immutable/chunks/n-7n0_vP.js","_app/immutable/chunks/B79I8Q2p.js","_app/immutable/chunks/BLteyB-h.js","_app/immutable/chunks/Bx5qN_3C.js"];
const stylesheets = ["_app/immutable/assets/0.DwL4FNCA.css","_app/immutable/assets/Toaster.DKF17Rty.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets, _layout_ts as universal, universal_id };
//# sourceMappingURL=0-gx0IBw9f.js.map
