export interface Transaction {
id: string,
account: string,
description: string,
category:  string,
reference: string,
currency: string,
amount: number,
status: string,
transactionDate: Date | string,
createdAt: Date | string,
updatedAt: Date | string
}

/**
"id": "e206619a-6dd2-4cc1-8603-429631d46476",
"account": "Sydney Beard",
"description": "sadsad",
"category": "Another One",
"reference": "",
"currency": "GBP",
"amount": -23,
"status": "BOOKED",
"transactionDate": "2021-06-22 12:55:26",
"createdAt": "2021-06-23 17:09:31",
"updatedAt": "2021-06-23 17:09:31"
 */