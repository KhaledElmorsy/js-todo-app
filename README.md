# js-todo-app
A Todo list webapp built with vanilla Javascript using the Model, View Controller (MVC) design pattern. The source code is annotated extensively and jsdoc documentation is avaiable [here][doc home].

### [Live Demo][demo]


## Model-View-Controller
The MVC pattern is great for decoupling a webapp's data structure and storage (model), DOM manipulation and HTML element creation (view), and manipulation of both its models and views according to a user's inputs and programmed logic (controller).

### Model <span style="font-size:0.8em">[(doc)][models]</span>
The `model` represents the app's data. This Todo app is divided into projects, each with a list of Todos, and each Todo has a list of checklist items. 

#### Structure Overview
![Model structure general overview][model overview]

`Model` objects can be [Project][project], [Todo][todo], or [Checklist Item][checklist] objects. Each class is derived from a parent [Data model][datamodel] class.

Projects are stored in a [project list][projectlist], which is the main app model and is loaded from and saved to `localStorage`.

### View <span style="font-size:0.8em">[(doc)][views]</span>
A `View` handles rendering a `model` objects' data onto the page by creating and appending elements to the DOM.

#### Overview
![Summary of View objects][view diagram]

In this project, [view][view] [objects][populator] `render` elements to the page by: 
1. Passing a source `model` into `template` functions that:
   1.  Generate HTML strings by interpolating template literals [see here][template]
   2.   Convert them to HTML elements [see here][convert element]
2. These elements are then appended to a `container`, a specified parent element in the DOM.

### Controller <span style="font-size:0.8em">[(doc)][controllers]</span>
`Controllers` contain both the `view` and `model` objects and contain all the logic that responds to a user's input.
#### Overview
![Controller Overview][controller overview]
In this app, `controller` objects handle:
- Calling the `view`'s rendering and DOM manipulation methods
- Setting event listeners on elements rendered by the `view`
- Storing handlers and methods that update the `model` and `view` according to  events trigerred by the user.
- Saving the `model` to `localStorage`
- Instancing new `controller`s for child model objects. 

## Key Project Points
- Using design patterns lets you write clean and efficient code with less spaghetti 🍝.
- Adding code documentation with JSdoc makes it easier to understand and more maintainable down the line and by others with only minor extra maintanence overhead 
  - Settings `@type`s is great, and opens up a lot of functionality such as property suggestions.
  - Plus, it feels damn good to hover a function and see what you wrote about it

## Fun Takeaways
- When you're in a jam for some diagrams, there's no shame in being a PowerPoint stan.
  -  Just add your shapes, select them all, right click and `Save as Picture`. It exports PNGs with proper transparency.

[doc home]: https://kelmorsy.github.io/js-todo-app/out

[demo]: https://kelmorsy.github.io/js-todo-app

[models]:https://kelmorsy.github.io/js-todo-app/out/Models.html

[model overview]:https://raw.githubusercontent.com/kelmorsy/js-todo-app/main/diagrams/model-structure.png

[project]:https://kelmorsy.github.io/js-todo-app/out/Models.Project.html

[todo]:https://kelmorsy.github.io/js-todo-app/out/Models.Todo.html

[checklist]:https://kelmorsy.github.io/js-todo-app/out/Models.ChecklistItem.html

[datamodel]:https://kelmorsy.github.io/js-todo-app/out/Models.DataModel.html

[projectlist]:https://kelmorsy.github.io/js-todo-app/out/Models.ProjectList.html

[views]:https://kelmorsy.github.io/js-todo-app/out/Viewsasc

[view diagram]:https://raw.githubusercontent.com/kelmorsy/js-todo-app/main/diagrams/view-overview.png

[view]:https://kelmorsy.github.io/js-todo-app/out/Views-View.html

[populator]: https://kelmorsy.github.io/js-todo-app/out/Views.PopulatorView.html

[template]:https://kelmorsy.github.io/js-todo-app/out/templates_todo.js.html

[convert element]:https://kelmorsy.github.io/js-todo-app/out/Views.Templates.ProjectTemplates.html

[controllers]:https://github.com/kelmorsy/js-todo-app/blob/main/diagrams/controller-overview.png

[controller overview]:https://raw.githubusercontent.com/kelmorsy/js-todo-app/main/diagrams/controller-overview.png
