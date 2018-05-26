import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'audit-msg-settings',
  templateUrl: './audit-msg-settings.component.html',
  styleUrls: ['./audit-msg-settings.component.css']
})
export class AuditMsgSettingsComponent implements OnInit {

  msgSettingsFormGroup: FormGroup;

  auditSourceId: string;
  pantientNameAnnonymized: string = "on";


  constructor(fb: FormBuilder) {
    this.msgSettingsFormGroup = fb.group({
      auditSourceIdFormCtrl: 'ss',
      pantientNameFormCtrl: 'on',
    });
  }



  ngOnInit() {

  }

  onSave(): void {
    console.log("onsave");
    console.log("auditSourceId = "+this.auditSourceId);
    console.log("auditSourceId = "+this.pantientNameAnnonymized);
  }

  onCancel(): void {
    console.log("onCancel");
  }

}
