# Habit Tracker App
Building good habits require consistency. This app is for you if you are looking to inculcate good habits, be consistent and stay accountable. 

You can check out the app right [here]().

## Description
You can add your habit into a list of habits that you want to track. Each time you have done the activity/habit for the day, you can mark it checked and see how much have progressed thus far!

### Technologies Used
```
- React JS
- Bootstrap
- Bootstrap with react
- Axios for API
```

### Wireframes
Initial wireframe that I had in mind on the functionality, look and feel of the app.


![wireframe](screenshots/Wireframe_Habit_Tracker.png)



### User Stories

* As a person who is new to running, I want to train consistently so that I can run a marathon that I've planned at the end of the year.

* As an aspiring developer, I want to be able to visually see how consistent I have been in coding so that I know I am on the right track.

## Planning and Development Process

The deadline for completing this project was within a week. I thought of what what could be useful based on the knowledge I've learnt thus far for front-end web development by using React Framework at its core technology. I like to use habit trackers, and been using a few different ones every once a while, so I delved into the idea of building my own one myself.


The habit trackers that I do use are on mobile, so the experience and feel is very much different than what I was intending to built, which is for web (not just mobile). In designing the wireframe, I thought of what I would want to have as basic functionalities in the app. I broke it down to 3 key things:

1. Adding and Removing Habits
2. Checking and unchecking off the habits 
3. Visual representation of the progress/accomplishment

These were my core functionalities in this iteration of the project, and my guide for the wireframe.

With the wireframe as a guiding compass,I then proceed to build upon the broad components that I thought were necessary and further dividing it into the smaller manageable areas that I can work out the functionality easily.


### Problem-Solving Strategy

The mentality I had was to divide the tasks to smaller and more manageable components, and to build upon the functionality from there. From a broad perspective, issues tend to seem difficult, but once divided to manageable chunks, it is also easier to try and find possible methods or solutions that others might have thought of in their different applications.

The great thing about programming is that in the online community, there are plentiful of resources such as documentations, forums and even video tutorials that help you unwrap your mind into trying to understand various libraries available for use.

One of the biggest hurdles that I faced early on was to solve the problem of displaying checkboxes checked status correctly. Looking back, it was a very simple issue but at the time I was doing it, it took me more than a day to figure out. Basically, I had the checked status for the boxes in one object state, and another state that is within each checkbox component to also reflect the states. This ends up rendering the checboxes incorrectly. Ultimate, I remove the state that was within the checkboxes and instead passed down the checked state from the main parent components and props down to the checkboxes.

### Unsolved problems

##### 1. Incorrect method of updating the values to the API

At the moment, I've hard-coded the increment and decrement of the pixel values based on a state that stores the frequency of habits in each day. For example, I would expect to update the `value = 1` if user checks a checkbox. However, due to setState being updated directly, it leads to a bug with how React scheduling. For the moment, I've hardcoded an additional buffer of +/- 1 for increment/decrement to take into account how React scheduler works.

#### 2. Setting the Pixe.la response with dangerouslyInnerHtml

The fetch response from Pixe.la for the graph returns an XML file with SVG image. I have circumvented this issue by directly setting the XML file into the HTML code. I believe that there should be a better way to this. Will need to scour for better solution.

## APIs Used

List your APIs you have used in this project and explain why did you use it.

#### 1. [Pixe.la](https://pixe.la/)

Pixe.la API allows you to create a heat-map sort of graph, similar to the one in GitHub, that shows how frequently you did something on a day-to-day basis (think of commits!). It is a good visual representation that I think ties very nicely to the habit tracker app.

The API does the heavy lifting of translating the data that we feed to the graph. Further information can be found in their documentation.

#### 2. [Inspiration Quotes](https://api.goprogram.ai/inspiration/docs/)

As the name suggests, this API provides motivational and inspiring quotes when fetched. Again, this ties nicely with the whole feel of the app. I wanted the user to feel motivated when he/she sees the list of daily habits that needs to be done, and that little quote might just be the spark he/she needs.

## Acknowledgments

The following are useful resources that I learnt along the way while doing this project.

1. [Videos React Hooks](https://youtube.com/playlist?list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h)
2. [ Bootstrap CSS Framework - Full Course for Beginners ](https://www.youtube.com/watch?v=-qfEOE4vtxE&t=2771s)
3. [ Bootstrap 5 Crash Course ](https://www.youtube.com/watch?v=Jyvffr3aCp0)

## References

* [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
* [React Bootstrap](https://react-bootstrap.github.io/)
* [ImmerJS](https://immerjs.github.io/immer/)
* [Date-fns](https://date-fns.org/)
