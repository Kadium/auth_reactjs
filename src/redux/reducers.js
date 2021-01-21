import Auth from './auth/reducer';
import App from './app/reducer';
import ThemeSwitcher from './themeSwitcher/reducer';
import LanguageSwitcher from './languageSwitcher/reducer';
import Ecommerce from './ecommerce/reducer';
import Items from './items/reducer';
import Chat from './chat/reducers';
import Rules from './shippingcosts/reducers';
import Category from './category/reducer';
import Order from './order/reducer';

export default {
  Auth,
  App,
  Ecommerce,
  ThemeSwitcher,
  LanguageSwitcher,
  Items,
  Chat,
  Rules,
  Category,
  Order
};
