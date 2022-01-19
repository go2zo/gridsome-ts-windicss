declare module '*.yaml' {
  interface NavigationLink {
    title: string,
    link: string | undefined,
    items: NavigationLink[] | undefined
  }
  const data: NavigationLink[];
  export default data;
}
