export const serviceabilityPayload = {
  id: "Pre-Qualifier",
  loanTerm: 25,
  loanAmount: 0,
  interestRateOngoing: 0,
  interestOnlyPeriod: 0,
  negativeGearingPercentage: 0,
  ownerships: [{ owner: "PRIMARY_APPLICANT", proportion: 1 }],
  otherDebts: [
    {
      type: "CREDIT_CARD",
      balance: 0,
      customerDeclaredRepaymentAmount: 0,
      repaymentFrequency: "YEARLY",
      limitValue: 100,
    },
    {
      type: "OTHER_LOAN",
      customerDeclaredRepaymentAmount: 100,
      repaymentFrequency: "MONTHLY",
      limitValue: 0,
    },
    {
      type: "CREDIT_CARD",
      balance: 0,
      customerDeclaredRepaymentAmount: 0,
      repaymentFrequency: "YEARLY",
      limitValue: 0,
    },
    {
      type: "OTHER_LOAN",
      customerDeclaredRepaymentAmount: 0,
      repaymentFrequency: "MONTHLY",
      limitValue: 0,
    },
  ],
  otherMortgages: [
    {
      outstandingBalance: 0,
      limitValue: 0,
      remainingTerm: 0,
      interestRate: 0,
      negativeGearingPercentage: 0,
      customerDeclaredRepaymentAmount: 133,
      repaymentFrequency: "MONTHLY",
      ownerships: [{ owner: "PRIMARY_APPLICANT", proportion: 1 }],
    },
  ],
  relationshipBetweenApplicants: "OTHER",
  applicants: [
    {
      applicantType: "PRIMARY_APPLICANT",
      addressPostcode: "9999",
      maritalStatus: "SINGLE",
      noOfDependents: 1,
      incomes: {
        employments: [
          {
            jobType: "FULL_TIME",
            salary: 123456,
            salaryFrequency: "YEARLY",
            bonus: 56789,
            bonusFrequency: "YEARLY",
          },
        ],
        others: [],
        rentals: [
          {
            incomeId: "Rental-Income",
            proportionalAmount: 0,
            proportionalAmountFrequency: "MONTHLY",
          },
        ],
      },
      expenses: [
        { type: "OTHER_EXPENSES", amount: 100, amountFrequency: "MONTHLY" },
      ],
    },
  ],
};
