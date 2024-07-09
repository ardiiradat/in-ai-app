// src/hooks/getCurrentTabData.js
const getCurrentTabData = (data, netAssetsTab, grossIncomeTab) => {
  const regionData =
    {
      1: data.australia,
      2: data.usa,
      3: data.europe,
      0: data.all,
    }[netAssetsTab] || data.all;

  const periodData =
    {
      1: regionData.grossIncome.month,
      2: regionData.grossIncome.quarter,
      3: regionData.grossIncome.fy2024,
      0: regionData.grossIncome.day,
    }[grossIncomeTab] || regionData.grossIncome.day;

  return periodData;
};

export default getCurrentTabData;
