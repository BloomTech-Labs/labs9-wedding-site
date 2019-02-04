# vBeloved api refrence 
https://vBeloved.now.sh


## get /users
-------------
Gets all users
```json
[
    {
      "id": 188,
      "first_name": "Mary",
      "last_name": String,
      "email": String,
      "phone": String,
      "address": String,
      "wedding_id": 145,
      "guest": true
    },
    {
      "id": 189,
      "first_name": "Bob",
      "last_name": String,
      "email": String,
      "phone": String,
      "address": String,
      "wedding_id": 145,
      "guest": true
    },
    {
        "id": 193,
        "first_name": "Breanna",
        "last_name": "Wintheiser",
        "email": "Alfonso.Schaden@hotmail.com",
        "phone": null,
        "address": "6957 Maryjane Fall, East Brady, CT 48214-6713",
        "wedding_id": 145,
        "guest": 1
    },
    {
        "id": 194,
        "first_name": "Citlalli",
        "last_name": "Howe",
        "email": "Alysa.Boyle45@gmail.com",
        "phone": null,
        "address": "33385 Nolan Pass, Port Sigmundville, MT 01556-2171",
        "wedding_id": 145,
        "guest": 1
    }
    ...
]
```

## get /:id/allquestions
-----------------
will get all questions associated with wedding_id :id
```json
[
    {
        wedding_id: wedding_id,
        category: 'First Name',
        multiple_choice: false,
        question: '',
        answer: ''
    },
    {
        wedding_id: wedding_id,
        category: 'Last Name',
        multiple_choice: false,
        question: '',
        answer: ''
    },
    {
        wedding_id: wedding_id,
        category: 'Attendance',
        multiple_choice: true,
        question: 'Will you be attending our wedding?',
        answer: 'Attending,Not attending,Maybe'
    },
    {
        wedding_id: wedding_id,
        category: 'Email',
        multiple_choice: false,
        question: 'What is your email address?',
        answer: ''
    },
    {
        wedding_id: wedding_id,
        category: 'Phone',
        multiple_choice: false,
        question: 'What is your phone number?',
        answer: ''
    },
    {
        wedding_id: wedding_id,
        category: 'Address',
        multiple_choice: false,
        question: 'What is your mailing address?',
        answer: ''
    },
    {
        wedding_id: wedding_id,
        category: 'Wedding Team',
        multiple_choice: true,
        question: 'Are you a friend or family of... ?',
        answer: `${couple[0].first_name},${couple[1].first_name},Both`
    },
]
```

## post /answer
-----------------
request body data schema
```json
{
	"wedding_id": 3,
	"answers": [
		{
		"question_id": 1,
		"answer": "yes"
		},
		{
			"question_id": 2,
			"answer": "yes"
		},
		{
			"question_id": 3,
			"answer": "maybe"
		}
	],
	"userObj": {
		"wedding_id": 3,
		"first_name": "hargobind",
		"last_name": "atwal",
		"email": "Ola.Jakubowski65@yahoo.com",
		"address": "123 street",
		"phone": "123-456-7890"
    },
    "guestObj": {
        "attending": "Not Attending" | "Attending" | "Maybe",
        "related_spouse": String
    }
}
```

## Get /invite/:id
-----------------
Gets wedding details and couple

```json
{
  "weddingDetails": {
    "id": 145,
    "event_date": "January 1st 2019",
    "event_address": "San Francisco",
    "design_template": 1
  },
  "couple": [
    {
      "id": 188,
      "first_name": "Mary",
      "last_name": "",
      "email": String,
      "phone": String,
      "address": String,
      "wedding_id": 145,
      "guest": true
    },
    {
      "id": 189,
      "first_name": "Bob",
      "last_name": "",
      "email": String,
      "phone": String,
      "address": String,
      "wedding_id": 145,
      "guest": true
    }
  ]
}