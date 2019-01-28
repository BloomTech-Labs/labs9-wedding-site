
# get /:id/allquestions
will get all questions associated with wedding_id :id
```json
[
    {
        "id": 1,
        "wedding_id": 3,
        "multiple_choice": 0,
        "question": "Are you attending?",
        "answer": "yes, no, maybe",
        "category": "multi-input"
    },
    {
        "id": 2,
        "wedding_id": 3,
        "multiple_choice": 0,
        "question": "Are you attending?",
        "answer": "yes, no, maybe",
        "category": "multi-input"
    },
    {
        "id": 4,
        "wedding_id": 3,
        "multiple_choice": 0,
        "question": "Are you attending?",
        "answer": "yes, no, maybe",
        "category": "multi-input"
    },
    {
        "id": 5,
        "wedding_id": 3,
        "multiple_choice": 0,
        "question": "Are you attending?",
        "answer": "yes, no, maybe",
        "category": "multi-input"
    }
]
```

# post /answer
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
	"guestObj": {
		"wedding_id": 3,
		"first_name": "hargobind",
		"last_name": "atwal",
		"email": "Ola.Jakubowski65@yahoo.com",
		"address": "123 street",
		"phone": "123-456-7890"
	}
}
```