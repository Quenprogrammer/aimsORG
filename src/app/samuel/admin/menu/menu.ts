import { Component } from '@angular/core';
import {MenuCardHeader} from '../../system/menu-card-header/menu-card-header';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [
    MenuCardHeader,
    RouterLink
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  dataIcons = [
    { name: 'Lock Site', icon: 'adminIcon/data-breach-svgrepo-com.svg',link:''  },
    { name: 'Database', icon: 'adminIcon/data-storage-lock-solid-svgrepo-com.svg' ,link:'' },
    { name: 'Delete Messages', icon: 'adminIcon/data-exchange-interface-symbol-svgrepo-com.svg',link:''  },
    { name: 'Delete Users', icon: 'adminIcon/real-time-data-display-svgrepo-com.svg',link:''  },
    { name: 'Delete Products', icon: 'adminIcon/data-storage-network-solid-svgrepo-com.svg' ,link:''},

  ];
  exportData = [
    { name: 'Users', icon: 'adminIcon/team.svg', link:'/adminUsers'  },
    { name: 'Blog', icon: 'adminIcon/data-center-data-warehouse-svgrepo-com.svg',  link:'/adminPost'},
    { name: 'Sales', icon: 'adminIcon/sales.svg' ,link:'' },
    { name: 'Events', icon: 'adminIcon/data-cluster-outline-badged-svgrepo-com.svg', link:'/adminEvent'  },
    { name: 'Reviews', icon: 'adminIcon/reviews.svg' ,link:'' },
    { name: 'Products', icon: 'adminIcon/data-database-eternet-server-storage-svgrepo-com.svg',link:'' },
    { name: 'Messages', icon: 'adminIcon/data-definition-details-svgrepo-com.svg',link:'/adminInbox' },
    { name: 'Dashboard', icon: 'adminIcon/data-drive-flash-plug-usb-svgrepo-com.svg',link:'' },
    { name: 'Settings', icon: 'adminIcon/settings.svg' ,link:''},
      ];
}
