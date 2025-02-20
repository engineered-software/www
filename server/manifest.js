const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","frame.svg","shortered-dark.svg","shortered.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.DitvFYBi.js",app:"_app/immutable/entry/app.D4ejKVaj.js",imports:["_app/immutable/entry/start.DitvFYBi.js","_app/immutable/chunks/n1utGt7g.js","_app/immutable/chunks/B7967vnE.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/entry/app.D4ejKVaj.js","_app/immutable/chunks/DTmbPnsr.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/n1utGt7g.js","_app/immutable/chunks/B7967vnE.js","_app/immutable/chunks/Hs3FHDB5.js","_app/immutable/chunks/C1Qa58TA.js","_app/immutable/chunks/DOgouqLz.js","_app/immutable/chunks/DRAgvGgj.js","_app/immutable/chunks/CWYn12-B.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-gx0IBw9f.js')),
			__memo(() => import('./chunks/1-DAUuEg9i.js')),
			__memo(() => import('./chunks/2-uqu7aeUP.js')),
			__memo(() => import('./chunks/3-D7PGBQiZ.js')),
			__memo(() => import('./chunks/4-DEw22mQT.js')),
			__memo(() => import('./chunks/5-CsoKJeY_.js')),
			__memo(() => import('./chunks/6-DIATV1x6.js')),
			__memo(() => import('./chunks/7-Dg7p2QZU.js')),
			__memo(() => import('./chunks/8-BeVoqIen.js')),
			__memo(() => import('./chunks/9-C7gwt0iL.js')),
			__memo(() => import('./chunks/10-D-3SDAIH.js')),
			__memo(() => import('./chunks/11-BFG2fqzW.js')),
			__memo(() => import('./chunks/12-DExPWm9r.js')),
			__memo(() => import('./chunks/13-CH921urg.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/app",
				pattern: /^\/app\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/auth/callback",
				pattern: /^\/auth\/callback\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-BQ_ZT6FZ.js'))
			},
			{
				id: "/auth/confirm",
				pattern: /^\/auth\/confirm\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-CPgG-Zuu.js'))
			},
			{
				id: "/auth/error",
				pattern: /^\/auth\/error\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(legal)/privacy",
				pattern: /^\/privacy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/private",
				pattern: /^\/private\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(auth)/sign-in",
				pattern: /^\/sign-in\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(auth)/sign-out",
				pattern: /^\/sign-out\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-DUfTYCxi.js'))
			},
			{
				id: "/(auth)/sign-up",
				pattern: /^\/sign-up\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(email)/subscribe",
				pattern: /^\/subscribe\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(legal)/terms",
				pattern: /^\/terms\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
