import { useCartCustomersContext } from "@/contexts";
import Button from "../button/button";
import Input from "../input/input";
import CartTourMember from "../cart-tour-member/cart-tour-member";
import utils from "@/app/utils.module.scss";

export interface TourMember {
  name: string;
  surname: string;
}

export interface CustomerData {
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
}

export const CartCustomerData = (): JSX.Element => {
  const {
    tourMembers,
    setTourMembers,
    customerName,
    setCustomerName,
    customerSurname,
    setCustomerSurname,
    customerEmail,
    setCustomerEmail,
    customerPhoneNumber,
    setCustomerPhoneNumber,
  } = useCartCustomersContext();

  const onAddTourMember = () => {
    if (tourMembers.length <= 6)
      setTourMembers([
        ...tourMembers,
        {
          name: "",
          surname: "",
        },
      ]);
  };

  return (
    <div>
      <div>
        <h2 className={utils.mb5}>Podaj dane osoby rezerwującej</h2>
        <Input
          name="customerName"
          id="customerName"
          value={customerName}
          labelText="Imię"
          setState={setCustomerName}
          additionalClasses={utils.mb3}
          required={true}
          size="Lg"
          type="text"
        />
        <Input
          name="customerSurname"
          id="customerSurname"
          value={customerSurname}
          labelText="Nazwisko"
          setState={setCustomerSurname}
          additionalClasses={utils.mb3}
          required={true}
          size="Lg"
          type="text"
        />
        <Input
          name="customeremail"
          id="customeremail"
          value={customerEmail}
          labelText="Email"
          setState={setCustomerEmail}
          additionalClasses={utils.mb3}
          required={true}
          size="Lg"
          type="email"
        />
        <Input
          name="customerPhoneNumber"
          id="customerPhoneNumber"
          value={customerPhoneNumber}
          labelText="Telefon"
          setState={setCustomerPhoneNumber}
          additionalClasses={utils.mb3}
          required={true}
          size="Lg"
          type="text"
        />
      </div>
      <div>
        <h2 className={`${utils.mt10} ${utils.mb5}`}>
          Podaj dane uczestników wycieczki
        </h2>
        {tourMembers.map((_tourMember: TourMember, index: number) => {
          return <CartTourMember key={index} index={index} />;
        })}

        <Button
          text="Dodaj kolejną osobę"
          type="button"
          color="Yellow"
          additionalClasses={utils.mt8}
          hasFixedWidth={true}
          width="Lg"
          isDisabled={tourMembers.length > 5}
          onClick={onAddTourMember}
        />
      </div>
    </div>
  );
};

export default CartCustomerData;
