import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuditMsgService } from '../service/audit-msg.service';
import { AuditMsgInfo } from '../model/audit-msg-info';

@Component({
  selector: 'audit-msg-settings',
  templateUrl: './audit-msg-settings.component.html',
  styleUrls: ['./audit-msg-settings.component.css'],
  providers: [AuditMsgService]
})
export class AuditMsgSettingsComponent implements OnInit {

  msgSettingsFormGroup: FormGroup;

  auditSourceId: string;
  pantientNameAnnonymized: string = "on";


  constructor(fb: FormBuilder, private auditMsgService: AuditMsgService) {
    this.msgSettingsFormGroup = fb.group({
      auditSourceIdFormCtrl: 'ss',
      pantientNameFormCtrl: 'on',
    });
  }



  ngOnInit() {

    this.auditMsgService.getAuditMsgInfo().subscribe(data => {
      this.auditSourceId = data.auditSourceID;
      if (data.anonymization === true) {
        this.pantientNameAnnonymized = "on";
      } else {
        this.pantientNameAnnonymized = "off";
      }
    })
  }

  onSave(): void {
    console.log("onsave");
    console.log("auditSourceId = " + this.auditSourceId);
    console.log("auditSourceId = " + this.pantientNameAnnonymized);

    const auditMsgInfo: AuditMsgInfo = new AuditMsgInfo();
    auditMsgInfo.auditSourceID = this.auditSourceId;

    if (this.pantientNameAnnonymized === "on") {
      auditMsgInfo.anonymization = true;
    } else {
      auditMsgInfo.anonymization = false;
    }

    this.auditMsgService.saveAuditMsgInfo(auditMsgInfo).subscribe(data => {
      console.log("data = " + data);
    })

  }

  onCancel(): void {
    console.log("onCancel");
  }

}
