enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
}

type User = {
  username: string;
  role: ROLES;
}

const yamiUser: User = {
  username: "yami-normix",
  role: ROLES.ADMIN
}
