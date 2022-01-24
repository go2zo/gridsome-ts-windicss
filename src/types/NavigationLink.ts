export interface NavigationLink {
  title: string,
  link: string | undefined,
  items: NavigationLink[] | undefined
}
