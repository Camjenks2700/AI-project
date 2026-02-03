export type LineType = "text" | "number" | "select" | "checkbox";

export type FormLine = {
  id: string;
  line: string;
  label: string;
  type: LineType;
  section: string;
  explanation: string;
  traps: string[];
  source: string;
  manual?: boolean;
  placeholder?: string;
  options?: string[];
};

export const formLines: FormLine[] = [
  {
    id: "filing-status",
    line: "Header",
    label: "Filing status",
    type: "select",
    section: "Header & Filing Status",
    options: [
      "Single",
      "Married filing jointly",
      "Married filing separately",
      "Head of household",
      "Qualifying surviving spouse"
    ],
    explanation:
      "Your filing status determines your tax brackets and standard deduction. It is based on your marital status and household situation on December 31, 2025.",
    traps: [
      "Choosing Head of household without meeting the support tests",
      "Assuming married filing jointly is always best without comparing",
      "Using an outdated status after a life change"
    ],
    source: "Personal records"
  },
  {
    id: "name-address",
    line: "Header",
    label: "Name and address (informational)",
    type: "text",
    section: "Header & Filing Status",
    explanation:
      "Provide the primary taxpayer name and mailing address for the return. This wizard only tracks a summary, not the full legal record.",
    traps: [
      "Using an old address for important IRS mail",
      "Leaving out apartment/unit number",
      "Misspelling legal names"
    ],
    source: "Personal records",
    manual: true,
    placeholder: "Jane Q. Taxpayer, 123 Main St"
  },
  {
    id: "dependents",
    line: "Header",
    label: "Dependents listed",
    type: "number",
    section: "Header & Filing Status",
    explanation:
      "Enter the number of dependents you plan to claim. This impacts credits and eligibility tests.",
    traps: [
      "Claiming a dependent who provided over half of their own support",
      "Missing a qualifying child age test",
      "Duplicating dependents across returns"
    ],
    source: "Personal records",
    manual: true,
    placeholder: "0"
  },
  {
    id: "line-1a",
    line: "Line 1a",
    label: "Wages, salaries, tips",
    type: "number",
    section: "Income",
    explanation:
      "Report taxable wages from Form W-2, box 1. Include tips and other compensation already reflected in box 1.",
    traps: [
      "Using box 3 instead of box 1",
      "Omitting wages from a second job",
      "Including non-taxable employer benefits"
    ],
    source: "Form W-2"
  },
  {
    id: "line-1b",
    line: "Line 1b",
    label: "Household employee wages (not on W-2)",
    type: "number",
    section: "Income",
    explanation:
      "Include taxable household employee wages that are not reported on a W-2. This is less common but still part of earned income.",
    traps: [
      "Double counting wages already on W-2",
      "Including non-taxable caregiving payments",
      "Leaving it blank when you issued a Schedule H"
    ],
    source: "Schedule H / household records",
    manual: true
  },
  {
    id: "line-1c",
    line: "Line 1c",
    label: "Tip income not reported on W-2",
    type: "number",
    section: "Income",
    explanation:
      "Report tips that were not included on a W-2. This is typically from Form 4137 calculations.",
    traps: [
      "Ignoring unreported cash tips",
      "Using gross sales instead of tips",
      "Not attaching Form 4137 when required"
    ],
    source: "Form 4137",
    manual: true
  },
  {
    id: "line-1d",
    line: "Line 1d",
    label: "Medicaid waiver payments excluded from income",
    type: "number",
    section: "Income",
    explanation:
      "Certain Medicaid waiver payments can be excluded from income. Enter the excluded amount for tracking.",
    traps: [
      "Including payments that qualify for exclusion",
      "Forgetting to keep documentation",
      "Mixing excluded and taxable amounts"
    ],
    source: "Medicaid waiver documentation",
    manual: true
  },
  {
    id: "line-1e",
    line: "Line 1e",
    label: "Taxable dependent care benefits",
    type: "number",
    section: "Income",
    explanation:
      "Report taxable dependent care benefits that exceed the exclusion limit. Check W-2 box 10 and Form 2441.",
    traps: [
      "Forgetting to reduce by the exclusion",
      "Not coordinating with Form 2441",
      "Misreporting employer-provided benefits"
    ],
    source: "Form W-2 box 10 / Form 2441"
  },
  {
    id: "line-1f",
    line: "Line 1f",
    label: "Employer adoption benefits",
    type: "number",
    section: "Income",
    explanation:
      "Include taxable adoption benefits reported on your W-2. Some amounts may be excluded based on limits.",
    traps: [
      "Including excluded benefits",
      "Missing Form 8839 coordination",
      "Ignoring phaseouts"
    ],
    source: "Form W-2 box 12 / Form 8839",
    manual: true
  },
  {
    id: "line-1g",
    line: "Line 1g",
    label: "Wages from Form 8919",
    type: "number",
    section: "Income",
    explanation:
      "Report wages from Form 8919 if you were treated as an employee but received a 1099-NEC.",
    traps: [
      "Using this line for self-employment income",
      "Forgetting to include SS and Medicare tax",
      "Not filing Form 8919 when required"
    ],
    source: "Form 8919",
    manual: true
  },
  {
    id: "line-1h",
    line: "Line 1h",
    label: "Other earned income",
    type: "number",
    section: "Income",
    explanation:
      "Enter other earned income that does not fit above wage lines. Keep clear documentation.",
    traps: [
      "Misclassifying self-employment income",
      "Including non-taxable benefits",
      "Leaving out side gig wages"
    ],
    source: "Other income statements",
    manual: true
  },
  {
    id: "line-1z",
    line: "Line 1z",
    label: "Total wages and tips",
    type: "number",
    section: "Income",
    explanation:
      "Sum of wages and tips from lines 1a through 1h. This wizard does not auto-calculate, so enter the total manually.",
    traps: [
      "Forgetting a wage line in the total",
      "Not matching totals to supporting forms",
      "Math errors after adjustments"
    ],
    source: "Lines 1a-1h",
    manual: true
  },
  {
    id: "line-2a",
    line: "Line 2a",
    label: "Tax-exempt interest",
    type: "number",
    section: "Income",
    explanation:
      "Report tax-exempt interest, such as municipal bond interest. This is informational but impacts other calculations.",
    traps: [
      "Including taxable interest",
      "Missing private activity bond interest",
      "Ignoring 1099-INT box 8"
    ],
    source: "Form 1099-INT box 8"
  },
  {
    id: "line-2b",
    line: "Line 2b",
    label: "Taxable interest",
    type: "number",
    section: "Income",
    explanation:
      "Report taxable interest from 1099-INT forms. Use the total of box 1 amounts.",
    traps: [
      "Forgetting interest from multiple banks",
      "Including tax-exempt interest",
      "Not attaching Schedule B when required"
    ],
    source: "Form 1099-INT box 1"
  },
  {
    id: "line-3a",
    line: "Line 3a",
    label: "Qualified dividends",
    type: "number",
    section: "Income",
    explanation:
      "Enter qualified dividends from Form 1099-DIV box 1b. This may be taxed at preferential rates.",
    traps: [
      "Using total dividends instead of qualified",
      "Ignoring holding period rules",
      "Missing Schedule B requirement"
    ],
    source: "Form 1099-DIV box 1b"
  },
  {
    id: "line-3b",
    line: "Line 3b",
    label: "Ordinary dividends",
    type: "number",
    section: "Income",
    explanation:
      "Report total ordinary dividends from Form 1099-DIV box 1a.",
    traps: [
      "Leaving out dividend reinvestments",
      "Mixing qualified and ordinary amounts",
      "Missing dividends from multiple brokers"
    ],
    source: "Form 1099-DIV box 1a"
  },
  {
    id: "line-4a",
    line: "Line 4a",
    label: "IRA distributions",
    type: "number",
    section: "Income",
    explanation:
      "Enter total IRA distributions from Form 1099-R box 1. This is the gross amount before any taxable portion.",
    traps: [
      "Reporting only the taxable amount",
      "Missing rollover documentation",
      "Ignoring inherited IRA distributions"
    ],
    source: "Form 1099-R box 1"
  },
  {
    id: "line-4b",
    line: "Line 4b",
    label: "Taxable IRA distributions",
    type: "number",
    section: "Income",
    explanation:
      "Enter the taxable portion of IRA distributions. Use Form 8606 if you have basis in a traditional IRA.",
    traps: [
      "Failing to account for basis",
      "Using gross instead of taxable amount",
      "Not documenting rollover amounts"
    ],
    source: "Form 1099-R box 2a / Form 8606",
    manual: true
  },
  {
    id: "line-5a",
    line: "Line 5a",
    label: "Social Security benefits",
    type: "number",
    section: "Income",
    explanation:
      "Report total Social Security benefits from SSA-1099 box 5.",
    traps: [
      "Using the Medicare premium net amount",
      "Missing benefits for a spouse",
      "Not keeping SSA-1099 documentation"
    ],
    source: "SSA-1099 box 5"
  },
  {
    id: "line-5b",
    line: "Line 5b",
    label: "Taxable Social Security benefits",
    type: "number",
    section: "Income",
    explanation:
      "Enter the taxable portion of Social Security benefits. This is calculated using the Social Security worksheet.",
    traps: [
      "Assuming benefits are fully tax-free",
      "Forgetting to include other income",
      "Miscalculating provisional income"
    ],
    source: "Social Security worksheet",
    manual: true
  },
  {
    id: "line-6",
    line: "Line 6",
    label: "Capital gain or (loss)",
    type: "number",
    section: "Income",
    explanation:
      "Enter net capital gain or loss from Schedule D (or Form 8949).",
    traps: [
      "Ignoring short-term vs long-term split",
      "Missing crypto transactions",
      "Exceeding loss limits without carryover"
    ],
    source: "Schedule D / Form 8949"
  },
  {
    id: "line-7",
    line: "Line 7",
    label: "Other income from Schedule 1",
    type: "number",
    section: "Income",
    explanation:
      "Enter other income reported on Schedule 1, such as business income, unemployment, or prizes.",
    traps: [
      "Leaving out unemployment compensation",
      "Mixing income and adjustments",
      "Failing to include side gig income"
    ],
    source: "Schedule 1, Part I"
  },
  {
    id: "line-8",
    line: "Line 8",
    label: "Total income",
    type: "number",
    section: "Income",
    explanation:
      "Sum all income lines. This wizard does not auto-calculate, so enter the total manually.",
    traps: [
      "Omitting a line from the total",
      "Math errors when totaling",
      "Not matching totals to schedules"
    ],
    source: "Lines 1-7",
    manual: true
  },
  {
    id: "line-10",
    line: "Line 10",
    label: "Adjustments to income (Schedule 1)",
    type: "number",
    section: "Adjustments & AGI",
    explanation:
      "Enter the total adjustments to income from Schedule 1, such as educator expenses or IRA deductions.",
    traps: [
      "Including deductions that belong on Schedule A",
      "Forgetting student loan interest",
      "Missing HSA deductions"
    ],
    source: "Schedule 1, Part II"
  },
  {
    id: "line-11",
    line: "Line 11",
    label: "Adjusted gross income (AGI)",
    type: "number",
    section: "Adjustments & AGI",
    explanation:
      "AGI equals total income minus adjustments. Enter the result manually for this prototype.",
    traps: [
      "Failing to subtract adjustments",
      "Using taxable income instead of AGI",
      "Not matching Schedule 1 totals"
    ],
    source: "Line 8 minus Line 10",
    manual: true
  },
  {
    id: "line-12",
    line: "Line 12",
    label: "Standard deduction or itemized deductions",
    type: "number",
    section: "Deductions",
    explanation:
      "Enter your standard deduction or your total itemized deductions from Schedule A.",
    traps: [
      "Itemizing when the standard deduction is higher",
      "Forgetting to include charitable contributions",
      "Not including state and local tax limits"
    ],
    source: "Standard deduction tables / Schedule A",
    manual: true
  },
  {
    id: "line-13",
    line: "Line 13",
    label: "Qualified business income (QBI) deduction",
    type: "number",
    section: "Deductions",
    explanation:
      "Enter the QBI deduction from Form 8995 or 8995-A if applicable.",
    traps: [
      "Taking QBI without eligible business income",
      "Missing phaseouts",
      "Using gross income instead of qualified income"
    ],
    source: "Form 8995 / 8995-A",
    manual: true
  },
  {
    id: "line-14",
    line: "Line 14",
    label: "Add lines 12 and 13",
    type: "number",
    section: "Deductions",
    explanation:
      "Enter the total of your deductions and QBI deduction.",
    traps: [
      "Forgetting to include QBI",
      "Math errors when adding",
      "Not matching supporting forms"
    ],
    source: "Lines 12 + 13",
    manual: true
  },
  {
    id: "line-15",
    line: "Line 15",
    label: "Taxable income",
    type: "number",
    section: "Deductions",
    explanation:
      "Taxable income equals AGI minus deductions. Enter the result manually.",
    traps: [
      "Using AGI without subtracting deductions",
      "Not accounting for negative taxable income",
      "Misplacing itemized deduction totals"
    ],
    source: "Line 11 minus Line 14",
    manual: true
  },
  {
    id: "line-16",
    line: "Line 16",
    label: "Tax",
    type: "number",
    section: "Tax & Credits",
    explanation:
      "Enter tax from the tax tables, schedule, or other calculation.",
    traps: [
      "Using the wrong filing status table",
      "Ignoring capital gain worksheet",
      "Not matching taxable income"
    ],
    source: "Tax tables / Schedule D worksheet",
    manual: true
  },
  {
    id: "line-17",
    line: "Line 17",
    label: "Amount from Schedule 2, line 3",
    type: "number",
    section: "Tax & Credits",
    explanation:
      "Enter additional taxes from Schedule 2, such as AMT or excess advance premium tax credit.",
    traps: [
      "Omitting AMT",
      "Confusing Schedule 2 with Schedule 3",
      "Not including repayment of advance credits"
    ],
    source: "Schedule 2"
  },
  {
    id: "line-18",
    line: "Line 18",
    label: "Total tax",
    type: "number",
    section: "Tax & Credits",
    explanation:
      "Total tax combines line 16 and line 17. Enter the total manually.",
    traps: [
      "Forgetting additional taxes",
      "Math errors when totaling",
      "Mismatching schedules"
    ],
    source: "Lines 16 + 17",
    manual: true
  },
  {
    id: "line-19",
    line: "Line 19",
    label: "Child tax credit or credit for other dependents",
    type: "number",
    section: "Tax & Credits",
    explanation:
      "Enter the nonrefundable portion of the child tax credit or other dependent credit.",
    traps: [
      "Claiming a dependent who is not eligible",
      "Ignoring phaseout limits",
      "Mixing refundable vs nonrefundable portions"
    ],
    source: "Schedule 8812",
    manual: true
  },
  {
    id: "line-20",
    line: "Line 20",
    label: "Amount from Schedule 3, line 8",
    type: "number",
    section: "Tax & Credits",
    explanation:
      "Enter total nonrefundable credits from Schedule 3.",
    traps: [
      "Putting refundable credits here",
      "Skipping education credits",
      "Not attaching Schedule 3 when required"
    ],
    source: "Schedule 3"
  },
  {
    id: "line-21",
    line: "Line 21",
    label: "Total credits",
    type: "number",
    section: "Tax & Credits",
    explanation:
      "Enter total credits from lines 19 and 20. This wizard does not auto-calculate.",
    traps: [
      "Using refundable credits here",
      "Math errors when totaling",
      "Missing Schedule 8812"
    ],
    source: "Lines 19 + 20",
    manual: true
  },
  {
    id: "line-22",
    line: "Line 22",
    label: "Subtract line 21 from line 18",
    type: "number",
    section: "Tax & Credits",
    explanation:
      "Enter the tax after nonrefundable credits. This wizard requires manual entry.",
    traps: [
      "Subtracting refundable credits",
      "Incorrect math",
      "Using line 16 instead of line 18"
    ],
    source: "Line 18 minus Line 21",
    manual: true
  },
  {
    id: "line-23",
    line: "Line 23",
    label: "Other taxes (Schedule 2, line 21)",
    type: "number",
    section: "Tax & Credits",
    explanation:
      "Enter other taxes such as self-employment tax or additional tax on IRAs.",
    traps: [
      "Missing self-employment tax",
      "Duplicating Schedule 2 totals",
      "Ignoring household employment taxes"
    ],
    source: "Schedule 2, Part II"
  },
  {
    id: "line-24",
    line: "Line 24",
    label: "Total tax",
    type: "number",
    section: "Tax & Credits",
    explanation:
      "Total tax includes line 22 plus line 23. Enter the final total manually.",
    traps: [
      "Leaving out other taxes",
      "Math errors",
      "Not matching Schedule 2"
    ],
    source: "Lines 22 + 23",
    manual: true
  },
  {
    id: "line-25a",
    line: "Line 25a",
    label: "Federal income tax withheld (W-2)",
    type: "number",
    section: "Payments & Credits",
    explanation:
      "Enter federal income tax withheld from Forms W-2 box 2.",
    traps: [
      "Using state withholding instead of federal",
      "Missing W-2 from multiple jobs",
      "Including Social Security withholding"
    ],
    source: "Form W-2 box 2"
  },
  {
    id: "line-25b",
    line: "Line 25b",
    label: "Federal income tax withheld (1099)",
    type: "number",
    section: "Payments & Credits",
    explanation:
      "Enter federal income tax withheld from 1099 forms.",
    traps: [
      "Missing backup withholding",
      "Including state withholding",
      "Not totaling all 1099s"
    ],
    source: "Form 1099-INT/DIV/NEC"
  },
  {
    id: "line-25c",
    line: "Line 25c",
    label: "Federal income tax withheld (other)",
    type: "number",
    section: "Payments & Credits",
    explanation:
      "Enter other withholding, such as from Form 2439 or Form W-2G.",
    traps: [
      "Duplicating W-2 withholding",
      "Forgetting gambling winnings withholding",
      "Not documenting withholding sources"
    ],
    source: "Form W-2G / Form 2439",
    manual: true
  },
  {
    id: "line-25d",
    line: "Line 25d",
    label: "Total federal income tax withheld",
    type: "number",
    section: "Payments & Credits",
    explanation:
      "Total withholding from lines 25a-25c. Enter manually.",
    traps: [
      "Math errors when totaling",
      "Missing a withholding source",
      "Including state tax"
    ],
    source: "Lines 25a-25c",
    manual: true
  },
  {
    id: "line-26",
    line: "Line 26",
    label: "Estimated tax payments",
    type: "number",
    section: "Payments & Credits",
    explanation:
      "Enter estimated tax payments made for 2025, including prior year refund applied.",
    traps: [
      "Leaving out prior year refund applied",
      "Using state estimated payments",
      "Not reconciling payment dates"
    ],
    source: "IRS payment records"
  },
  {
    id: "line-27",
    line: "Line 27",
    label: "Earned income credit (EIC)",
    type: "number",
    section: "Payments & Credits",
    explanation:
      "Enter refundable earned income credit if eligible.",
    traps: [
      "Claiming without earned income",
      "Missing qualifying child rules",
      "Using prior year tables"
    ],
    source: "EIC worksheet",
    manual: true
  },
  {
    id: "line-28",
    line: "Line 28",
    label: "Additional child tax credit",
    type: "number",
    section: "Payments & Credits",
    explanation:
      "Enter refundable portion of the child tax credit.",
    traps: [
      "Combining with nonrefundable credit",
      "Missing Schedule 8812",
      "Ignoring income phaseouts"
    ],
    source: "Schedule 8812",
    manual: true
  },
  {
    id: "line-29",
    line: "Line 29",
    label: "American opportunity credit",
    type: "number",
    section: "Payments & Credits",
    explanation:
      "Enter refundable portion of the American Opportunity Credit.",
    traps: [
      "Claiming for ineligible students",
      "Using the nonrefundable portion",
      "Missing Form 8863"
    ],
    source: "Form 8863",
    manual: true
  },
  {
    id: "line-30",
    line: "Line 30",
    label: "Recovery rebate credit",
    type: "number",
    section: "Payments & Credits",
    explanation:
      "Enter any recovery rebate credit applicable for 2025 (if available).",
    traps: [
      "Claiming when no credit exists for the year",
      "Not reconciling previous stimulus payments",
      "Using prior year notices"
    ],
    source: "IRS notices",
    manual: true
  },
  {
    id: "line-31",
    line: "Line 31",
    label: "Amount from Schedule 3, line 13",
    type: "number",
    section: "Payments & Credits",
    explanation:
      "Enter other refundable credits from Schedule 3.",
    traps: [
      "Including nonrefundable credits",
      "Not attaching Schedule 3",
      "Mixing with payments"
    ],
    source: "Schedule 3"
  },
  {
    id: "line-32",
    line: "Line 32",
    label: "Total other payments and refundable credits",
    type: "number",
    section: "Payments & Credits",
    explanation:
      "Enter total payments and refundable credits from lines 27-31.",
    traps: [
      "Leaving out refundable credits",
      "Math errors",
      "Including withholding again"
    ],
    source: "Lines 27-31",
    manual: true
  },
  {
    id: "line-33",
    line: "Line 33",
    label: "Total payments",
    type: "number",
    section: "Payments & Credits",
    explanation:
      "Add total withholding (line 25d), estimated payments (line 26), and line 32.",
    traps: [
      "Double counting withholding",
      "Math errors",
      "Missing estimated payments"
    ],
    source: "Lines 25d + 26 + 32",
    manual: true
  },
  {
    id: "line-34",
    line: "Line 34",
    label: "If line 33 is more than line 24, enter the amount overpaid",
    type: "number",
    section: "Refund or Amount You Owe",
    explanation:
      "Enter overpayment amount if your total payments exceed total tax.",
    traps: [
      "Entering negative numbers",
      "Using the wrong comparison line",
      "Not reconciling totals"
    ],
    source: "Line 33 minus Line 24",
    manual: true
  },
  {
    id: "line-35a",
    line: "Line 35a",
    label: "Refund amount",
    type: "number",
    section: "Refund or Amount You Owe",
    explanation:
      "Enter the refund you want to receive. This can be all or part of the overpayment.",
    traps: [
      "Requesting more than the overpayment",
      "Not deciding on direct deposit",
      "Forgetting to split refund"
    ],
    source: "Line 34",
    manual: true
  },
  {
    id: "line-35b",
    line: "Line 35b",
    label: "Amount applied to 2026 estimated tax",
    type: "number",
    section: "Refund or Amount You Owe",
    explanation:
      "Enter any portion of your overpayment applied to next year’s estimated tax.",
    traps: [
      "Applying more than the overpayment",
      "Not tracking estimated payment credits",
      "Leaving it blank when needed"
    ],
    source: "Line 34",
    manual: true
  },
  {
    id: "line-37",
    line: "Line 37",
    label: "Amount you owe",
    type: "number",
    section: "Refund or Amount You Owe",
    explanation:
      "If total tax exceeds payments, enter the amount owed.",
    traps: [
      "Entering negative values",
      "Not including penalties",
      "Using wrong comparison lines"
    ],
    source: "Line 24 minus Line 33",
    manual: true
  },
  {
    id: "third-party",
    line: "Line 38",
    label: "Third-party designee?",
    type: "checkbox",
    section: "Third-Party Designee",
    explanation:
      "Indicate whether you want the IRS to discuss the return with a designee. This wizard only tracks yes/no.",
    traps: [
      "Selecting yes without designating a person",
      "Forgetting to provide contact details",
      "Assuming it grants unlimited authority"
    ],
    source: "Form 1040, Third-Party Designee",
    manual: true
  },
  {
    id: "signature",
    line: "Signature",
    label: "Signature section (informational)",
    type: "text",
    section: "Signature",
    explanation:
      "Confirm you reviewed the return. Do not enter full SSNs here; keep it informational only.",
    traps: [
      "Entering full SSNs in notes",
      "Skipping spouse signature when required",
      "Not retaining a copy of the return"
    ],
    source: "Form 1040 signature area",
    manual: true,
    placeholder: "Reviewed and ready to sign"
  }
];

export const exampleReturn: Record<string, string | number | boolean> = {
  "filing-status": "Head of household",
  "name-address": "Jordan Example, 456 Cedar Ave",
  dependents: 2,
  "line-1a": 84500,
  "line-2b": 120,
  "line-3b": 450,
  "line-4b": 0,
  "line-6": -250,
  "line-7": 2200,
  "line-8": 87020,
  "line-10": 1200,
  "line-11": 85820,
  "line-12": 20800,
  "line-13": 0,
  "line-14": 20800,
  "line-15": 65020,
  "line-16": 7480,
  "line-17": 0,
  "line-18": 7480,
  "line-19": 2000,
  "line-20": 0,
  "line-21": 2000,
  "line-22": 5480,
  "line-23": 0,
  "line-24": 5480,
  "line-25a": 8200,
  "line-25d": 8200,
  "line-26": 500,
  "line-27": 0,
  "line-32": 0,
  "line-33": 8700,
  "line-34": 3220,
  "line-35a": 3220,
  "line-37": 0,
  "third-party": false,
  signature: "Reviewed"
};
