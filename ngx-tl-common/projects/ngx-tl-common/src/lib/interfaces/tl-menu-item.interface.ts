export interface ITlMenuItem {
  id: string,
  label: string,
  icon: string,
  iconOn?: string,
  route?: string,
  routeFilter?: string;
  subItems?: ITlMenuItem[],
  badgeNumber?:number,
  badgeIcon?:string
}
