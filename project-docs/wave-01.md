# Wave 01: Setup and Baseline

**Learn Topics: React Components, Props, and State & Event Handling required for this wave**

## Setup

Use the following steps to get started:

1. One team member should fork and clone the repository.
1. Add other team member(s) as collaborators in GitHub
1. Run `yarn install` to install dependencies.
1. Run `yarn start` to run the local development server.

## Baseline

In Wave 01, we will explore the starter code for Task List Front End.

Read through the code in `App.js`, `TaskList.js` and `Task.js` and their style sheets to understand how data and events are being handled. You may use the following questions and suggestions to guide your exploration:

1. What `props` does `Task` have? Where do they come from?
   The props in Task are id, title, and isComplete. They come from App js through TaskList.
2. The `Task` component uses destructuring to read in the props `const Task = ({ id, title, isComplete }) => {...`
    - How would the code change if `{id, title, isComplete}` were replaced with `props`?
       - isComplete and title become undefined
    - Consider making this change and the subsequent necessary changes through the rest of the component to deepen your understanding of the code.
      - replace isComplete with props.isComplete
      - replace title with props.title
3. How is the ~~strikethrough~~ style applied when the task title is clicked?
      - When a task is clicked, it checks if it's completed yet or not. If isComplete is false, then the buttonClass variable takes on the default value. If isComplete is true, then the buttonClass variable takes on the tasks_item_toggle--completed class and the rule set for that class applies. 
    - Consider updating the appropriate rule sets to change the text or background color when a task is marked complete.
      - Done
4. What `props` does `TaskList` have? Where do they come from?
   - The props are key, id, title, and isComplete. They come from App.js const Tasks
5. Where is the function `getTaskListJSX` called in `TaskList`?
    - It's a helper function that is embedded within the returned JSX element of the TaskList function. 
    - How would the code change without this helper function?
      - Then we would have to hard code the return of each object
6. What component is `TASKS` passed to in `App`?
   - Tasks is a presentational component getting passed into App
    - How does the component pass `TASKS`?
     - It passes Tasks as a prop into the TaskList component.
    - What element is the component wrapped in?
    - The component is wrapped in a <div> element. 

The suggestions above should give you a strong foundation for working with Task List Front End. As time allows, follow your curiosity to explore more of the code and features.








