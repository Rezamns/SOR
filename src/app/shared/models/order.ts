export class Order {
    Id: number;
    Quantity: number;
    UserId: number;
    MenuId: number;
    UserFullName: string;
    Menu: {
      Id: number;
      Meal: number;
      FoodName: string;
      FoodId: number;
      CalanderId: number;
      CalanderDate: string;
    }
}