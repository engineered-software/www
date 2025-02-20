const load = async ({ depends, locals: { supabase } }) => {
  depends("supabase:db:notes");
  const { data: notes } = await supabase.from("notes").select("id,note").order("id");
  return { notes: notes ?? [] };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 13;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-C_LJSbn4.js')).default;
const server_id = "src/routes/private/+page.server.ts";
const imports = ["_app/immutable/nodes/13.BE7bJg0U.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/B7967vnE.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/C1Qa58TA.js","_app/immutable/chunks/DOgouqLz.js","_app/immutable/chunks/DRAgvGgj.js","_app/immutable/chunks/n-7n0_vP.js","_app/immutable/chunks/n1utGt7g.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=13-CH921urg.js.map
