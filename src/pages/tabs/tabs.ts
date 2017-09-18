import { Component } from '@angular/core';

import { SettingPage } from '../setting/setting';
import { AccountPage } from '../account/account';
import { ReportPage } from '../report/report';

@Component({
	selector: 'page-tabs',
  	templateUrl: 'tabs.html'
})
export class TabsPage {

  tabRoots: Object[];
  accountPage:any;
  reportPage:any;
  settingPage:any;
  constructor() {
  	this.accountPage=AccountPage;
  	this.reportPage=ReportPage;
  	this.settingPage=SettingPage;
    this.tabRoots = [
      {root: AccountPage, tabTitle: '记账', tabIcon: 'create' },
      {root: ReportPage, tabTitle: '报表', tabIcon: 'navigate' },
      {root: SettingPage,tabTitle: '设置',tabIcon: 'person'}
    ];
  }
}
