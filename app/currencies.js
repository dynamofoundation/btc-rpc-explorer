global.currencyTypes = {
	"dyn": {
		id: "dyn",
		type:"native",
		name:"DYN",
		multiplier:1,
		default:true,
		decimalPlaces:8
	},
	"atm": {
		id: "atm",
		type:"native",
		name:"atm",
		multiplier:100000000,
		decimalPlaces:0
	},
	"usd": {
		id: "usd",
		type:"exchanged",
		name:"USD",
		multiplier:"usd",
		decimalPlaces:2,
		symbol:"$"
	},
	"eur": {
		id: "eur",
		type:"exchanged",
		name:"EUR",
		multiplier:"eur",
		decimalPlaces:2,
		symbol:"€"
	},
	"gbp": {
		id: "gbp",
		type:"exchanged",
		name:"GBP",
		multiplier:"gbp",
		decimalPlaces:2,
		symbol:"£"
	},
};

global.currencySymbols = {
	"dyn": "₿",
	"usd": "$",
	"eur": "€",
	"gbp": "£"
};