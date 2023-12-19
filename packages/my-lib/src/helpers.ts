import otherModule from "@my-lib/otherModule";

export const otherFunction = () => {
  console.log("otherFunction");
};

export const circular2 = () => {
  otherModule.circular1();
};

export const circular4 = () => {
  return;
};

export default {
  otherFunction,
  circular2,
  circular4,
};
