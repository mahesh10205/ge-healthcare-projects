import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { IFrameService } from '../service/iframe.service';
import { K8sServiceService } from '../service/k8s-service.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: string;
  pwd: string;
  msg: string;

  userIdControl = new FormControl('', [Validators.required]);
  pwdControl = new FormControl('', [Validators.required]);


  constructor(private router: Router, private iframeService: IFrameService, private k8sService: K8sServiceService,
    private activatedRoute: ActivatedRoute) {

  }



  getUserIdErrorMessage() {
    return this.userIdControl.hasError('required') ? 'You must enter a value' :
      '';
  }

  getPwdErrorMessage() {
    return this.pwdControl.hasError('required') ? 'You must enter a value' :
      '';
  }

  isErrorsExist(): boolean {

    return this.userIdControl.invalid || this.pwdControl.invalid;
  }




  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {

      console.log("params =" + params)
      if (params['action'] === "logout") {
        this.iframeService.userInfo = undefined;
        this.logout();
      }

      // In a real app: dispatch action to load the details here.
    });
  }
  submit(): void {

    this.msg = "";



    if (this.isErrorsExist() == false) {
      console.log("userid = " + this.userId);
      this.iframeService.loginUsingForm(this.userId, this.pwd).subscribe(resp => {
        if (resp.ok) {
          this.postLogin(this.userId);

          
          this.k8sService.prepareK8sService().subscribe(data => {
            console.log("data = " + data);
          })

        } else {
          this.msg = "Aunthentication Failed";
        }
      },
        err => {
          localStorage.setItem("user", "");
          console.log("err = " + err);
          this.msg = "Aunthentication Failed";
        })
    }
  }


  postLogin(userId: string): void {
    this.loadUrlInfo();
  }

  loadUserInfo(): void {
    
    this.iframeService.getUserInfo().subscribe(data => {
      this.iframeService.userInfo = data;
      this.router.navigate(['/adminConsole']);
    },
      err => {
        this.iframeService.userInfo = undefined;
        console.log("err = " + err);
        this.msg = "Aunthentication Failed";
      })

  }

  loadUrlInfo(): void {

    this.iframeService.getUrlInfos().subscribe(urlDataList => {
      if (urlDataList) {

        let urlInfoMap: Map<string, string> = new Map();

        for (let urlData of urlDataList) {
          urlInfoMap.set(urlData.id, urlData.url);
        }
        this.iframeService.urlInfoMap = urlInfoMap;
        this.loadUserInfo();

      } else {
        this.msg = "Aunthentication Failed";
      }
    },
      err => {
        this.iframeService.userInfo = undefined;
        console.log("err = " + err);
        this.msg = "Aunthentication Failed";
      })
  }

  logout(): void {
    this.iframeService.logout().subscribe(resp => {
      console.log("logout " + resp);
    },
      err => {
        console.log("logout " + err);
        localStorage.setItem("user", "");
        console.log("err = " + err);

      })
  }
}



