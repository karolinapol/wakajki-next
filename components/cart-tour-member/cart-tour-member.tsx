import { useCartCustomersContext } from "@/contexts";
import Button from "../button/button";
import { TourMember } from "../cart-customer-data/cart-customer-data";
import utils from "@/app/utils.module.scss";
import inputClasses from "../input/input.module.scss";

interface CartTourMemberProps {
  index: number;
}

export const CartTourMember = ({ index }: CartTourMemberProps): JSX.Element => {
  const { tourMembers, setTourMembers } = useCartCustomersContext();

  const updateSingleTourMemberName = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedTourMembers = [...tourMembers];
    const currentTourMember = updatedTourMembers[index];
    currentTourMember.name = e.currentTarget.value;

    setTourMembers(updatedTourMembers);
  };

  const updateSingleTourMemberSurname = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedTourMembers = [...tourMembers];
    const currentTourMember = updatedTourMembers[index];
    currentTourMember.surname = e.currentTarget.value;

    setTourMembers(updatedTourMembers);
  };

  const removeTourMember = () => {
    if (tourMembers.length > 1) {
      setTourMembers(
        tourMembers.filter((_tourMember: TourMember, i: number) => index !== i)
      );
    }
  };

  return (
    <div>
      <h4 className={`${utils.mt8} ${utils.mb2}`}>Dorosły {index + 1}</h4>
      <label className={inputClasses.label} htmlFor={`name${[index]}`}>
        {"Imię".toUpperCase()}
      </label>
      <input
        onChange={updateSingleTourMemberName}
        className={`${inputClasses.input} ${inputClasses.inputLg} ${utils.mb3}`}
        type="text"
        name="name"
        value={tourMembers[index].name}
        id={`name${[index]}`}
      ></input>
      <label className={inputClasses.label} htmlFor={`surname${[index]}`}>
        {"Nazwisko".toUpperCase()}
      </label>
      <input
        onChange={updateSingleTourMemberSurname}
        className={`${inputClasses.input} ${inputClasses.inputLg}`}
        type="text"
        name="surname"
        value={tourMembers[index].surname}
        id={`surname${[index]}`}
      ></input>
      <Button
        text="Usuń"
        type="button"
        color="Red"
        additionalClasses={utils.mt2}
        hasFixedWidth={true}
        width="Sm"
        isDisabled={tourMembers.length === 1}
        onClick={removeTourMember}
      />
    </div>
  );
};

export default CartTourMember;
