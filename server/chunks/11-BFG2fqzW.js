const load = async ({ depends, locals: { supabase } }) => {
  depends("supabase:db:notes");
  const { data: notes } = await supabase.from("notes").select("id,note").order("id");
  return { notes: notes ?? [] };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 11;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Bs-Cq5MX.js')).default;
const server_id = "src/routes/app/+page.server.ts";
const imports = ["_app/immutable/nodes/11.tFplaOJh.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/B7967vnE.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/n1utGt7g.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/DRAgvGgj.js","_app/immutable/chunks/CWYn12-B.js","_app/immutable/chunks/C1Qa58TA.js","_app/immutable/chunks/DOgouqLz.js","_app/immutable/chunks/n-7n0_vP.js","_app/immutable/chunks/C7xhrS7J.js","_app/immutable/chunks/VliIDSm5.js","_app/immutable/chunks/D-Vn5Dv8.js","_app/immutable/chunks/DFnM7iir.js","_app/immutable/chunks/U54TgtzK.js","_app/immutable/chunks/Dwb5oku2.js","_app/immutable/chunks/Bx5qN_3C.js","_app/immutable/chunks/ccdXsm1e.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=11-BFG2fqzW.js.map
