import { Injectable } from '@angular/core';
import * as domHelper from 'app/helpers/dom.helper';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private readonly collapsedMenuClass = 'collapsed-menu';

  get isMobile(): boolean {
    return window.innerWidth < 960;
  }

  get isMenuCollapsed(): boolean {
    return document.getElementsByClassName(this.collapsedMenuClass).length === 1;
  }

  set isMenuCollapsed(isCollapsed: boolean) {
    const appBody = document.body;

    isCollapsed
      ? domHelper.addClass(appBody, this.collapsedMenuClass)
      : domHelper.removeClass(appBody, this.collapsedMenuClass);
    domHelper.removeClass(
      document.getElementsByClassName('has-submenu') as HTMLCollectionOf<HTMLElement>,
      'open',
    );
  }
}
