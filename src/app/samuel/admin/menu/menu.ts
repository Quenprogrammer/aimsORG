import {Component, signal} from '@angular/core';
import {MenuCardHeader} from '../../system/menu-card-header/menu-card-header';
import {RouterLink} from '@angular/router';
import {Modal} from '../../system/modal';
import {SystemInfoComponent} from '../../system/menu-card-header/system-info/system-info.component';
import {addDoc, collection, Firestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-menu',
  imports: [
    MenuCardHeader,
    RouterLink,
    Modal,
    SystemInfoComponent
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
    { name: 'Dashboard', icon: 'adminIcon/data-drive-flash-plug-usb-svgrepo-com.svg',link:'' },
    { name: 'Blog', icon: 'adminIcon/data-center-data-warehouse-svgrepo-com.svg',  link:'/adminPost'},
    { name: 'Music', icon: 'adminIcon/data-center-data-warehouse-svgrepo-com.svg',  link:'/adminPost'},
    { name: 'Videos', icon: 'adminIcon/data-center-data-warehouse-svgrepo-com.svg',  link:'/adminPost'},
    { name: 'Photos', icon: 'adminIcon/data-center-data-warehouse-svgrepo-com.svg',  link:'/adminPost'},
    { name: 'Users', icon: 'adminIcon/team.svg', link:'/adminUsers'  },
     { name: 'Sales', icon: 'adminIcon/sales.svg' ,link:'' },
    { name: 'Events', icon: 'adminIcon/data-cluster-outline-badged-svgrepo-com.svg', link:'/adminEvent'  },
    { name: 'Reviews', icon: 'adminIcon/reviews.svg' ,link:'' },
    { name: 'Products', icon: 'adminIcon/data-database-eternet-server-storage-svgrepo-com.svg',link:'' },
    { name: 'Messages', icon: 'adminIcon/data-definition-details-svgrepo-com.svg',link:'/adminInbox' },
     { name: 'Report issues', icon: 'adminIcon/problem.svg',link:'/reportIssues'  },

      ];

  width2='900px'

  height2='800px'
  settings = signal(false);

  cloeOthersModal() {
    this.settings.set(false);
  }

  constructor(private firestore: Firestore) {}

  async saveTestDoc() {
    try {
      const docRef = await addDoc(collection(this.firestore, 'testCollection'), {
        name: 'Adamu Salisu',
        age: 25,
        createdAt: new Date()
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }
}
