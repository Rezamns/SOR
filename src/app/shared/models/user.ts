export class User {
    Id: number;
    FirstName: string;
    LastName: string;
    UserName: string;
    Password: string;
    IsAdmin: true;
    IsDisabled: true;
    Email: string;
    DeliveryLocationId: number;
    DeliveryLocation: {
      Id: number;
      City: number;
      Building: string;
      Floor: number;
      Section: string;
      LocationDetails: string;
    }
}