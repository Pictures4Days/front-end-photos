# Pictures 4 Days

The program is a full-stack web application that allows users to upload and view images. It uses a React front-end with an Express and MongoDB backend.

When a user logs in, they are authenticated using `Auth0` and then can input image information to the server. The images are stored in a MongoDB database and associated with the user who uploaded them.

The data flow starts when a user logs in and navigates to the `ImageFunction` component, which is responsible for fetching and displaying images from the server. The component makes a `GET` request to the server using the `fetchImages` function from `ImageUtilis.js`.

When the server receives the `GET` request, it first verifies that the user is authenticated using the `verifyUser` middleware. It then queries the MongoDB database for all images associated with the user's email address and returns them to the client as a JSON response.

The `ImageFunction` component receives the JSON response and maps over the images to create an array of Image components. Each Image component displays a thumbnail of the image and provides buttons to delete or update the image. When the user clicks the delete or update button, a corresponding HTTP request is sent to the server using the deleteImage or updateImage function from `ImageUtilis.js`.

When the server receives a `DELETE` or `PUT` request, it first verifies that the user is authenticated using the `verifyUser` middleware. It then updates or deletes the image in the MongoDB database and returns a success or error message to the client.

The user can also add new images using the `ImageForm` component, which sends a `POST` request to the server using the createImage function from `ImageUtilis.js`. When the server receives the `POST` request, it verifies that the user is authenticated using the `verifyUser`a middleware and then creates a new image record in the MongoDB database associated with the user's email address.

## Team Agreement

## Project Management Tool

Slack, and Github

## Cooperation Plan

Every person on your team is an asset. This is your chance to discover the hidden strengths and areas for growth for each team member.

### Key Strengths of Each Team Member

* Cam - Solid coding skills
* Malik - A deep understanding of high-level concepts
* Slava - Through problem-solving skills

### Utilizing Strengths in Project Execution

* Cam - Paired coding
* Malik - Thoughtful discussion of architecture
* Slava - Perseverance to work at the issues

### Professional Competencies for Development

* Cam - Communication
* Malik - Communication
* Slava - Being a better team member

### Approach to Day-to-Day Work

* Cam - Morning review of code and dissemination of components
* Malik - Timely communication with the team
* Slava - Evening review of code and ticket creation

### Handling Divergence of Ideas, Execution Tasks, and Duties

Undoing, redoing, replacing, or otherwise steamrolling the project as an individual is considered unacceptable. The team plans to account for the inevitable divergence of ideas, execution tasks, and assignments of duties by having frequent team meetings to discuss progress and any issues that arise. 

## Conflict Plan

Your team should agree on a process for handling disagreements should they arise. It is better to have a plan in place ahead of time so you can all refer back to it when necessary. 

### Resolving Conflicts

The team will first try to resolve conflicts through 1-1 conversations or a team meeting. If the conflict is not resolved at this level, the team will elevate the issue to Audrey. 

### Addressing Dominant Team Members

If one person is taking over the project and not letting the other members contribute, the team will immediately pull everyone into a team meeting to help break-up the labor.

### Approaching Different Levels of Understanding and Skill

The team plans to communicate any concerns about understanding and skill levels through Slack messages, and if necessary, move the discussion to a huddle for further detail. 

### Raising Concerns for Inadequate Contributions

The team will first try to address concerns about inadequate contributions through 1-1 conversations or a team meeting. If the issue is not resolved at this level, the team will elevate the issue to Audrey. 

### Escalating Conflicts

If resolution attempts are unsuccessful, the team will escalate the conflict to Audrey or the Code Fellows staff. 

## Communication Plan

Before beginning to tackle the project, determine how your group will communicate with each other. This is not an individual effort. Make sure everyone feels comfortable with the identified methods of speaking up. 

### Availability for Communication

Slack messages at 9, meeting at 9:30 to resolve git pulls, and talk over the day's plans and the team's needs. 

### Platforms for Communication

Slack, Zoom, Remo

### Frequency of Breaks

As needed, but a definite lunch break for all that may vary per time zone.

### Falling Behind

If the team starts to fall behind, they will reach out to the TA and Audrey for help on any unresolved coding issues without delay. 

### Communication after Hours and on the Weekend

Slack

### Ensuring Everyone's Voice is Heard

Awkward silences in meetings to ensure everyone feels they can speak.

### Creating a Safe Environment

The team will conduct temperature checks on everyone's feelings about the direction and the way they go about solving problems.

## Git

### Components on GitHub

The front and backend of our services

### Documentation

![Dataflow](/src/img/Screenshot%202023-03-31%20at%201.52.19%20PM.png)

![DataStuff](/src/img/Screenshot%202023-04-03%20at%208.27.23%20PM.png)
