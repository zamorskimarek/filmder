
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Information for a person reviewing this application

## In the requirements for this position Redux andRedux-saga were listed. This is a reason why instead of using simple context I have decided to use more complex approach
## Additionally in the task description i found "The user can accept or reject the suggestion. Accepting is done by a green button.Rejecting is done by red button or swipe." I understand that this wording was made on purpose - this is why there is a different logic for buttons Accept and Reject. The behavior of single card after pressing Accept was not described so I have decided that swiping left and right will trigger Reject, while pressing Accept will move card upwards (and will notify backend about user decision as well).
