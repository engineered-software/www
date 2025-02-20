import { G as push, a0 as attr, a5 as escape_html, J as pop } from './index2-BDI6ceGZ.js';
import { g as getTranslationFunctions } from './index3-3fT-JMUq.js';
import { B as Button } from './Icon-GMgxP5jJ.js';
import { U as User_auth_form } from './user-auth-form-CasdBPIG.js';
import { C as Check_check } from './check-check-XXy3fk0I.js';
import './constants-Bz9XXnp8.js';
import './_commonjsHelpers-B85MJLTf.js';
import './stores-BlRUJoP4.js';
import './client-D-af4Dn1.js';
import './exports-BX5H4HJi.js';
import './input-f6lprDJV.js';
import './schema-CVY2n87S.js';
import './superValidate-KMnltoiV.js';
import './index-DHSpIlkf.js';
import './index-server-B9vFxl5H.js';
import './stringify-Djm7PJzE.js';
import './auth-CAVaF795.js';

function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  const title = "Engineered Soft";
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  $$payload.out += `<div class="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">`;
  Button($$payload, {
    href: "/sign-in",
    variant: "ghost",
    class: "absolute right-4 top-4 md:right-8 md:top-8",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Login`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="bg-muted relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r"><div class="absolute inset-0 bg-cover" style="background-image: url(https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1376&amp;q=80);"></div> <div class="relative z-20 flex items-center text-lg font-medium"><a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/`, void 0))} class="flex items-center gap-1 brand text-lg font-medium">`;
  Check_check($$payload, { class: "w-auto h-4", strokeWidth: "3.5" });
  $$payload.out += `<!----> ${escape_html(title)}</a></div> <div class="relative z-20 mt-auto"></div></div> <div class="lg:p-8 space-y-6"><div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]"><div class="flex flex-col space-y-2 text-center"><h1 class="text-2xl font-semibold tracking-tight">Create an account</h1> <p class="text-muted-foreground text-sm">Enter your email below to create your account</p></div> `;
  User_auth_form($$payload, { data, action: "?/signup" });
  $$payload.out += `<!----></div> <p class="text-muted-foreground px-8 text-center text-xs">By continuing you agree to our <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/terms`, void 0))} class="hover:text-primary underline underline-offset-4">Terms of Service</a> and <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/privacy`, void 0))} class="hover:text-primary underline underline-offset-4">Privacy Policy</a></p></div></div>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DYLFoYoP.js.map
