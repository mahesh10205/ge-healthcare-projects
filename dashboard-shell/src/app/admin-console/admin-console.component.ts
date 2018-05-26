import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChangeDetectorRef, ViewChild, ViewContainerRef } from '@angular/core';

import { MediaMatcher } from '@angular/cdk/layout';
import { MatSelectionListChange } from '@angular/material';

import { MenuInfo } from '../model/menu-info';
import { TabInfo } from '../model/tab-info';
import { Constants } from '../model/Constants';
import { UrlInfo } from '../model/url-info';
import { IFrameService } from '../service/iframe.service';
import { Subscription } from 'rxjs/Subscription';
import { viewClassName } from '@angular/compiler';


@Component({
  selector: 'admin-console',
  templateUrl: './admin-console.component.html',
  styleUrls: ['./admin-console.component.css']
})
export class AdminConsoleComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;

  dashboardShellMenu: MenuInfo[] = [];

  tabsInfoList: TabInfo[] = [];

  tabsInfoMap: Map<string, TabInfo> = new Map();

  showTabsList: TabInfo[];

  urlInfos: Map<string, string> = new Map();

  selectedTabInfo: TabInfo;

  private _mobileQueryListener: () => void;

  @ViewChild('eisAccountManager') vcrEisAccountManager;
  @ViewChild('eisConfigManager') vcrEisConfigManager;

  @ViewChild('eisDeviceManager') vcrEisDeviceManager;
  @ViewChild('eisDiagnostics') vcrEisDiagnostics;

  @ViewChild('eisServicesSwManager') vcrEisServicesSwManager;
  @ViewChild('remoteUiFrontend') vcrRemoteUiFrontend;

  @ViewChild('auditLogging') vcrAuditLogging;


  loggedInUser: string;

  loggedIn: boolean;

 


  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private iframeService: IFrameService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {

    this.loggedInUser = this.iframeService.userInfo?this.iframeService.userInfo.user:""

    this.createList();
    this.createTabInfo();

 
  }

  createList(): void {
    this.dashboardShellMenu.push(new MenuInfo(Constants.EIS_DIAGNOSTICS_ID, Constants.EIS_DIAGNOSTICS_LABEL));
    this.dashboardShellMenu.push(new MenuInfo(Constants.EIS_DEVICE_MANAGER_ID, Constants.EIS_DEVICE_MANAGER_LABEL));
    this.dashboardShellMenu.push(new MenuInfo(Constants.REMOTE_UI_FRONT_END_ID, Constants.REMOTE_UI_FRONT_END_LABEL));
    this.dashboardShellMenu.push(new MenuInfo(Constants.EIS_SERVICES_SW_MANAGER_ID, Constants.EIS_SERVICES_SW_MANAGER_LABEL));
    this.dashboardShellMenu.push(new MenuInfo(Constants.EIS_CONFIG_MANAGER_ID, Constants.EIS_CONFIG_MANAGER_LABEL));
    this.dashboardShellMenu.push(new MenuInfo(Constants.EIS_ACCOUNT_MANAGER_ID, Constants.EIS_ACCOUNT_MANAGER_LABEL));
    
    this.dashboardShellMenu.push(new MenuInfo(Constants.AUDIT_LOGGING_ID, Constants.AUDIT_LOGGING_LABEL));
    


    this.dashboardShellMenu.sort((a: MenuInfo, b: MenuInfo) => a.label.localeCompare(b.label))
    this.dashboardShellMenu[0].selected = true;

    this.dashboardShellMenu.forEach((val: MenuInfo, inx: number) => {
      val.pos = inx;
    })
  }

  createTabInfo(): void {

    this.tabsInfoList.push(new TabInfo(Constants.EIS_DIAGNOSTICS_ID, Constants.EIS_DIAGNOSTICS_LABEL, this.vcrEisDiagnostics));
    this.tabsInfoList.push(new TabInfo(Constants.EIS_DEVICE_MANAGER_ID, Constants.EIS_DEVICE_MANAGER_LABEL, this.vcrEisDeviceManager));

    this.tabsInfoList.push(new TabInfo(Constants.REMOTE_UI_FRONT_END_ID, Constants.REMOTE_UI_FRONT_END_LABEL, this.vcrRemoteUiFrontend));
    this.tabsInfoList.push(new TabInfo(Constants.EIS_SERVICES_SW_MANAGER_ID, Constants.EIS_SERVICES_SW_MANAGER_LABEL, this.vcrEisServicesSwManager));

    this.tabsInfoList.push(new TabInfo(Constants.EIS_CONFIG_MANAGER_ID, Constants.EIS_CONFIG_MANAGER_LABEL, this.vcrEisConfigManager));
    this.tabsInfoList.push(new TabInfo(Constants.EIS_ACCOUNT_MANAGER_ID, Constants.EIS_ACCOUNT_MANAGER_LABEL, this.vcrEisAccountManager));

    this.tabsInfoList.push(new TabInfo(Constants.AUDIT_LOGGING_ID, Constants.AUDIT_LOGGING_LABEL, this.vcrAuditLogging));
    


    this.tabsInfoList.sort((a: TabInfo, b: TabInfo) => a.label.localeCompare(b.label));
    this.tabsInfoList[0].show = true;

    this.updateTabInfoMap();
    this.updateShowTabList();

    this.selectedTabInfo = new TabInfo(this.tabsInfoList[0].id, this.tabsInfoList[0].label, this.tabsInfoList[0].content);
    this.selectedTabInfo.pos = 0;
  }

  updateTabInfoMap(): void {
    this.tabsInfoList.forEach((val: TabInfo, inx: number) => {
      this.tabsInfoMap.set(val.id, val);
    })
  }

  updateShowTabList(): void {
    
    this.showTabsList = [];
    this.tabsInfoMap.forEach((val: TabInfo, key: string) => {
      if (val.show == true) {
        this.showTabsList.push(val);
      }
    })

  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);

  
  }

  selectionChange(val, id): void {
    
    let tabInfo: TabInfo = this.tabsInfoMap.get(id);

    if (tabInfo) {
      tabInfo.show = val.selected;
      this.updateShowTabList();
      if (tabInfo.show) {
        this.selectedTabInfo = new TabInfo(tabInfo.id, tabInfo.label, tabInfo.content);
        this.selectedTabInfo.pos = this.getShowTabPosForId(id);
      }
    }
  }

  getShowTabPosForId(id: string): number {
    let inx: number = 0;

    for (let tabInfo of this.showTabsList) {
      if (tabInfo.id == id) {
        break;
      }
      inx++;
    }
    return inx;
  }

  getShowTabForPos(pos: number): TabInfo {

    let inx = 0;
    for (let tabInfo of this.showTabsList) {
      if (inx == pos) {
        return tabInfo;
      }
      inx++;
    }

  }

  onSelectedTabChange(data): void {

    let tabInfo: TabInfo = this.getShowTabForPos(data.index);
    this.selectedTabInfo = tabInfo;
    this.selectedTabInfo.pos = this.getShowTabPosForId(tabInfo.id);

  }

}
