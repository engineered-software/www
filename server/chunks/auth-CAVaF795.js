import { a as z } from './superValidate-KMnltoiV.js';

const formSchema = z.object({
  email: z.string().min(5, "Email must be at least 5 characters").email("Please enter a valid email address"),
  authType: z.enum(["email", "google"]).default("email")
});

export { formSchema as f };
//# sourceMappingURL=auth-CAVaF795.js.map
