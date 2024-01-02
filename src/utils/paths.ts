interface Paths {
  [key: string]: string;
}

const PATHS: Paths = {
  HOME: "/",
  PRODUCTS: "/products",
  PC: "/products?category=pc",
  PS5: "/products?category=ps5",
  XBOX: "/products?category=xbox",
  ABOUT: "/about",
  PROFILE: "/profile",
  CART: "/cart",
  SIGN_IN: "/user/sign-in",
  SIGN_UP: "/user/sign-up",
  ERROR: "/something-went-wrong",
};

export default PATHS;
