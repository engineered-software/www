import { r as redirect } from './index-DHSpIlkf.js';

const load = async ({ locals: { supabase } }) => {
  const { data: { user } } = await supabase.auth.getUser();
  if (user) {
    throw redirect(303, "/app");
  }
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./layout.svelte-4V-_rMCU.js')).default;
const server_id = "src/routes/(auth)/sign-in/+layout.server.ts";
const imports = ["_app/immutable/nodes/2.CS2YIUed.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/B7967vnE.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/DRAgvGgj.js","_app/immutable/chunks/D-Vn5Dv8.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-uqu7aeUP.js.map
