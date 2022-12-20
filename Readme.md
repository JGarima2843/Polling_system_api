Task I m Working upon

You need to create an API where anyone can create questions with options and also add votes to it
    - Authentication/User identity is not needed, this is going to be a completely open application, however
if you want to and think there’s extra time, you can create authentication
- Features
    - Create a question (you can add as many questions as you want)
    - Add options to a question
    - Add a vote to an option of question
    - Delete a question → (optional: A question can’t be deleted if one of it’s options has votes)
    - Delete an option → (optional: An option can’t be deleted if it has even one vote given to it)
    - View a question with it’s options and all the votes given to it
- Required Routes (Remember, in a real test, you won’t be given routes mostly)
    - /questions/create (To create a question)✅
    - /questions/:id/options/create (To add options to a specific question)
    - /questions/:id/delete (To delete a question)✅
    - /options/:id/delete (To delete an option)
    - /options/:id/add_vote (To increment the count of votes)
    - /questions/:id (To view a question and it’s options)✅


{
    id: 1,
    title: “Who is your favorite from the Ninjas Mentors”,
    options: [
    {
        id: 1,
        text: “Aakash Tyagi”,
        votes: 100,

        link_to_vote: “http://localhost:8000/options/1/add_vote”,
    },
    {
        id: 2,
        text: “Parikh Jain”,
        votes: 101,
        link_to_vote: “http://localhost:8000/options/2/add_vote”,
    },
    {
        id: 3,
        text: “Ankush Singla”,
        votes: 102,
        link_to_vote: “http://localhost:8000/options/3/add_vote”,
    },
    {
        id: 4,
        text: “Nidhi”,
        votes: 110,
        link_to_vote: “http://localhost:8000/options/3/add_vote”,
    }
    ]
}
