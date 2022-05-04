export const sumByGender = (list) => {
  const data = {
    ordinary_male: 0,
    ordinary_female: 0,
    single_male: 0,
    single_female: 0,
  };
  list.forEach((item) => {
    const {
      household_ordinary_f: o_f,
      household_ordinary_m: o_m,
      household_single_f: s_f,
      household_single_m: s_m,
    } = item;

    data.ordinary_male += +o_m;
    data.ordinary_female += +o_f;
    data.single_male += +s_m;
    data.single_female += +s_f;
  });
  return data;
};
