import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProfileServiceService } from '../../../services/profile/profile-service.service';
import { Observable, Subscription } from 'rxjs';
import { ProfileModel } from '../../../shared/models/profile/profile-model';
import { GetUserByContext } from '../../../shared/models/auth/get-user-by-context';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeliveryLocation } from '../../../shared/models/profile/delivery-location';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})


export class EditProfileComponent implements OnInit, OnDestroy {
  userName: string;
  isAdmin: boolean;
  userId: number;
  constructor(
    private profileService: ProfileServiceService,
    private formBuilder: FormBuilder,
    private activedRoute: ActivatedRoute 

  ) {
  }

  subscription: Subscription = new Subscription();
  getStaticProfileData: GetUserByContext;
  getEditableProfileData: DeliveryLocation;

  editProfileForm: FormGroup
  ngOnInit(): void {
    this.craeteEditProfileForm();
    this.getRouteId();
  }

  /**
   * 
   */
  craeteEditProfileForm() {
    this.editProfileForm = this.formBuilder.group({
      City: [null],
      Building: [''],
      Floor: [null],
      Section: [''],
      LocationDetails: ['IT']
    });
  }
  /**
   * 
   */
  submitEditProfileForm() {
    const editedDeliveryLocation: DeliveryLocation = { ...this.editProfileForm.value, Id: 2 }
    this.subscription.add(this.profileService.updateDeliveryLocation(editedDeliveryLocation).subscribe());
  }
  /**
   * 
   */
  getRouteId() {
    this.activedRoute.params.subscribe(params => {
      this.getEditableProfileDataById(params.id);
    })
  }
  /**
   * 
   * @param id 
   */
  getEditableProfileDataById(id: number) {
    this.profileService.getDeliveryLocation(id).subscribe(
      (data: DeliveryLocation) => {
        this.getEditableProfileData = data;
    });
  }
  onShowSaveNotification() {
    alert('ویرایش با موفقیت ذخیره شد');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
