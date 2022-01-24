declare module '*.yaml' {
  import type { NavigationLink } from "@/types/NavigationLink";
  const data: NavigationLink[];
  export default data;
}
