import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from "@angular/forms";
import { SettingMaximumTimeReservationService } from "../../../services/setting/setting-maximum-time-reservation.service";
import { Router } from "@angular/router";
import { SettingTimeReservation } from "../../../shared/models/setting/setting-time-reservation";

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  isSetCustomDate: boolean;
  currentTime: string;

  constructor(private formBuilder: FormBuilder, private settingService: SettingMaximumTimeReservationService, private router: Router) { }
  settingMaximumDateReservationForm: FormGroup = this.formBuilder.group({
    date: ['']
  });
  isChecked = false;
  ngOnInit(): void {
  }


  /**
   * submit form data to server
   */
  onSubmitData() {
    if (this.isChecked) this.currentTime = `${new Date().getHours()}:${new Date().getMinutes()}`;
    const time: SettingTimeReservation = {
      maxAllowedReservationTime: this.isSetCustomDate ? `${this.settingMaximumDateReservationForm.value.date}` : `${this.currentTime}`,
      foodPrice: 0,
      id: 0,
      isEnabled: true
    };
    this.settingService.getLastReservationConfig().subscribe(
      (getlastReservationData: any) => {
        const id = getlastReservationData.Id;
        this.settingService.updateLastReservationConfig(
          {
            Id: id,
            MaxAllowedReservationTime: "string",
            FoodPrice: 0,
            IsEnabled: false
          }
        ).subscribe(
          () => {
            this.settingService.postMaximumTimeReservation(time).subscribe(
              () => {

                this.router.navigateByUrl('/home');
              }, error => {
              });
          }
        )
      }
    )
  }
}
