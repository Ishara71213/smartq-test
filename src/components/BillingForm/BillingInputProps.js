//-------------------------properties values for input component--------------------------------
export const BillingInputProps = [
  {
    id: 1,
    name: "billNo", // e.trget.name reffers to this
    type: "text",
    placeholder: "Please Enter",
    errorMessage: "*First name Required",
    required: true,
    label: "Bill No",
  },
  {
    id: 2,
    name: "patientId", // e.trget.name reffers to this
    type: "text",
    placeholder: "Please Enter",
    errorMessage: "*Patient Id Required",
    required: true,
    label: "Patient Id",
  },
  {
    id: 3,
    name: "patientName", // e.trget.name reffers to this
    type: "text",
    placeholder: "Please Enter",
    errorMessage: "*Patient Name Required",
    required: true,
    label: "Patient Name",
  },
  {
    id: 4,
    name: "doctorName", // e.trget.name reffers to this
    type: "text",
    placeholder: "Please Enter",
    errorMessage: "*Doctor Name Required",
    required: true,
    label: "Doctor Name",
  },
  {
    id: 5,
    name: "dateAndTime", // e.trget.name reffers to this
    type: "date",
    placeholder: "Date And Time",
    errorMessage: "*Valid Date Required",
    required: true,
    label: "Date and Time",
  },
  {
    id: 6,
    name: "charge",
    type: "text",
    placeholder: "Doctor Charge",
    errorMessage: "*Must have Charge",
    autoComplete: "on",
    required: true,
    // pattern: "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",
    label: "Charge",
  },
  {
    id: 7,
    name: "tax",
    type: "text",
    placeholder: "Enter Tax",
    errorMessage: "*must add  tax",
    autoComplete: "on",
    required: true,
    // pattern: "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",
    label: "Tax",
  },
  {
    id: 8,
    name: "total",
    type: "text",
    placeholder: "Total Amount",
    errorMessage: "*must add total amount",
    // autoComplete: "on",
    required: true,
    // pattern: "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",
    label: "Total Amount",
  },
];
