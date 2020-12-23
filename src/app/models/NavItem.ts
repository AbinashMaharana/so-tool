export interface NavItem {
    displayName: string;
    disabled?: boolean;
    iconName: string;
    route?: string;
    submenu?:boolean;
    isActive?:boolean;
    children?: NavItem[];
  }
