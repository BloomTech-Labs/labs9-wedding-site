const generateDefaultQuestions = (
        wedding_id, 
        first_name,
        p_firstname
    ) => {
    wedding_id = wedding_id[0]
    // console.log(wedding_id, first_name, p_firstname)
    return [
        {
            wedding_id,
            category: 'First Name',
            multiple_choice: false,
            question: '',
            answer: ''
        },
        {
            wedding_id,
            category: 'Last Name',
            multiple_choice: false,
            question: '',
            answer: ''
        },
        {
            wedding_id,
            category: 'Attendance',
            multiple_choice: true,
            question: 'Will you be attending our wedding?',
            answer: 'Attending,Not attending,Maybe'
        },
        {
            wedding_id,
            category: 'Email',
            multiple_choice: false,
            question: 'What is your email address?',
            answer: ''
        },
        {
            wedding_id,
            category: 'Phone',
            multiple_choice: false,
            question: 'What is your phone number?',
            answer: ''
        },
        {
            wedding_id,
            category: 'Address',
            multiple_choice: false,
            question: 'What is your mailing address?',
            answer: ''
        },
        {
            wedding_id,
            category: 'Wedding Team',
            multiple_choice: true,
            question: 'Are you a friend or family of... ?',
            answer: `${first_name},${p_firstname},Both`
        },
    ]
}

module.exports = {
    generateDefaultQuestions
}