/*export class Menu {
}*/
import { NavItem } from "./nav-item";

export let menu: NavItem[] = [
  {
    displayName: 'Dashboard',
    iconName: 'dashboard',
    route: 'dashboard'
  },
  {
    displayName: 'Depósitos',
    iconName: 'groups',
    route: 'depositos',
    children: [
      {
        displayName: 'Familia',
        iconName: 'face',
        route: 'depositos/familia'
      },
      {
        displayName: 'Roberto',
        iconName: 'face',
        route: 'depositos/roberto'
      },
      {
        displayName: 'Artur',
        iconName: 'face',
        route: 'depositos/artur'
      },
      {
        displayName: 'Mirian Jenny',
        iconName: 'face',
        route: 'depositos/mirian-jenny'
      },
      {
        displayName: 'Luis',
        iconName: 'face',
        route: 'depositos/luis'
      },
      {
        displayName: 'Nelson',
        iconName: 'face',
        route: 'depositos/nelson'
      }
    ]
  },
  {
    displayName: 'Tickets',
    iconName: 'receipt',
    route: 'tickets',
    children: [
      {
        displayName: 'Luz del Sur - Cell Power',
        iconName: 'account_balance',
        route: 'tickets/luz-del-sur'
      },
      {
        displayName: 'Luz del Sur - Datos',
        iconName: 'account_balance',
        route: 'tickets/luz-del-sur-datos'
      },
      {
        displayName: 'BBVA',
        iconName: 'account_balance',
        route: 'tickets/bbva'
      },
      {
        displayName: 'BCP',
        iconName: 'account_balance',
        route: 'tickets/bcp'
      },
      {
        displayName: 'Interbank',
        iconName: 'account_balance',
        route: 'tickets/interbank'
      },
      {
        displayName: 'Scotiabank',
        iconName: 'account_balance',
        route: 'tickets/scotiabank'
      }/*,
      {
        displayName: 'Cell Power',
        iconName: 'account_balance',
        route: 'tickets/cell-power'
      }*/
    ]
  }
];