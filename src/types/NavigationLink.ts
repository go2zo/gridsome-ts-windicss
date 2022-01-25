export interface NavigationLink {
  title: string,
  to: string | undefined,
  children: NavigationLink[] | undefined
}
