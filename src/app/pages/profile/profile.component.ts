import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProfileServiceService } from '../../services/profile/profile-service.service';
import { Subscription } from 'rxjs';
import { ProfileModel } from '../../shared/models/profile/profile-model';
import { AuthService } from '../../services/auth/auth.service';
import { GetUserByContext } from '../../shared/models/auth/get-user-by-context';
import { DeliveryLocation } from '../../shared/models/profile/delivery-location';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  userName: string;
  isAdmin: boolean;
  subscription: Subscription = new Subscription();
  profileData: ProfileModel;
  deliveryLocation: DeliveryLocation;
  userId: number;
  constructor(
    private profileService: ProfileServiceService,
    private router: Router
  ) {
  }
  getStaticProfileData: GetUserByContext;
  getEditableProfileData: ProfileModel;

  ngOnInit(): void {
    this.getUserProperty();
  }
  /**
   * 
   */
  getUserProperty() {
    this.subscription.add(this.profileService.getProfileData().subscribe(
      (data: ProfileModel) => {
        this.profileData = data;
        this.getDeliveryLocation(2);
      }
    ))
  }
  /**
   * 
   * @param id 
   */
  getDeliveryLocation(id: number) {
    this.subscription.add(this.profileService.getDeliveryLocation(id).subscribe(
      (data: DeliveryLocation) => {
        this.deliveryLocation = data;
        this.userId = data.Id;
      }
    ))
  }
  /**
   * 
   */
  onGoingToEditProfile() {
    this.router.navigate(['profile/edit-profile/' + this.userId]);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
