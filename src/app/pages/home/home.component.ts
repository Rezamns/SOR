import { Component, OnDestroy, OnInit } from '@angular/core';
import { FoodReservationService } from '../../services/food-reservation/food-reservation.service';
import { FoodReservationWeek } from '../../shared/models/food-reservation/food-reservation-week';
import { Subscription } from "rxjs";
import { SettingMaximumTimeReservationService } from "../../services/setting/setting-maximum-time-reservation.service";
import { SettingTimeReservation } from "../../shared/models/setting/setting-time-reservation";
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  reservationMenu: FoodReservationWeek[];
  subscription: Subscription = new Subscription();
  isOrderFood = true;
  weekOrder = ['currentWeek', 'nextWeek'];
  dayOrder = ['saturday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
  weekDate: string[] = [];
  constructor(
    private foodReservation: FoodReservationService,
    private settingService: SettingMaximumTimeReservationService,
  ) {
  }

  ngOnInit(): void {
    this.isReservationTimeExpired();
    this.welcomeNote()
  }

  /**
   * check reservation time
   */
  isReservationTimeExpired() {
    this.subscription.add(this.foodReservation.getEnabledSetting().subscribe(
      (data: SettingTimeReservation) => {
        this.isOrderFood = !data.isEnabled;
      })
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  welcomeNote() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
  }
  onGetDateFoodInfo(day: string) {
    console.log(day);
  }
  /**
 * get all existence food from server in triple weeks
 */
  getFood(date: string) {
    this.subscription.add(this.foodReservation.getFoodReservation(date).subscribe((data: FoodReservationWeek) => {
      this.reservationMenu = data.foodReservationData;
    }));
  }
  /**
   * 
   * @param event 
   */
  onWeekTabsChange(event: MatTabChangeEvent) {
    this.getWeekDate(0, event.index)
  }
  /**
   * 
   * @param event 
   */
  onTabsChange(event: MatTabChangeEvent) {
    this.getWeekDate(event.index);
  }
  getWeekDate(dayIndex?: number, weekIndex?: number) {
    const currentDate = new Date; // get current date
    let day = currentDate.getDate() - currentDate.getDay(); // First day is the day of the month - the day of the week

    for (let i = 0; i < 7; i++) {
      day = day + i;
      if (day === 6) day = -1;
      day++;
      this.weekDate[i] = new Date(currentDate.setDate(day)).toUTCString();
      day = 0;
    }
    this.getFood(this.weekDate[dayIndex]);
    console.log(this.weekDate);

  }
}