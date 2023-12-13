interface Paths {
  HOME: string;
  PRODUCTS: string;
  ABOUT: string;
  PROFILE: string;
  CART: string;
  SIGN_IN: string;
  SIGN_UP: string;
  ERROR: string;
}

const PATHS: Paths = {
  HOME: "/",
  PRODUCTS: "/products",
  ABOUT: "/about",
  PROFILE: "/profile",
  CART: "/cart",
  SIGN_IN: "/user/sign-in",
  SIGN_UP: "/user/sign-up",
  ERROR: "/something-went-wrong",
};

export default PATHS;
