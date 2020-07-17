1. What problem does the context API help solve?
   > The Context API helps us solve the problem of prop drilling by enabling us to share specific forms of data across all levels of the application.

2) In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   > A Store holds the state of the application.
   > An Action describs the changes in the State of the application.
   > A Reducer actually carries out the State transition depending on the action.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

   > Application State is the global data for the entire application. Component State >is a piece of state that a single component uses. For example, you can use `Component State` if the item you're updating doesn't need to re-render the component & you only need to update a small slice of state otherwise, use `Application State`.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

   > It's redux middleware that allows us to use async code in an otherwise syncronous action. Thunk gets activated in the middle of an action & can stop, or change that action if it wants - allowing us to pause the action until we get a response from the async code.

5. What is your favorite state management system you've learned and this sprint? Please explain why!
   > Redux, I enjoy the concept of having the Store and the workflow of the entire Redux process starting at the App => Action (via dispatch) => Reducer => Redux Store => Subscriber/repeat/unsubscribe
