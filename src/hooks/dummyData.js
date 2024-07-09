// src/hooks/dummyData.js

const dummyData = {
  all: {
    netAssets: "$74,769,618",
    grossAssets: "$78,789,618",
    liabilities: "$2,020,000",
    change: "+0.1%",
    portoPerformance: {
      all: [
        { period: "Month", amount: "401,321", percentage: "+1.5" },
        { period: "Quarter", amount: "1,814,603", percentage: "+1.1" },
        { period: "FY 2024", amount: "3,285,372", percentage: "-1.6" },
      ],
      realised: [
        { period: "Month", amount: "200,000", percentage: "-1.3" },
        { period: "Quarter", amount: "0", percentage: "0" },
        { period: "FY 2024", amount: "1,500,000", percentage: "-2.5" },
      ],
      unrealised: [
        { period: "Month", amount: "201,321", percentage: "+0.2" },
        { period: "Quarter", amount: "414,603", percentage: "-0.3" },
        { period: "FY 2024", amount: "1,785,372", percentage: "-2.1" },
      ],
    },
    grossIncome: {
      day: {
        grossAssets: "$14,769,618",
        expenses: "$9,618",
        income: "$2,020,000",
        change: "+0.1%",
      },
      month: {
        grossAssets: "$24,769,618",
        expenses: "$29,618",
        income: "$4,020,000",
        change: "+0.3%",
      },
      quarter: {
        grossAssets: "$34,769,618",
        expenses: "$19,618",
        income: "$5,020,000",
        change: "-0.2%",
      },
      fy2024: {
        grossAssets: "$54,769,618",
        expenses: "$789,618",
        income: "$18,020,000",
        change: "+2.5%",
      },
    },
  },
  australia: {
    netAssets: "$24,769,618",
    grossAssets: "$28,789,618",
    liabilities: "$4,020,000",
    change: "+0.3%",
    portoPerformance: {
      all: [
        { period: "Month", amount: "501,321", percentage: "+0.5" },
        { period: "Quarter", amount: "914,603", percentage: "+1.1" },
        { period: "FY 2024", amount: "4,285,372", percentage: "+4.6" },
      ],
      realised: [
        { period: "Month", amount: "200,000", percentage: "+0.3" },
        { period: "Quarter", amount: "0", percentage: "0" },
        { period: "FY 2024", amount: "0", percentage: "0" },
      ],
      unrealised: [
        { period: "Month", amount: "0", percentage: "0" },
        { period: "Quarter", amount: "414,603", percentage: "-0.3" },
        { period: "FY 2024", amount: "1,785,372", percentage: "+2.1" },
      ],
    },
    grossIncome: {
      day: {
        grossAssets: "$34,769,618",
        expenses: "$19,618",
        income: "$12,020,000",
        change: "+1.1%",
      },
      month: {
        grossAssets: "$44,769,618",
        expenses: "$29,618",
        income: "$4,020,000",
        change: "+0.3%",
      },
      quarter: {
        grossAssets: "$49,769,618",
        expenses: "$19,618",
        income: "$5,020,000",
        change: "-0.2%",
      },
      fy2024: {
        grossAssets: "$54,769,618",
        expenses: "$789,618",
        income: "$18,020,000",
        change: "+1.5%",
      },
    },
  },
  usa: {
    netAssets: "$34,769,618",
    grossAssets: "$38,789,618",
    liabilities: "$1,020,000",
    change: "-0.2%",
    portoPerformance: {
      all: [
        { period: "Month", amount: "201,321", percentage: "-1.5" },
        { period: "Quarter", amount: "1,814,603", percentage: "+5.1" },
        { period: "FY 2024", amount: "6,285,372", percentage: "+4.6" },
      ],
      realised: [
        { period: "Month", amount: "20,000", percentage: "-0.3" },
        { period: "Quarter", amount: "0", percentage: "0" },
        { period: "FY 2024", amount: "1,500,000", percentage: "-2.5" },
      ],
      unrealised: [
        { period: "Month", amount: "20,321", percentage: "+0.2" },
        { period: "Quarter", amount: "414,603", percentage: "-0.3" },
        { period: "FY 2024", amount: "21,785,372", percentage: "+22.1" },
      ],
    },
    grossIncome: {
      day: {
        grossAssets: "$54,769,618",
        expenses: "$19,618",
        income: "$2,020,000",
        change: "+2.1%",
      },
      month: {
        grossAssets: "$64,769,618",
        expenses: "$129,618",
        income: "$14,020,000",
        change: "+2.3%",
      },
      quarter: {
        grossAssets: "$14,769,618",
        expenses: "$29,618",
        income: "$15,020,000",
        change: "-0.2%",
      },
      fy2024: {
        grossAssets: "$14,769,618",
        expenses: "$1,789,618",
        income: "$18,020,000",
        change: "+6.5%",
      },
    },
  },
  europe: {
    netAssets: "$14,769,618",
    grossAssets: "$18,789,618",
    liabilities: "$8,020,000",
    change: "+0.5%",
    portoPerformance: {
      all: [
        { period: "Month", amount: "201,321", percentage: "+0.5" },
        { period: "Quarter", amount: "114,603", percentage: "+1.1" },
        { period: "FY 2024", amount: "5,285,372", percentage: "+4.6" },
      ],
      realised: [
        { period: "Month", amount: "0", percentage: "0" },
        { period: "Quarter", amount: "0", percentage: "0" },
        { period: "FY 2024", amount: "1,500,000", percentage: "-2.5" },
      ],
      unrealised: [
        { period: "Month", amount: "1,201,321", percentage: "+2.2" },
        { period: "Quarter", amount: "1,414,603", percentage: "-1.3" },
        { period: "FY 2024", amount: "1,785,372", percentage: "-2.1" },
      ],
    },
    grossIncome: {
      day: {
        grossAssets: "$14,7669,618",
        expenses: "$119,618",
        income: "$17,020,000",
        change: "+10.1%",
      },
      month: {
        grossAssets: "$24,769,618",
        expenses: "$129,618",
        income: "$4,020,000",
        change: "+0.1%",
      },
      quarter: {
        grossAssets: "$34,769,618",
        expenses: "$19,618",
        income: "$15,020,000",
        change: "-1.2%",
      },
      fy2024: {
        grossAssets: "$14,769,618",
        expenses: "$289,618",
        income: "$38,020,000",
        change: "+12.5%",
      },
    },
  },
};

export default dummyData;
