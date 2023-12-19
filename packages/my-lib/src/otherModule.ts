import helpers from "@my-lib/helpers";

export const circular1 = () => {
  return;
};

export const circular3 = () => {
  return helpers.circular4();
};

export default {
  circular1,
  circular3,
};
