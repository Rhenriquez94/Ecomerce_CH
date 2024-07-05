import { TiShoppingCart } from "react-icons/ti";
import 'tailwindcss/tailwind.css';

const CartWidget = () => {
  const itemCount = 0; 
  return (
    <div className="relative inline-block">
        <TiShoppingCart  className=" fill-[#242424] hover:fill-slate-600  size-8 "/>
        <span 
        className="absolute top-0 left-4 inline-flex items-center justify-center px-2  text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
        {itemCount}
      </span>
    </div>
  );
};

export default CartWidget;