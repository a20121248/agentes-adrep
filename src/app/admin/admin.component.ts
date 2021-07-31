import { Component, OnDestroy } from '@angular/core';
import { MediaChange, MediaObserver } from "@angular/flex-layout";
import { Subscription } from 'rxjs';
import { menu } from './models/menu';
import { NavItem } from './models/nav-item';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnDestroy {
    public opened: boolean = true;
    public mediaWatcher: Subscription;
    public menu: NavItem[] = menu;

    constructor(private media: MediaObserver) {
        
        this.mediaWatcher = this.media.media$.subscribe((mediaChange: MediaChange) => {
            this.handleMediaChange(mediaChange);
        });
    }

    private handleMediaChange(mediaChange: MediaChange) {
        if (this.media.isActive('lt-md')) {
            this.opened = false;
        } else {
            this.opened = true;
        }
    }

    ngOnDestroy() {
        this.mediaWatcher.unsubscribe();
    }
}
