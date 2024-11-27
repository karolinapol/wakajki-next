import { Cart } from "@/components/cart/cart";
import { verifyAuth } from "@/lib/auth";
import classes from "./page.module.scss";
import { redirect } from "next/navigation";
import utils from "@/app/utils.module.scss";

export const CartPage = async () => {
  const result = await verifyAuth();

  if (!result.user) {
    return redirect("/login");
  }

  return (
    <div className={`container ${classes.cartPage} ${utils.mt10}`}>
      <Cart />
    </div>
  );
};

export default CartPage;
