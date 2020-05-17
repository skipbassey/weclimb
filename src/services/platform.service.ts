import { Platform } from '@ionic/angular';
import { Injectable } from "@angular/core";

@Injectable()
export class PlatformService {

    constructor(private platform: Platform) {}

    getPlatform(): string {
        if(this.platform.is("android")) {
            return "md";
        }
        else if(this.platform.is("ios")) {
            return "ios";
        }
        else if(this.platform.is("ipad")) {
            return "ios"
        }
        else if(this.platform.is("iphone")) {
            return "ios";
        }
    }

    getDeviceWidth(): string {
        return this.platform.width();
    }

    getDeviceHeight(): number {
        return this.platform.height();
    }
}