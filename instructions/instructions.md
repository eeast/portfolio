## React Challenge: React Portfolio

Being a web developer means being part of a community. You'll need a place to share your projects not only if you're applying for jobs or working as a freelancer but also so that you can share your work with fellow developers and collaborate on future projects.

Now that you've completed multiple projects, your task is to create a portfolio, using your new React skills to help set you apart from other developers whose portfolios don't use the latest technologies.

Just as you did in the module project, you'll need to deploy this application to Heroku. Follow the same instructions that you did for the project to create a build that you can deploy.

## User Story

```md
AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position
```

## Acceptance Criteria

```md
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) 
```

## Mock-Up

The following animation shows the web application's appearance and functionality:

![User clicks through About Me, Portfolio, Resume, and Contact sections of the webpage and enters information on Contact page.](./assets/20-react-homework-demo-01.gif)

## Getting Started

The application that you built for this module will help you know where to start when building your portfolio. You'll use Create React App just as you did with your module project, but you should be aware of a few structural differences in the component hierarchy. Your portfolio should include the following:

* A single `Header` component that appears on multiple pages
* A single `Navigation` component within the header that will be used to conditionally render the different sections of your portfolio
* A single `Project` component that will be used multiple times in the Portfolio section
* A single `Footer` component that appears on multiple pages

**NOTE** The contact form should be similar to the one you built in the module project. Because this application doesn't include a back end or connect to an API, you can set up this functionality the same way you did in the module project and add in back-end functionality after you've covered it in the next few weeks.

In the meantime, consider adding your email address and phone number on the Contact page.

### Projects

For each project you feature in your portfolio, you should include the following:

* An image of the deployed application (either a GIF or a screenshot)
* The title of the project
* A link to the deployed application
* A link to the corresponding GitHub repository

### Design

As with the previous portfolio Challenge, remember that "good" design is subjective; however, your site should look polished. Here are a few guidelines on what that means:

* Use mobile-first design.
* Choose a color palette so that your site doesn't just look like the default Bootstrap theme or an unstyled HTML site. Look into resources like [Coolors**Links to an external site.**](https://coolors.co/) or another color scheme generator to help you create something that will stand out.
* Make sure the font size is large enough to read and that the colors don't cause eye strain.
* Consider using animations and React component libraries. Note that this will not affect your grade, but it may impact how potential employers gauge your knowledge.

## Grading Requirements

**NOTE**If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:

* A repository that has no code
* A repository that includes a unique name but nothing else
* A repository that includes only a README file but nothing else
* A repository that only includes starter code

This Challenge is graded based on the following criteria:

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:
  * Application must use React to render content.
  * Application has a single `Header` component that appears on multiple pages, with a `Navigation` component within it that’s used to conditionally render About Me, Portfolio, Contact, and Resume sections.
  * Application has a single `Project` component that’s used multiple times in the Portfolio section.
  * Application has a single `Footer` component that appears on multiple pages.
  * Application must be deployed to GitHub Pages.

### Deployment: 32%

* Application deployed at live URL.
* Application loads with no errors.
* Application GitHub URL submitted.
* GitHub repository contains application code.

### Application Quality: 15%

* User experience is intuitive and easy to navigate.
* User interface style is clean and polished.
* Application uses a color scheme other than the default Bootstrap color palette.

### Repository Quality: 13%

* Repository has a unique name.
* Repository follows best practices for file structure and naming conventions.
* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
* Repository contains multiple descriptive commit messages.
* Repository contains a high-quality README file with description, screenshot, and link to deployed application.

## How to Submit the Challenge

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.
* The URL of the GitHub repository, with a unique name and a README describing the project.

**NOTE**You are allowed to miss up to two Challenge assignments and still earn your certificate. If you complete all Challenge assignments, your lowest two grades will be dropped. If you wish to skip this assignment, click Next, and move on to the next Module.

Comments are disabled for graded submissions in BootCamp Spot. If you have questions about your feedback, please notify your instructional staff or the Student Success Manager. If you would like to resubmit your work for an improved grade, you can use the Resubmit Assignment button to upload new links. You may resubmit up to three times for a total of four submissions.

**IMPORTANT** **It is your responsibility to include a note in the README section of your repo specifying code source and its location within your repo** . This applies if you have worked with a peer on an assignment, used code in which you did not author or create sourced from a forum such as Stack Overflow, or you received code outside curriculum content from support staff such as an Instructor, TA, Tutor, or Learning Assistant. This will provide visibility to grading staff of your circumstance in order to avoid flagging your work as plagiarized.

If you are struggling with a Challenge or any aspect of the curriculum, please remember that there are student support services available for you:

1. Office hours facilitated by your TA(s)
2. Tutor sessions ([sign up**Links to an external site.**](https://tinyurl.com/BootCampTutorTeam))
3. Ask the class Slack channel/get peer support
4. AskBCS Learning Assistants
