import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { IFrameService } from './service/iframe.service';


@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

    constructor(private iframeService:IFrameService) { }

    canActivate() {
        
        return this.iframeService.userInfo ? true : false;
    }
}